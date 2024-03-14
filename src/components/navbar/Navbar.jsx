import React, { useState } from 'react'
import './Navbar.css'
import { MdDarkMode } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBell } from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaCartPlus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const [ Mobilemenu , setMobileMenu] = useState(false)

  return (
   <>
   
    <div className='first-container'>

<div className='lang'>
<select name="lang" id="lang">
  <option value="ENglish">English</option>
  <option value="Hindi">हिंदी</option>
  <option value="Marathi">मराठी</option>
  <option value="Gujrati">ગુજરાતી</option>
</select>
</div>

<div className='modes'>
<MdDarkMode  id='dark-logo'/> Dark Modes |


</div>

<div className='fonts'>
    Font Size A A+ |
</div>

<div className='ticket'>
    Raise a ticket
</div>

<div className='help'>
     <NavLink to="/help">Need Help ?</NavLink>
</div>
</div>

<div className='second-container'>
    <div className='main-logo'>
        <NavLink to="/"><img src='https://assets-bg.gem.gov.in/resources/images/gem-new-logo-v6.svg '/></NavLink>
    </div>

    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value) }}/>
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>


      </div>
    </div>

    <div className='auction'>
        Auction
    </div>

    <div className='bids'>
Bids
    </div>

    <div className='login'>
<NavLink to="/login">Login </NavLink>
    </div>
    <FaCartPlus  id='cart'/>


</div>


<div className='third-container'>
<div class="dropdownn">
  <button class="dropbtnn"><GiHamburgerMenu  id='ham-logo'/>    Categories</button>
  <div class="dropdownn-content">
    <a href="#">Products<LiaAngleRightSolid  className='right-icon'/>    </a>

    <a href="#">Servises <LiaAngleRightSolid  className='right-icon'/>  </a>
    <a href="#">Browse All Brands <LiaAngleRightSolid />  </a>
    <a href="#">Browse  Categories <LiaAngleRightSolid /> </a>

  </div>
</div>  

        
<div class="dropdown">
  <button class="dropbtn">Features</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Bussiness</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

<div class="dropdown odop">
  <button class="dropbtn">ODOP</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

<div className='new-gem'>
  <a href=''>
<NavLink to="/ragister"><img id="new" src='https://assets-bg.gem.gov.in/resources/images/new-on.png'/>New GeM</NavLink> 
</a>

</div>
<div>
<BsBell id='bell' />

</div>

</div>




{/* Mobile Menu Start */}


<div className='mobile-container'>
  <div className='first-mobile-container'>
    <div className='hamberger'>
      
     
        {
            <a href='#' onClick={()=>setMobileMenu(!Mobilemenu)}> 
             <RxHamburgerMenu id='berger' /> 
      </a> 
}
    </div>


    <div className='mobile-main-logo'>
   <NavLink to="/"> <img src='https://assets-bg.gem.gov.in/resources/images/gem-new-logo-v6.svg' alt='mobile-main-logo'/></NavLink>
  </div>

<div className='mobile-login-logo'>
 <NavLink to="/login"> <img src='https://assets-bg.gem.gov.in/resources/images/login-v4.svg' alt='mobile-login-logo' /></NavLink>
</div>
  
</div>


<div className='second-mobile-container'>
  
<div className='mobile-lang'>
<select name="lang" id="mobile-lang">
  <option className="value" value="ENglish">English</option>
  <option className="value" value="Hindi">हिंदी</option>
  <option className="value" value="Marathi">मराठी</option>
  <option className="value" value="Gujrati">ગુજરાતી</option>
</select>
</div>

</div>


<div className='third-mobile-container'>
<div class="container-search h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbarrr">
          <input class="search_inputt" type="text" name="" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value) }}/>
          <a href="#" class="search_iconn"><i class="fas fa-search"></i></a>
        </div>


      </div>
    </div>
</div>
  </div>


  {/* onClick Hamberger Mobile-menu start */}

 
  
 <div className={Mobilemenu ? " mob mobile-menu" :  "menu-links"}>
<div className='mobile-menu-main-icon mobile-item'>
  <NavLink to='/'><img src="https://assets-bg.gem.gov.in/resources/images/gem-new-logo-v2.svg"/></NavLink>
</div>

<hr></hr>
<div class="mobile-dropdownn mobile-item">
  <button class="mobile-dropbtnn"><GiHamburgerMenu  id='mobile-ham-logo'/>    Categories</button>
  <div class="mobile-dropdownn-content">
    <a href="#">Products<LiaAngleRightSolid  className='mobile-right-icon'/>    </a>

    <a href="#">Servises <LiaAngleRightSolid  className='mobile-right-icon'/>  </a>
    <a href="#">Browse All Brands <LiaAngleRightSolid />  </a>
    <a href="#">Browse  Categories <LiaAngleRightSolid /> </a>

  </div>
</div> 
<hr></hr>

<div className='mobile-need-help mobile-item'>
  <NavLink to="/help"><h4>Need Help ?</h4></NavLink>
</div>
<hr></hr>

<div className='mobile-raiseticket mobile-item'>
 <h4> Raise A Ticket</h4>
</div>
<hr></hr>

<div className='mobile-auction mobile-item'>
 <h4> Auction</h4>
</div>
<hr></hr>

<div className='mobile-new mobile-item'>
 <NavLink to="ragister"><h4>New on GeM</h4></NavLink>
</div>
<hr></hr>

<div className='mobile-login mobile-item'>
<NavLink to="/login"><h4>Login</h4></NavLink> 
</div>
<hr></hr>


<div className='mobile-odop mobile-item'>
<h4>ODOP</h4>
</div>

 </div>

   </>
  )
}

export default Navbar
