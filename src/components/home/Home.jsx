import { Carousel } from 'react-bootstrap';  
import { useState } from 'react';  
import './Home.css'
import Cards from '../cards/Cards';
import Services from '../services/Services';
import Feedback from '../feedback/Feedback';
import Initiatives from '../initiatives/Initiatives';
import Footer from '../footer/Footer';
function Home() {  
  const [index, setIndex] = useState(0);  
  const handleSelect = (selectedIndex, e) => {  
    setIndex(selectedIndex);  
  };  
  return (  
    <>  
      <div className='p-0 slider'>  
        <Carousel activeIndex={index} onSelect={handleSelect} >  
          <Carousel.Item>  
            <img style={{ maxHeight: "100vh" }}  
              className="d-block w-100"  
              src="https://assets-bg.gem.gov.in/resources/upload/shared_doc/electioncommission_webbanner_1705406117.jpg?version=20230831211743"  
              alt="First slide"  
            />  
            
              
              
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src="https://assets-bg.gem.gov.in/resources/upload/shared_doc/web-banner_edit_1707653246.jpg?version=20230831211743"  
              alt="Second slide"  
            />  
  
              
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src="https://assets-bg.gem.gov.in/resources/upload/shared_doc/vsv-web_1689354843.png?version=20230831211743" 
              alt="Third slide"  
            />  
  
           
          </Carousel.Item>  

          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src="https://assets-bg.gem.gov.in/resources/upload/shared_doc/seller-easy-access-banner_1679379938.jpg?version=20230831211743" 
              alt="fourth slide"  
            />  
  
           
          </Carousel.Item>  

          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src="https://assets-bg.gem.gov.in/resources/upload/shared_doc/odop_blue-min_1664774870.jpg?version=20230831211743" 
              alt="fifth slide"  
            />  
  
           
          </Carousel.Item>  
        </Carousel>


        

      </div>  
      <div className="vol">
          <img   src='https://assets-bg.gem.gov.in/resources/images/vocal.png'/>
          <div className='col'><h2 className='pt-3'>GeM Outlet Store</h2></div>
          
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <img src='https://assets-bg.gem.gov.in/resources/images/startup-runway-icon-min.png'/>
              </div>

              <div className='col'>
                <img src='https://assets-bg.gem.gov.in/resources/images/saras-icon-min.png'/>
              </div>

              <div className='col'>
                <img src='https://assets-bg.gem.gov.in/resources/images/khadi-icon-min.png'/>
              </div>

              <div className='col'>
                <img src='https://assets-bg.gem.gov.in/resources/upload/shared_doc/millets-lan1_1678775654.jpg'/>
              </div>

              <div className='col'>
                <img src='https://assets-bg.gem.gov.in/resources/images/india-handloom-icon-min.png'/>
              </div>

              <div className='col'>
                <img src='https://assets-bg.gem.gov.in/resources/images/india-handicraft-icon-min.png'/>
              </div>
            </div>

          </div>
        </div>
 <Cards /> 
 <Services />
<Feedback />
<Initiatives />
    </> 
      );  
}  

export default Home