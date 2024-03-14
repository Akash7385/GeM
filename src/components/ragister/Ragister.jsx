import React from 'react'
import './Ragister.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from '../footer/Footer';
  

const Ragister = () => {

    const submit = ()=>{
        toast.success("Rragistration Successfull")
    }
  return (
   <>
<div class="container main d-flex justify-content-center my-5">
	<div class="row my-2 mx-2 main">
		<div class="col-md-6 d-flex justify-content-center">
			<form class="formone">
			<h6 class="header">Lets do it faster!</h6>
			<div class="row ro">
				<div class="form-group col-md-6 xyz">
					<button type="button" class="btn btn-primary fb"><i class="fa fa-facebook"></i> Facebook</button>
				    
				</div>
			</div>
			<div class="row rt">
				<div class="form-group col-md-6 xyz">
					<button type="button" class="btn btn-primary gplus"><i class="fa fa-google"></i> Google</button>
				    
				</div>

			</div>
			
			</form>
		</div>
		<div class="col-md-6">
			<h2 class="title pt-5 pb-3">Welcome To The GeM</h2>
			<form class="formtwo">
					<small class="identity text-muted">Enter Full Name</small>
			<div class="row rone">						
				<div class="form-group col-md-6 fone py-3">
					<input type="name" class="form-control" placeholder=""/>
					<img src="https://img.icons8.com/material-two-tone/24/000000/person-male.png"/>
				</div>
				<div class="form-group col-md-6 ftwo py-3">
					<input type="text" class="form-control ml-3 box2" placeholder=""/>
					<img src="https://img.icons8.com/material-two-tone/24/000000/person-male.png"/>
				</div>
			</div>
			
			<small class="emailinfo text-muted">Enter Your Email</small>
			<div class="row rtwo">				
				<div class="form-group col-md-12 fthree">
					<input type="email" class="form-control"/>
					<img src="https://img.icons8.com/windows/32/000000/email-sign.png"/>
				</div>
			</div>
			<small class="password text-muted">Let's Secure your account</small>
			<div class="row rthree">				
				<div class="form-group col-md-12 ffour">
					<input type="password" class="form-control secure" placeholder=""/>
					<img src="https://img.icons8.com/material-outlined/24/000000/lock.png"/>
					<i class="image2"><img src="https://img.icons8.com/ios-glyphs/64/000000/invisible.png"/></i>
				</div>
			</div>
			<div class="row rfour">
				<div class="form-group col-md-12">
					<button type="submit" class="btn btn-primary mt-3 ca" onClick={submit}><span>CREATE ACCOUNT</span></button>
                    <ToastContainer/>
				</div>
				<p class="note text-muted">By submitting the form, you agree with Viama'<a href="#" class="text-muted"><strong>T&C and Privacy policy.</strong></a></p>
			</div>

			</form>
		</div>
			
	</div>
</div>
<Footer />
   </>
  )
}

export default Ragister
