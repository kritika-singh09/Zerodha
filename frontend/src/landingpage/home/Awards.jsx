import React from 'react'

function Awards() {
  return (
    <div className='container'>

     <div className="row">
      <div className="col-6 p-5">
        <img src="src/images/largestBroker.svg"/>
      </div>
      <div className="col-6 p-5 mt-3">
       <h1>Largest stock broker in India</h1>
       <p className='mb-5'>2+ million Zerodha clients contribute to  over 15% of all volumes in India daiy by trading and investing in:</p>
       <div className="row">
        <div className="col-6">
                 <ul>
        <li>
          <p>Futures and Options</p>
        </li>
        <li>
          <p>Commodity Derivatives</p>
        </li>
        <li>
          <p>Currency and derivatives </p>
        </li>
       </ul>
        </div>
        <div className="col-6">
                 <ul>
        <li>
          <p>Futures and Options</p>
        </li>
        <li>
          <p>Commodity Derivatives</p>
        </li>
        <li>
          <p>Currency and derivatives </p>
        </li>
       </ul>
        </div>
       </div>
<img src="src/images/pressLogos.png" style={{width:"80%"}}/>
      </div>
     </div>
    </div>
  )
}

export default Awards
