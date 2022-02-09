import React from 'react';
import './Styles/Navbar.css'
import {FaCode} from 'react-icons/fa'




function Navbar() {
  return (
 
           

              
    <div className="container navigation pt-3">
    <div className="row">
      <div className="col-6 d-flex justify-content-start align-items-center">
         
        <i className="fas fa-code fa-2x text-warning pb-3"><FaCode size={25}/></i>
        
    
       
        <h5 className="d-inline pl-2 text-white">Portfolio</h5>
      </div>
      <div className="col-6 pt-2">
        <div
          className="row text-center p-0 d-flex justify-content-end align-items-center">
        
          <div className="col-3 ">
            <a href="./assets/Resume.html" className="text-white navigation-link">About</a>
          </div>

          <div className="col-3">
            <a href="https://steffb23.github.io/Group-Project-1/" className="text-white navigation-link">Projects</a>
          </div>

          <div className="col-3">
            <a href="https://github.com/Gus199" className="text-white navigation-link">Github </a>
            </div>

          <div className="col-3">
            <a href=" https://1drv.ms/w/s!AtPmyALeivjJgQtwGR77nlAIHBei?e=FZZC26" target="_blank" className="text-white navigation-link">Resume</a>
            </div>
        </div>
      </div>
    </div>
  </div>
 

        
  )
  
}

export default Navbar;
