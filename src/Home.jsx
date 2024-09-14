import React from 'react'
import Shop from './Shop'

const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
            <div className=' col-12 position-absolute top-50  '>
            <p className='display-3 fw-bold text-white ms-5'>More than <br/>just a game.<br/>It's a lifestyle.</p>
            <p className='text-white ms-5'>Whether you are just strting out,have played <br/>your whole life or you're a Tour pro ,your<br/> swing is like a fingerprint</p>
            </div>
            <img src='images/hero.png' className='img-fluid' style={{width:'100vw',height:'100vh'}}/>
                
        </div>
        <div className='row mt-5'>
            <h1 className='text-dark text-center'>Featured</h1>
            <div className='row'>
                <div className='col-md-12 d-flex flex-column flex-md-row'>  
                
                    <div className='col-md-3 mx-1'>
                    <div className='card'>
                        <div className='card-header'>
                           <img src='images/Card.png' className='img-fluid' style={{height:'250px'}}/>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-start'>'Shark - Mens cabretta white golf golve</h5>
                            <h3 className='text-start'>$19</h3>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-3 mx-1'>
                    <div className='card'>
                        <div className='card-header'>
                           <img src='images/Card-1.png' className='img-fluid' style={{height:'250px'}}/>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-start'>'Shark - Mens cabretta white golf golve</h5>
                            <h3 className='text-start'>$19</h3>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-3 mx-1'>
                    <div className='card'>
                        <div className='card-header'>
                           <img src='images/Card-2.png' className='img-fluid' style={{height:'250px'}}/>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-start'>'Shark - Mens cabretta white golf golve</h5>
                            <h3 className='text-start'>$19</h3>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-3 mx-1'>
                    <div className='card'>
                        <div className='card-header'>
                           <img src='images/Card-3.png' className='img-fluid' style={{height:'250px'}}/>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-start'>'Shark - Mens cabretta white golf golve</h5>
                            <h3 className='text-start'>$24.99</h3>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
            

            
            
         
        </div>
        </div>

        <Shop/>  
    </>
  )
}

export default Home
