import React from 'react'

import {Swiper,SwiperSlide} from 'swiper/react'
import { valueData } from './valueData'
import 'swiper/css'
import IMG1 from './about-1.jpg'
import IMG2 from './about-2.jpg'
import IMG3 from './about-3.jpg'
import IMG4 from './9.jpg'
import Team from '../Team/Team'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section>
       <div className='container'>
              <div className='text-center'>
              <h4 className='pink'>WHO WE ARE</h4>
              <h3 className='title'>A Team of Highly Skilled and <br></br> Dedicated Professionals</h3>
              <p>We’re the people of diverse expertises to make your web experience even better. <br></br>
                  We started off our journey with the belief of diversity and inclusion to make your <br></br>
                  business grow faster.</p>
                  </div>
            
            <div className='imageFeature'>
              <div className='grid'>
                <div className='column'>
                  <img src={IMG1} alt="fist "/>
                </div>
                <div className='column'>
                  <img src={IMG2} alt="fist "/>
                </div>
                <div className='column'>
                  <img src={IMG3} alt="fist "/>
                  <img src={IMG4} alt="fist "/>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h3 className='title pink'>Explore Our Journey <br></br> Over the Time</h3>
            </div>

            <div className=''>
              <Swiper
              loop={true}
              navigation={true}
              spaceBetween={30}
              slidesPerView={2}
              grabCursor={true}
              slidesOffsetAfter={true}
              className='slider'
              >
                <SwiperSlide className='s'>
                  <h3 className='title'>2017</h3>
                  <p>We started off our first serious project with the Directorist. This is one of the
                  fast-growing WordPress directory plugins you can have. We put lots of effort over the years
                  and we're constantly working on it to make it the best user-friendly directory plugin ever
                  in WordPress.</p>
                </SwiperSlide>
                <SwiperSlide className='s'>
                  <h3 className='title'>2018</h3>
                  <p>We started off our first serious project with the Directorist. This is one of the
                  fast-growing WordPress directory plugins you can have. We put lots of effort over the years
                  and we're constantly working on it to make it the best user-friendly directory plugin ever
                  in WordPress.</p>
                </SwiperSlide>
                <SwiperSlide className='s'>
                  <h3 className='title'>2019</h3>
                  <p>We started off our first serious project with the Directorist. This is one of the
                  fast-growing WordPress directory plugins you can have. We put lots of effort over the years
                  and we're constantly working on it to make it the best user-friendly directory plugin ever
                  in WordPress.</p>
                </SwiperSlide>
                <SwiperSlide className='s'>
                  <h3 className='title'>2020</h3>
                  <p>We started off our first serious project with the Directorist. This is one of the
                  fast-growing WordPress directory plugins you can have. We put lots of effort over the years
                  and we're constantly working on it to make it the best user-friendly directory plugin ever
                  in WordPress.</p>
                </SwiperSlide>
              </Swiper>
            </div>













            <div className='text-center bg-gray'>
              <h3 className='title '>Values at SovWare</h3>
              <p>Having clear values as a company helps us ensure that we all are on the same page & driving
                    <br></br>  towards the same direction.</p>
           
           
           <div className='grid'>
           {valueData.map((value)=>{
              const {id,title,para} = value;
              return (
                <article  key={id}>
                  <h4>{title}</h4>
                  <p>{para}</p>
                </article>
              )
            })}
           </div>
           </div>

           <div style={{padding:'4rem 0'}}>
              <Team />
           </div>

           <div className='text-center'>
              <h3 className='title'>Let's Make the World Easier <br></br>  Together Through Technology</h3>
              <Link to='/career' className='btn'>Join Our Growing Team</Link>
            </div>
       </div>
    </section>
  )
}

export default About
