import React from 'react'
import './Cards.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  



const Cards = () => {

    const notify = () => toast.success("Item Added", {
        position: 'top-center'
    });


    

   
  return (
   <>
   
 <div className="page">
<div className="row">
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
            <a href='#'> <img className="card-img-top"  src="https://i.imgur.com/9VZGPJF.jpg"
  alt="" /></a>
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>


            
            <div className="card-body card-body-cascade text-center">

            
                <h4 className="card-title"><strong><a href="">Mobile</a></strong></h4>

                
                <p className="card-text">This is a Mobile phone with all the advance features and at best price.
                </p>


                <p className="price">₹2000</p>

                
                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>


                
                <div className="card-footer">
                   <p className='cart-botton' onClick={notify}>ADD TO CART</p>
                   <ToastContainer />

                </div>


            </div>
        </div>
    </div>




    
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

        
            <div className="view view-cascade overlay text-center">
                <a href='#'><img className="card-img-top" src="https://i.imgur.com/Fc9aj6m.jpg"
  alt=""/></a>
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div className="card-body card-body-cascade text-center">

                
                <h4 className="card-title"><strong><a href="">Camera</a></strong></h4>

                
                <p className="card-text">Comes with  advance sensors, this is a perfect match for photographers.
                </p>

                <p className="price">₹6000</p>

                
                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>

                
                <div className="card-footer">
                    <p className='cart-botton'onClick={notify}>ADD TO CART</p>
                </div>

            </div>
        </div>
    </div>



    
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

            
            <div className="view view-cascade overlay text-center">
               <a href='#'><img className="card-img-top" src="https://i.imgur.com/FDdJ4Xm.jpg"
  alt=""/></a> 
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div className="card-body card-body-cascade text-center">

                <h4 className="card-title"><strong><a href="">Watch</a></strong></h4>

                <p className="card-text">Smart watch with Easy-to-go connect option and fitness tracking functions.
                </p>

                <p className="price">₹7000</p>

                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>


                <div className="card-footer">
                    <p className='cart-botton' onClick={notify}>ADD TO CART</p>
                </div>


            </div>
        </div>
    </div>


    
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

            
            <div className="view view-cascade overlay text-center">
                <a href='#'><img className="card-img-top" src="https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM="
  alt=""/></a>
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div className="card-body card-body-cascade text-center">

                <h4 className="card-title"><strong><a href="">Laptops</a></strong></h4>

                <p className="card-text">Smart watch with Easy-to-go connect option and fitness tracking functions.
                </p>

                <p className="price">₹70</p>

                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>


                <div className="card-footer">
                    <p className='cart-botton' onClick={notify}>ADD TO CART</p>
                </div>


            </div>
        </div>
    </div>



</div>

{/* new card line starts */}

<div className="row">
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
                <a href='#'><img className="card-img-top" src="https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=ExhLI0wl0S3Zak66uSK8oubQLnC9kC0wlcgTr9ePIXc="
  alt="" /></a>
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>


            
            <div className="card-body card-body-cascade text-center">

            
                <h4 className="card-title"><strong><a href="">Laptop</a></strong></h4>

                
                <p className="card-text">This is a Mobile phone with all the advance features and at best price.
                </p>


                <p className="price">₹50</p>

                
                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>


                
                <div className="card-footer">
                    <p className='cart-botton' onClick={notify}>ADD TO CART</p>
                </div>


            </div>
        </div>
    </div>




    
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

        
            <div className="view view-cascade overlay text-center">
                <a href='#'><img className="card-img-top" src="https://www.shutterstock.com/image-photo/equipment-medical-devices-modern-operating-260nw-1011970336.jpg"
  alt=""/></a>
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div className="card-body card-body-cascade text-center">

                
                <h4 className="card-title"><strong><a href="">Medical</a></strong></h4>

                
                <p className="card-text">Comes with  advance sensors, this is a perfect match for photographers.
                </p>

                <p className="price">₹60</p>

                
                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>

                
                <div className="card-footer">
                    <p className='cart-botton' onClick={notify}>ADD TO CART</p>
                </div>

            </div>
        </div>
    </div>



    
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

            
            <div className="view view-cascade overlay text-center">
                <a href='#'><img className="card-img-top" src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc="
  alt=""/></a>
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div className="card-body card-body-cascade text-center">

                <h4 className="card-title"><strong><a href="">Home Decor</a></strong></h4>

                <p className="card-text">Smart watch with Easy-to-go connect option and fitness tracking functions.
                </p>

                <p className="price">₹70</p>

                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>


                <div className="card-footer">
                    <p className='cart-botton' onClick={notify}>ADD TO CART</p>
                </div>


            </div>
        </div>
    </div>


    
    <div className="col-sm up">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

            
            <div className="view view-cascade overlay text-center">
                <a href='#'><img className="card-img-top" src="https://thumbs.dreamstime.com/b/desktop-computer-2240018.jpg"
  alt=""/></a>
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div className="card-body card-body-cascade text-center">

                <h4 className="card-title"><strong><a href="">Computers</a></strong></h4>

                <p className="card-text">Smart watch with Easy-to-go connect option and fitness tracking functions.
                </p>

                <p className="price"> ₹70</p>

                <ul className="row rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>


                <div className="card-footer">
                    <p className='cart-botton' onClick={notify}>ADD TO CART</p>
                </div>


            </div>
        </div>
    </div>


    
</div>



<a href="https://mkp.gem.gov.in/browse_nodes/browse_list#!/categories" target='_blank' className="btn-theme icon-left" data-abc="true"><i className="fa fa-twitter"></i> EXPLORE THE MARKET</a>

</div> 



   </>
  )
}

export default Cards
