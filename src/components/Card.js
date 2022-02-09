import React from 'react';

import './Styles/Card.css'


function Card() {
  return (
    <div className="main-container container">
    <div className="row main_row">
      <div className="col-6">
        <h2 className="text-white">Hello, I'm</h2>
        <h1 className="text-warning m-heading">Amar AitGherbi</h1>
        <h2 className="text-white">Web Developer</h2>
      </div>
      <div className="imgMe col-6">
        <img
          src="/images/gus.png" alt="gus.."
          className="img-fluid"
        />
      </div>
    </div>
  </div>
  )
}

export default Card;
