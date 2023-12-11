import React from 'react'
import img from '../../assets/1.testimonial-bg.jpg';


function Contact() {


  return (
    <div className='homepage' style={{ backgroundImage: `url(${img})` }}>
      <div className='content'>
        <p>CONTACT US NOW</p>
        <div className='writen'>
          <div className='para1'>KEEP</div>
          <div className='para2'>IN TOUCH</div>
        </div>
       {/*<img src={img} />*/}
      </div>
    </div>
  )
}

export default Contact
