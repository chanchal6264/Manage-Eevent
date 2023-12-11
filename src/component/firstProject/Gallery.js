import React from 'react'
import './Gallery.css';
import img from '../../assets/1.testimonial-bg.jpg';
import img1 from '../../assets/1.image.jpg'
import img2 from '../../assets/2.image.jpg'
import img3 from '../../assets/event-5.jpg'
import img4 from '../../assets/event-6.jpg'
import img5 from '../../assets/5.image.jpg'
import img6 from '../../assets/6.image.jpg'
import img7 from '../../assets/3.event-grid.jpg'
import img8 from '../../assets/8.image.jpg'


function Gallery() {
    return (
        <>
            <div className='about-page' style={{ backgroundImage: `url(${img})` }}>
                <div className='about-content'>
                    <p className='g-para'>ALL YOU NEED TO KNOW</p>
                    <div className='about-writen'>
                        <div className='about-para1'>ABOUT</div>
                        <div className='about-para2'>HARMONI</div>
                    </div>
                    <div className='about-2p'>
                        <p className='about-2p-pera'>Home</p>
                        <p className='about-2p-pera'>|</p>
                        <p className='about-2p-pera'>About Us</p>
                    </div>
                </div>
            </div>
            <p className='g-para'>--@@--- Our Gallery ---@@--</p>
            <div className='gallery'>
                <div className='gallery-1'>
                    <img src={img1} className='gallery-1-img1' />
                    <img src={img2} className='gallery-1-img2' />
                </div>
                <div className='gallery-2'>
                    <img src={img3} className='gallery-2-1-img3' />
                    <img src={img4} className='gallery-2-2-img4' />
                </div>
                <div className='gallery-3'>
                    <img src={img5} className='gallery-3-1-img5' />
                    <img src={img6} className='gallery-3-2-img6' />
                </div>
                <div className='gallery-4'>
                    <img src={img7} className='gallery-4-1-img7' />
                    <img src={img8} className='gallery-4-2-img8' />
                </div>
            </div>
        </>
    )
}

export default Gallery
