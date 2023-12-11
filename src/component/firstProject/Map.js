import React from 'react'
import './Map.css';
import img from '../../assets/special-offer-bg.png'


function Map() {
    return (
        <>
          <p className='heading'>Spark Location</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6315506953756!2d72.50929727505265!3d23.037296815779055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0xe077cfffcd90ee87!2sTop%20App%20%26%20Web%20Development%20company%20in%20ahmedabad.%20Summer%20internship%20in%20Php%2CFlutter%2CPython%2CAngularJS%2CReact%20JS%2CNode%20JS%20%2C%20UI%2FUx!5e0!3m2!1sen!2sin!4v1692264608377!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <h2>hello</h2>
            <div className='map-pera' style={{ background: `url(${img})` }}>
                <p className='map-pera-1'>30% off In June~July For Birhthday Events</p>
                <button>MAKE AN EVENT NOW</button>
            </div>

        </>
    )
}

export default Map
