import React from 'react'

import { teamData } from './teamData'
const Team = () => {
  return (
   <div>
    <div className='text-center'>
        <h2 className='title'>Meet Our Leadership</h2>
    </div>
     <div className='grid-2'>
      {teamData.map((team)=>{
        const {id,img,name,position} = team;

        return (
            <article key={id}>
                <img className='rounded' src={img} />
                <h4>{name}</h4>
                <p>{position}</p>
            </article>
        )
      })}
    </div>
   </div>
  )
}

export default Team
