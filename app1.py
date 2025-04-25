from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import base64
import os
import io
from PIL import Image 
import pdf2image
import google.generativeai as genai


# Load environment variables and configure Gemini
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_gemini_response(input, pdf_content, prompt):
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content([input, pdf_content[0], prompt])
    return response.text

async def input_pdf_setup(uploaded_file):
    if uploaded_file is not None:
        # Convert the PDF to image
        file_content = await uploaded_file.read()  # Add await here
        images = pdf2image.convert_from_bytes(
            file_content,
            poppler_path="/opt/homebrew/Cellar/poppler/25.04.0/bin"
        )

        first_page = images[0]

        # Convert to bytes
        img_byte_arr = io.BytesIO()
        first_page.save(img_byte_arr, format='JPEG')
        img_byte_arr = img_byte_arr.getvalue()

        pdf_parts = [
            {
                "mime_type": "image/jpeg",
                "data": base64.b64encode(img_byte_arr).decode()
            }
        ]
        return pdf_parts
    else:
        raise FileNotFoundError("No file uploaded")

@app.post("/tell_me_about_resume")
async def tell_me_about_resume(job_description: str = Form(...), resume: UploadFile = File(...)):
    input_prompt = """
    You are an experienced Technical Human Resource Manager, your task is to review the provided resume against the job description. 
    Please share your professional evaluation on whether the candidate's profile aligns with the role. 
    Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements.
    """
    pdf_content = await input_pdf_setup(resume)  # Add await here
    response = get_gemini_response(input_prompt, pdf_content, job_description)
    return {"response": response}

@app.post("/percentage_match")
async def percentage_match(job_description: str = Form(...), resume: UploadFile = File(...)):
    input_prompt = """
    You are a skilled ATS (Applicant Tracking System) scanner with a deep understanding of data science and ATS functionality.
    Evaluate the resume against the provided job description. Give me the percentage of match if the resume matches
    the job description. First the output should come as percentage and then keywords missing and last final thoughts.
    """
    pdf_content = await input_pdf_setup(resume)  # Add await here
    response = get_gemini_response(input_prompt, pdf_content, job_description)
    return {"response": response}

@app.post("/upload")
def upload_resume(file: UploadFile = File(...), job_description: str = None):
    pdf_content = input_pdf_setup(file)
    response = get_gemini_response(job_description, pdf_content, job_description)
    return {"response": response}
