import React, { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  const handleCVClick = () => {
    setTimeout(() => {
      window.open('https://drive.google.com/file/d/1V4uvAMBPm1Ttj6nqb6jDw9qaK02YOWnS/view?usp=sharing', '_blank');

    }, 2000);
  };

  return (
    <div className=''>
      <div className='container'>
        <div className='hero_wrapper'>
          <div className={`hero_main ${animate ? 'hero_animate' : ''}`}>
            <h2>A.ARTHI</h2>
            <p>FRONTEND WEB DEVELOPER</p>
            <small>
              Passionate Frontend Web Developer with a knack for crafting intuitive and responsive user interfaces using React and Bootstrap. Committed to delivering high-quality, user-friendly web applications.
            </small>
            <button onClick={handleCVClick}>Get My CV!</button>
          </div>
          <div className={`hero_img ${animate ? 'hero_animate' : ''}`}>
            <img src="/assets/myself/5.jpg" alt="Myself" className='hero_img-img' />
          </div>
          <div className={`hero_links ${animate ? 'hero_animate' : ''}`}>
            <a href="https://github.com/ArthiGit18"><GitHubIcon className='contact_id1' /></a>
            <a href="https://www.linkedin.com/in/arthianbalagan/"><LinkedInIcon className='contact_id1' /></a>
            <a href="https://www.instagram.com/its_a_rthi/"><InstagramIcon className='contact_id1' /></a>
            <a href="https://leetcode.com/arthianbalagan180/">
              <img src="/assets/contact/leetcode.png" alt="Leetcode" className='contact_id1' />
            </a>
            <a href="https://arthimyportfolio.netlify.app/" className='contact_id'>
              <img src="/assets/contact/netlify.svg" alt="Netlify" className='contact_id1' />
            </a>
            <a href="https://wa.me/916379424101" rel="noreferrer" target='_blank'><WhatsAppIcon className='contact_id1' /></a>
            <div className='rule'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
