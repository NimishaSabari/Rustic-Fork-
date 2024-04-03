

import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">   
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Rustic Fork, where rustic charm meets culinary excellence. Our restaurant offers a cozy atmosphere and a menu filled with hearty, farm-to-table dishes crafted with care and creativity. Join us for a dining experience that celebrates the beauty of simplicity and the richness of local flavors.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Established with a passion for traditional cuisine and a love for wholesome ingredients, Rustic Fork has been a culinary cornerstone in our community since [2023]. Over the years, we've upheld a commitment to quality, serving up memorable meals that reflect our dedication to authenticity and flavor. Our journey continues as we honor our roots and embrace the future of fine dining.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
