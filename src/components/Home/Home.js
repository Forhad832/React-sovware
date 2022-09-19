import React from 'react'
import HomeAbout from '../About/HomeAbout'
import Dashboard from '../Dashboard/Dashboard'
import DashboardTwo from '../Dashboard/DashboardTwo'
import IMG1 from './dashboard-market.svg'
import IMG2 from './img2.png'
import IMG3 from './img3.png'
import IMG4 from './img4.svg'
import TitleImg from './wlogo.png'
import TitleImg2 from './jslogo.png'
import TitleImg3 from './d-logo.svg'

import Hero from './h-image.svg'
import Card from '../Card/Card'
import CardImg1 from './1.svg'
const Home = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <div className='h-content'>
                    <h2>We Make Life Easier Through Technology</h2>
                    <p>We aim to make technology way better and empower your
                    business by providing top notch products and services.</p>
                </div>
                <div className='blur'></div>
            </div>

            <div className='col-6'>
                 <div className='h-content'>
                    <img src={Hero} />
                 </div>
                </div>
        </div>
        <HomeAbout />
        <div className='section bg-1'>
        <Dashboard image={IMG1}
        titleText='DashboardMarket' paraText='DashboardMarket is the dedicated template marketplace for admin dashboard templates. With a wide selection of templates built with the latest technologies like  you will be able to find your desired templates from DashboardMarket. Plus, our team of experts will work with you to provide both the frontend and backend service that meets your specific needs.' 

        btnText={`www.dashboardmarket.com`}
      />
        </div>
        <div className='section bg-2'>
        <DashboardTwo img={TitleImg} image={IMG2}
        titleText='DashboardMarket' paraText='DashboardMarket is the dedicated template marketplace for admin dashboard templates. With a wide selection of templates built with the latest technologies like  you will be able to find your desired templates from DashboardMarket. Plus, our team of experts will work with you to provide both the frontend and backend service that meets your specific needs.' 

        btnText={`www.wpwax.com`}
      />
        </div>

        <div className='section bg-3'>
        <Dashboard image={IMG3} img={TitleImg2}
        titleText='jsNorm' paraText='jsNorm is a resource hub for JavaScript based products. You can get various JavaScript related products including VueJS, React, Laravel, Angular  Bootstrap based products. Moreover, jsNorm comprises different guides, tips, and tricks on JavaScript and its frameworks.' 

        btnText={`www.jsnorm.com`}
      />
        </div>

        <div className='section bg-4'>
        <DashboardTwo image={IMG4}  img={TitleImg3}
        titleText='Directorist' paraText={`Directoirst is the fast-growing WordPress directory plugin.
        This is a full fledged directory listing solution based on the
        most popular CMS, WordPress. Using this product, you'll
        get everything you need to make your
        directory business successful.`}

        btnText={`www.directorist.com`}
      />
        </div>

    <div>
    <div style={{margin:'4rem 0',}} className='text-center'>
    
      <h3 className='title'>What’s Coming Next!</h3>
      <p>We are constantly working on discovering new technologies to make human life better <br></br>
     and smoother. Let’s see what we’re packing for the future!</p>
    </div>
    <div  className='grid'>
            
            <Card  img={CardImg1} titleText={`JAVASCRIPT`} paraText={`We're developing a dedicated JavaScript-based marketplace which has never been done before. You'll find several JavaScript-based exclusive solutions in the coming days.`}/>
         
    
         <Card  img={CardImg1} titleText={`Artificial Intelligence`} paraText={`Working with AI is one of our dreams. In 2021, we have planned to integrate AI systems with some of our existing products and we're really excited to make it possible for our users.`}/>
    
         <Card  img={CardImg1} titleText={`Brand New WP Products`} paraText={`We're planning to release some exciting brand new generic & niche based WordPress based products (plugins and themes) in the next few years to make people’s life easier than ever.`}/>
            </div>
    </div>
      

















      </div>
    </section>
  )
}

export default Home
