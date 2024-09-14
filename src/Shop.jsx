import React from 'react'

const Shop = () => {
  return (
    <>
    <div className='container-fluid mt-5'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='text-start'>Latest Articles </h1>
            <div className='row'>
                <div className='col-md-12 d-flex p-5 flex-column flex-md-row m '>
                    <div className='col-md-3 mx-5  my-2'>
                        <div className='card '>
                            <div className='card-body'>
                                <img src='images/ar-1.png' className='img-fluid'/>
                                <h4 className=''>Air Jordan x Travis Scott Event</h4>
                                <h6 className='underline-dark'>Read more <i class="bi bi-arrow-right"></i></h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mx-5 my-2'>
                        <div className='card '>
                            <div className='card-body'>
                                <img src='images/ar-1.png' className='img-fluid'/>
                                <h4 className=''>Air Jordan x Travis Scott Event</h4>
                                <h6>Read more <i class="bi bi-arrow-right"></i></h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mx-5 my-2'>
                        <div className='card '>
                            <div className='card-body'>
                                <img src='images/ar-1.png' className='img-fluid'/>
                                <h4 className=''>Air Jordan x Travis Scott Event</h4>
                                <h6>Read more <i class="bi bi-arrow-right"></i></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop
