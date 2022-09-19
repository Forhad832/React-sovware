import React from 'react'
import { Link } from 'react-router-dom'

import Career1 from './career-man.svg'
import Career2 from './career-brif.svg'
import Card from '../Card/Card'

import IMG1 from './1.jpg'
import IMG2 from './2.jpg'
import IMG3 from './3.jpg'
import IMG4 from './4.jpg'
import IMG5 from './5.jpg'
import IMG6 from './6.jpg'
import IMG7 from './cta-1.svg'
import Dashboard from '../Dashboard/Dashboard'
const Career = () => {
  return (
    <section>
      <div className='container'>
      <div className='row'>
            <div className='col-6'>
                <div className='h-content'>
                    <h2>Join a Team That You <br></br> <span>Dream of!</span></h2>
                    <p>We are SovWarians — a team of passionate digital
                    technology experts who work constantly to make life easier.
                    We’re self driven by a singular purpose: to help businesses
                    succeed.</p>
                    <Link className='btn' to='/'>View all open positions</Link>
                </div>
               
            </div>

            <div className='col-6'>
                 <div className='h-content'>
                    <img src={Career1} />
                    <div className='blur'></div>
                 </div>
                </div>
        </div>

        <div style={{padding:'4rem 0'}} className='row'>
          
        <div className='col-6'>
                 <div className='h-content'>
                    <img src={Career2} />
                    
                 </div>
                </div>
            <div className='col-6'>
                <div className='h-content'>
                    <h2 style={{fontSize:'3rem'}}>Explore Your Best Professional  Self From Here</h2>
                    <p>We believe in giving back! Work environment matters a lot to flourish
                    your professionalism. SovWare provides such an environment that helps
                    to unleash your full potential and make the best use of your talent.</p>
                    <p>Culture is crucial and it's an important part of our company. We take
                pride in creating a work environment that is fun, challenges, rewards
                and motivating to everyone involved. We are connected by an integrated
                sense of purpose to create the best products that push the boundaries
                of web technology.</p>
                    <Link className='btn' to='/'>View all open positions</Link>
                </div>
               
            </div>

        </div>


        <div className='grid'>
          <div className='g-box box-1'>
                <Card titleText={`Friendly Environment`}  paraText={`We maintain an eco-friendly
                working environment that will help
                you to focus on your work and
                motivates you to produce good
                work.`} />
          </div>
          <div className='g-box box-2'>
                <Card titleText={`Competitive Salary`}  paraText={`At SovWare, you’ll enjoy a competitive salary with an extended scope of growth.`} />
          </div>
          <div className='g-box box-3'>
                <Card titleText={`Healthy Foods`}  paraText={`Most of our members are foodie
              and we're happy to provide healthy
              foods to them. Sometime, we like to
              arrange a sudden treat with
              delicious items in order to make
              them feel special.`} />
          </div>
          <div className='g-box box-4'>
                <Card titleText={`SovWare Annual Retreat`}  paraText={`Each year, we try to give two tours
                      at least to keep our stars refreshing
                      and energetic. One is in the middle
                      of the year and another one is in the
                      last part of the year.`} />
          </div>
          <div className='g-box box-5'>
                <Card titleText={`Special Allowance & Bonuses`}  paraText={`SovWare offers a special allowance
            for medical, honeymoon, care of
            newborn and his mother. It also
            provides competitive festival
            bonuses over the time.`} />
                      </div>
          <div className='g-box box-6'>
                <Card titleText={`Paid & Unpaid Time-off`}  paraText={`We enjoy providing 2 days off a
            week, competitive generic holidays
            on marriage, festivals, paid & sick
            leaves in a year.`} />
          </div>
        </div>

        <div style={{padding:'3rem 0'}} className='text-center'>
          <h2 className='title'>Inside <span className='pink'>SovWare</span></h2>
          <p>SovWare is not just about the work, it's real fun to be inside of <br></br>
          the company!</p>
        </div>


        <div className='grid img-grid'>
            <div>
              <img src={IMG1} alt='careeer tour'/>
            </div>
            <div>
              <img src={IMG2} alt='careeer tour'/>
            </div>
            <div>
              <img src={IMG3} alt='careeer tour'/>
            </div>
            <div>
              <img src={IMG4} alt='careeer tour'/>
            </div>
            <div>
              <img src={IMG5} alt='careeer tour'/>
            </div>
            <div>
              <img src={IMG6} alt='careeer tour'/>
            </div>

        </div>
        <div style={{padding:'3rem 0'}} className='text-center'>
          <h4 className='pink'>OPEN POSITIONS</h4>
          <h2 className='title'>Be a Part of Something Great</h2>
          <p>Take a look at our current opportunities. We would love to <br></br>
have you on board!</p>
        </div>


       <div className='bg-2'>
       <Dashboard image={IMG7} titleText={`Didn't Find the Perfect
        Role for You?`} paraText={`We may be able to find the role that matches your skill
        set perfectly. Tell us about you and we would love to get
        in touch with you shortly.`} />

       </div>
      </div>
    </section>
  )
}

export default Career
