import React from 'react'
import ServicesSection from '../Services/ServicesSection'

const Background_img = () => {
  return (
   <>
   <section className='bg'>
    <div className='service-bg'>
    <h1 className='font-bold  text-center py-32  h1-service' >Services</h1>
    </div>
   </section>
   <ServicesSection/>
   </>
  )
}

export default Background_img