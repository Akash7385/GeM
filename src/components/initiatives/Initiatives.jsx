import React from 'react'
import './Initiatives.css'
import Footer from '../footer/Footer'

const Initiatives = () => {
  return (
    <>
    <div className='container-fluid initiatives-container'>
        <div className='row'>
            <div className='col'>
                <h4 id='ini'>Initiaves</h4>

<div className='ini-box'>
<div className=' ini-img'>
    <img src='https://assets-bg.gem.gov.in/resources/images/word-en.png?version=20230831211743'/>
</div>
<div className= " row poshan">
    <img src='https://assets-bg.gem.gov.in/resources/images/poshan-landing.png?version=20230831211743'/>
    <img src="https://assets-bg.gem.gov.in/resources/images/sw-icon.png?version=20230831211743" id='swacch'/>

</div>
<div>
</div>
</div>

            </div>

            <div className='col social-container'>
                <h4 className='gem-connect'>GeM Connect</h4>

                <div className='ini-box2'>
                    <div>
                        <h4 className='ini-connect'>Twitter | Facebook</h4>
                        <hr></hr>
                    </div>
                </div>
            </div>

        </div>
        <Footer />

    </div>
    </>
  )
}

export default Initiatives
