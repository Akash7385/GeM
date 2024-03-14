import React from 'react'
import './Login.css'
import { IoLogoFacebook } from "react-icons/io";
import Footer from '../footer/Footer';
import Cards from '../cards/Cards';


const Login = () => {
  return (
   <>
   

   <div id="container">
        <div id="formcontainer">
            <img id="img1" src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?cs=srgb&dl=background-beverage-brown-414645.jpg&fm=jpg"/>
            <a href="#"><img id="cross" src="https://image.flaticon.com/icons/svg/148/148766.svg"/></a>
            <p id="text">Login to GeM</p>
            <input id="email" type="email"  placeholder="Email / Phone"/>
            <input id="password" type="password" placeholder="Password"/>
            <input id="check" type="checkbox"/>
            <p id="text1">Remember Me</p>
            <a id="forget" href="#">Forget Password ?</a>
            <button id="login" type="submit">Log In</button>
            <hr id="hrline1"/>
            <p id="text2">or login with</p>
            <hr id="hrline2"/>
            <button id="facebook"><img id="facebook1" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"/>Facebook</button>
            <button id="google"><img id="google1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"/>Google</button>
            <p id="text3">Not a Member?</p>
            <a id="signup" href="/ragister">Signup Now</a>
        </div>
    </div>

<Footer />

   </>
  )
}

export default Login
