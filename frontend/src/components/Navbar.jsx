import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='container p=2'>
<nav className="navbar navbar-expand-lg  border-bottom"style={{backgroundColor:"#fff"}}>
  <div className="container-fluid">
    <Link className="navbar-brand"  to="/"><img src="src/images/logo.svg"style={{width:"25%"}}alt="Logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <form className="d-flex" role="search">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Signup">signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/product">Product</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/pricing">pricing</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/support">Support</Link>
        </li>
        
      </ul>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
