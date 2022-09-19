import React from 'react'

const Card = ({imge,titleText,paraText}) => {
  return (
   
      <div className='col'>
            <img src={imge}/>
            <h4>{titleText}</h4>
            <p>{paraText}</p>
      </div>
  
  )
}

export default Card
