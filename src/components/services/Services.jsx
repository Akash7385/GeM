import React from 'react'
import './Services.css'

const Services = () => {
  return (
   <>
   <div className='container-fluid service'>
    <div className='row'>
        <div className='col '>
            <h3 className='popular'>Popular Service Categories</h3>
        </div>
    </div>

    <div className='row ser-img'>
        <div className='col-2'>
            <img src='https://assets-bg.gem.gov.in/resources/images/manpower.svg?version=20230831211743'/>
            <p className='ser-logos'>Security</p>
        </div>

        <div className='col-2'>
            <img src='https://assets-bg.gem.gov.in/resources/images/catering.svg?version=20230831211743'/>
            <p className='ser-logos'>Catering</p>
        </div>

        <div className='col-2'>
            <img src='https://assets-bg.gem.gov.in/resources/images/hr.svg?version=20230831211743'/>
            <p className='ser-logos'>Resources</p>
        </div>

        
        <div className='col-2'>
            <img src='https://assets-bg.gem.gov.in/resources/images/cloud.png?version=20230831211743'/>
            <p className='ser-logos'>Cloud</p>

        </div>

        <div className='col-2'>
            <img src='https://assets-bg.gem.gov.in/resources/images/vehicle-hiring.svg?version=20230831211743'/>
            <p className='ser-logos'>Vehicle</p>
        </div>
        <a href="#" class="btn-themes" data-abc="true"><i class="fa fa-twitter"></i> View All Services</a>

    </div>
    </div>



<div className='container-fluid choose'>
<div className='row'>
    <div className='col'>
        <h1 className='choose-heading'>Why Should Choose GeM</h1>
    </div>
</div>
<br></br>
<div className='row numbers'>
<div className='col-4'>
    <ul>
        <li>
            <h1 className='num'>11,980  |</h1> 
            <h3> Categories</h3>
        </li>
    </ul>
</div>

<div className='col-4'>
    <ul>
        <li>
            <h1 className='num'>7,3,800 |</h1> 
            <h3>Order Value </h3>
        </li>
    </ul>
</div>

<div className='col-4'>
    <ul>
        <li>
            <h1 className='num'>320 |</h1> 
            <h3>Services </h3>
        </li>
    </ul>
</div>
</div>
<hr></hr>

<div className='row choose-logos'>
    <div className='col-2'>
        <img src='https://assets-bg.gem.gov.in/resources/images/various-products-v4.svg?version=20230831211743'/> 
<p className='ser-logos names'> Listening</p>
    </div>

    <div className='col-2'>
        <img src='https://assets-bg.gem.gov.in/resources/images/integrated-payment-system-v4.svg?version=20230831211743'/>
        <p className='ser-logos names'>Payments</p>
    </div>

    <div className='col-2'>
        <img src='https://assets-bg.gem.gov.in/resources/images/direct-purchase-v4.svg?version=20230831211743'/>
        <p className='ser-logos names'>Bid RA</p>

    </div>

    <div className='col-2'>
        <img src='https://assets-bg.gem.gov.in/resources/images/buyer-supplier-v4.svg?version=20230831211743'/>
        <p className='ser-logos names'>Transperency</p>

    </div>

    
    <div className='col-2'>
        <img src='https://assets-bg.gem.gov.in/resources/images/buyer-supplier-v4.svg?version=20230831211743'/>
        <p className='ser-logos names'>Contract</p>

    </div>

</div>

</div>

   </>

  )
}

export default Services
