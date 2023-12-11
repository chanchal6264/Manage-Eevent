import React from 'react'
import './Home.css'

function Footer() {
    return (
        <>
            <div className='main-footer'>
                <h1>Do you want to step in to the<br />
                    future of Your Upcoming Event<br /></h1>
                <button>Request Early Access</button>
                <div className='footer'>
                    <div className='sub-footer'>
                        <div className='logo'>

                            <p>Crechterwoord k12 182 DK Alknjkcb<br />
                                All Rights Reserved</p>
                        </div>
                        <div className='link'>
                            <p>Links</p>
                            <ul>
                                <li><a href='#'>Overons</a></li>
                                <li><a href='#'>Social Media</a></li>
                                <li><a href='#'>Counters</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                        <div className='cmpny'>
                            <p>Company</p>
                            <ul>
                                <li><a href='#'>Terms & Conditions</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-down'>
                        <p>Get in touch</p>
                        <p>Crechterwoord K12 182 DK Alknjkcb<br />
                            085-132567<br />
                            info@payme.net</p>
                    </div>
                </div>
                <p className='footer-last-para'>@2021 GPT-3 All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
