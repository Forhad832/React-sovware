import React from 'react'

const DashboardTwo = ({img,image,titleText,paraText,btnText}) => {
 
    return (
     <div>
       <div className='row'>
      
        <div className='col-6'>
          <div className='d-content'>
            <div className='box'> <img src={img}/></div>
            <h3 className='green title'>{titleText}</h3>
            <p>{paraText}</p>
  
          </div>
        </div>
        <div className='col-6'>
          <div className='d-content'>
              <img src={image}/>
  
          </div>
        </div>
      </div>
       <div className='row'>
       <div className='col-6'><a className='green link' href='#'>{btnText}</a></div>
          <div className='col-6'></div>
          
       </div>
     </div>
    )
}

export default DashboardTwo
