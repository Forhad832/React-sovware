import React from 'react'

const Card = ({img,titleText,paraText}) => {
  return (
   
      <div className='col'>
            <img src={img}/>
            <h4>{titleText}</h4>
            <p>{paraText}</p>
      </div>
  
  )
}

export default Card
