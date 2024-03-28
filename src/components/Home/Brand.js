// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from '../../styles/Home/Brand.module.css';
// import Airtel from '../../images/airtel.png';
// import UBA from '../../images/UBA.png';
// import Paga from '../../images/paga.png';
// import MTN from '../../images/MTN.png';
// import Dangote from '../../images/dangote.png';
// import Firstbank from '../../images/firstbank.png';
// import Cloud from '../../images/cloud.png';
// import Ebay from '../../images/ebay.png';
// import Tux from '../../images/tux.png';
// import Spotify from '../../images/spotify.png';
// import Airbnb from '../../images/airbnb.png';
// import Facebook from '../../images/facebook.png';
// import Cocacola from '../../images/cocacola.png';
// import Zoom from '../../images/zoom.png';
// import Creativecloud from '../../images/creativecloud.png';
// import Netflix from '../../images/netflix.png';
// import Discord from '../../images/discord.png';
// import Figma from '../../images/figma.png';
// import Paypal from '../../images/paypal.png';
// import Adobe from '../../images/adobe.png';

// export default function Brand() {

  
//   const row1 =  [Airtel, UBA, Paga, MTN, Dangote, Firstbank];
//   const row2 =  [Cloud, Ebay, Tux, Spotify, Airbnb, Facebook, Cocacola];
//   const row3 =  [Zoom, Creativecloud, Netflix, Discord, Figma, Paypal, Adobe];


//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear"
//     };

//     return(
//       <div className={styles.mainContainer}>
//         <Slider {...settings}>
//           {row1.map((item1, index) => (
//             <div className={styles.container}>
//               <img src={item1} />
//             </div>
//           ))}
//         </Slider>
//         <Slider {...settings}>
//           {row2.map((item2, index) => (
//             <div className={styles.container}>
//               <img src={item2} />
//             </div>
//           ))}
//         </Slider>
//         <Slider {...settings}>
//           {row3.map((item2, index) => (
//             <div className={styles.container}>
//               <img src={item2} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
  
// }


import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/Home/Brand.module.css';

// Define your image imports
import Airtel from '../../images/airtel.png';
import UBA from '../../images/UBA.png';
import Paga from '../../images/paga.png';
import MTN from '../../images/MTN.png';
import Dangote from '../../images/dangote.png';
import Firstbank from '../../images/firstbank.png';
import Cloud from '../../images/cloud.png';
import Ebay from '../../images/ebay.png';
import Tux from '../../images/tux.png';
import Spotify from '../../images/spotify.png';
import Airbnb from '../../images/airbnb.png';
import Facebook from '../../images/facebook.png';
import Cocacola from '../../images/cocacola.png';
import Zoom from '../../images/zoom.png';
import Creativecloud from '../../images/creativecloud.png';
import Netflix from '../../images/netflix.png';
import Discord from '../../images/discord.png';
import Figma from '../../images/figma.png';
import Paypal from '../../images/paypal.png';
import Adobe from '../../images/adobe.png';

export default function Brand() {
  const logos = [
    [Airtel, UBA, Paga, MTN, Dangote, Firstbank],
    [Cloud, Ebay, Tux, Spotify, Airbnb, Facebook, Cocacola],
    [Zoom, Creativecloud, Netflix, Discord, Figma, Paypal, Adobe],
  ];

  return (
    <div className={styles.brandWrapper}>
      {logos.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.brandList}>
          {row.map((logo, index) => (
            <div key={index} className={styles.brandListItem}  style={{ backgroundImage: `url(${logo})` }}  />
          ))}
        </div>
      ))}
    </div>
  );
};
