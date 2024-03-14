import React from 'react'
import { Carousel } from 'react-bootstrap';  
import { useState } from 'react';  
import './Feedback.css'
const Feedback = () => {
  const [index, setIndex] = useState(0);  
  const handleSelect = (selectedIndex, e) => {  
    setIndex(selectedIndex); 
  };


  return (
    <>
<div className='p-5 ratings'>  
        <Carousel activeIndex={index} onSelect={handleSelect} >  
          <Carousel.Item>  
            <img style={{ maxHeight: "100vh" }}  
              className="d-block w-100"  
              src="https://i0.wp.com/www.itcinfotech.com/wp-content/uploads/2022/11/sandeep-angra.jpg?fit=1282%2C800&ssl=1"  
              alt="First slide"  
            />  
            
              
              
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src="https://i0.wp.com/www.itcinfotech.com/wp-content/uploads/2022/11/mark-sims.jpg?fit=1282%2C800&ssl=1"  
              alt="Second slide"  
            />  
  
              
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src="https://i0.wp.com/www.itcinfotech.com/wp-content/uploads/2022/11/upreet-bhandari.jpg?fit=1282%2C800&ssl=1" 
              alt="Third slide"  
            />  
  
           
          </Carousel.Item>  

  
        </Carousel>

      </div> 

    </>
  )
}

export default Feedback
