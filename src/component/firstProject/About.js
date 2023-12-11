import React from 'react'
import './About.css';
import img from '../../assets/1.testimonial-bg.jpg';
import office from '../../assets/company-age-bg.jpg';
import since from '../../assets/company-banner.png';

function About() {
    return (
        <>
            <div className='about-page' style={{ backgroundImage: `url(${img})` }}>
                <div className='about-content'>
                    <p>ALL YOU NEED TO KNOW</p>
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
            <div className='about-second'>
                <div className='about-paragraph'>
                    <div className='paragraph-1'>
                        <p className='about-para-first-1'>we are harmoni</p>
                        <h3 className='about-para-first-2'>
                            No. 1  Events<br />
                            Management
                        </h3>
                        <p className='about-para-first-3'>get started!</p>
                    </div>
                    <div className='paragraph-2'>
                        <p className='about-para-second-1'>our mission</p>
                        <p className='about-para-second-2'>Lorem ipsum dollor site amet the best consectuer<br />
                            adipiscing elits sed diam nonummy nibh<br />
                            euismod tincidunt ut laoreet dolore magna<br />
                            aliquam erat volutpat insignia the consectuer<br />
                            adipiscing elit.
                        </p>
                        <p className='about-para-second-3'>
                            Lorem ipsum dollor site amet the best<br />
                            consectuer adipiscing elits sed diam<br />
                            nonummy nibh euismod.
                        </p>

                    </div>
                    <div className='paragraph-3'>
                        <p className='about-para-third-1'>our vission</p>
                        <p className='about-para-third-2'>Lorem ipsum dollor site amet the best consectuer<br />
                            adipiscing elits sed diam nonummy nibh<br />
                            euismod tincidunt ut laoreet dolore magna<br />
                            aliquam erat volutpat insignia the consectuer<br />
                            adipiscing elit.
                        </p>
                        <p className='about-para-third-3'>
                            Lorem ipsum dollor site amet the best<br />
                            consectuer adipiscing elits sed diam<br />
                            nonummy nibh euismod.
                        </p>
                    </div>
                </div>
                <div className='about-2-part'>
                    <div className='about-image' style={{ background: `url(${office})` }}>
                        <img src={since} />


                    </div>
                    <div className='about-paragraph'>
                        Yet bed any for travelling assistance indulgence<br />
                        unpleasing. Not thoughts all exercise blessing.<br />
                        Indulgence way everything joy alteration boisterous<br />
                        the attachment. Party we years to oreder allow asked<br />
                        of.
                        Yet bed any for travelling assistance indulgence<br />
                        unpleasing. Not thoughts all exercise blessing.<br />
                        Indulgence way everything joy alteration boisterous<br />
                        the attachment. Party we years to oreder allow asked<br />
                        of.
                    </div>
                </div>
                <div className='about-four-div'>
                    <div className='about-four-div-1'>
                        <p className='about-four-div-1-1'>Study With us</p>
                        <p className='about-four-div-1-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                    <div className='about-four-div-2'>
                    <p className='about-four-div-2-1'>Study With us</p>
                        <p className='about-four-div-2-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                    <div className='about-four-div-3'>
                    <p className='about-four-div-3-1'>Study With us</p>
                        <p className='about-four-div-3-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                    <div className='about-four-div-4'>
                    <p className='about-four-div-4-1'>Study With us</p>
                        <p className='about-four-div-4-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                </div>
               
                <div className='about-four-div-part2'>
                    <div className='about-four-div-part2-1'>
                        <p className='about-four-div-part2-1-1'>Study With us</p>
                        <p className='about-four-div-part2-1-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                    <div className='about-four-div-part2-2'>
                    <p className='about-four-div-part2-2-1'>Study With us</p>
                        <p className='about-four-div-part2-2-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                    <div className='about-four-div-part2-3'>
                    <p className='about-four-div-part2-3-1'>Study With us</p>
                        <p className='about-four-div-part2-3-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                    <div className='about-four-div-part2-4'>
                    <p className='about-four-div-part2-4-1'>Study With us</p>
                        <p className='about-four-div-part2-4-2'>Visit Our World class Facility for<br />
                            bSouth African Scientist and<br />
                            Spectrum</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
