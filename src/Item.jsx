import React from 'react'

const Item = (props) => {
    console.log(props);
  return (
    <div className='container-fluid'>
        <div className='row'>
            
                    <div className='card'>
                        <div className='card-header'>
                           <img className='img-fluid' style={{height:'250px'}}>{props.img}</img>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-start'>{props.name}</h5>
                            <h3 className='text-start'>{props.price}</h3>
                        </div>
                    </div>
                </div>
            </div>
        
  )
}

export default Item
