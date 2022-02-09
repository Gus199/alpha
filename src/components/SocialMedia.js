import React from 'react';
import { FaGithub,FaYoutube,FaLinkedin } from 'react-icons/fa';






function SocialMedia() {
  return (
     
    <div id="social-media" className="container-fluid">
    <div className="container text-white py-5">
      <h4 className="text-warning">More About Me</h4>
      <h1 className="m-heading">Let's be friends </h1>
      

      <div className="row pt-5">
        <div className="col-md-3 col-sm-12 media_link btn" href="#">
          <div className="row">

            <div className="col-6 d-flex justify-content-start">
              <h3><a href="https://www.linkedin.com/onboarding/start/open-to-job-opportunity/existing/" className="m-0 pt-2 text-white">LinkedIn <FaLinkedin /></a></h3>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <i className="fab fa-linkedin-in fa-2x text-secondary"></i>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12  media_link btn">
          <div className="row">
            <div className="col-6 d-flex justify-content-start">
              <h3><a href="https://github.com/Gus199" className="m-0 pt-2 text-white">Github <FaGithub /></a></h3>
              
              
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <i className="fab fa-github fa-2x text-secondary"></i>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12 media_link btn">
          <div className="row">
            <div className="col-6 d-flex justify-content-start">
              <h3><a href="Gus199" className="m-0 pt-2 text-white">Youtube <FaYoutube /></a></h3>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <i className="fab fa-youtube fa-2x text-secondary"></i>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12  media_link bg-warning btn">
          <div className="row">
            <div className="col-6  d-flex justify-content-start">
              <h3><a href="mailto:augustine2903a@gmail.com" className="m-0 pt-2 text-white">Amar</a></h3>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <i className="fas fa-envelope fa-2x text-secondary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default SocialMedia;
