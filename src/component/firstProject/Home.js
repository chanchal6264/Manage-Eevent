import React from 'react'
import './Home.css';
import img1 from '../../assets/people.png';
import img from '../../assets/abstract-1846226.jpg';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

function Home() {
    return (
        <>
            <div className='first-home' style={{ backgroundImage: `url(${img})` }}>

                <p className='f-home-heading'>One Stop Event<br />
                    Planner</p>
                <p className='f-home-first_pera'>
                    Yet bed any for travelling assistance indulgence<br />
                    unpleasing. Not thoughts all exercise blessing.<br />
                    Indulgence way everything joy alteration boisterous<br />
                    the attachment. Party we years to oreder allow asked<br />
                    of.
                </p>
                <p className='f-home-second_pera'>
                    Every event should be Perfect
                </p>
                <div className='f-input'>
                    <input type='text' placeholder='Your Email Address' />
                    <button>Get<br /> Started</button>
                </div>
                <div className='f-image'>
                    <img src={img1} />
                    <p>1,600 people requestedd access a visit in last 24hours</p>
                </div>
            </div>
            <div className='first-home-second-page'>

                <div className='first-img'>
                    <img src={google} />
                    <img src={slack} />
                    <img src={atlassian} />
                    <img src={dropbox} />
                    <img src={shopify} />

                </div>

                <div style={{ margin: '10%', marginBottom: '0%', backgroundColor: " rgb(14, 61, 103)", padding: '3%' }} className='first-home-second-main'>
                    

                    <div className='Home-sec'>
                        <div className='Home-sec-1'>
                            <p className='Home-sec-1-pera1'>What is Harmoni<br />
                                Event
                            </p>
                            <p className='Home-sec-1-pera2'>
                                We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor<br />
                                convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship<br />
                                an insisted so humanity he. Friendly bechelor entrance to on by.
                            </p>
                        </div>
                        <div className='Home-sec-2'>
                            <h1 className='Home-sec-2-pera1'>Your Event Will be beyond your<br />
                                imagination</h1>
                            <p className='Home-sec-2-pera2'>Explore the Library</p>
                        </div>
                        <div className='Home-sec-3'>
                            <div className='Home-sec-3-pera1'>
                                <p className='Home-sec-3-pera1-1'>Chatbots</p>
                                <p className='Home-sec-3-pera1-2'>We so opinion friends me message as delight.<br />
                                Whole front do of plate heard oh ought.</p>
                            </div>
                            <div className='Home-sec-3-pera2'>
                                <p className='Home-sec-3-pera2-1'>Knowledgebase</p>
                                <p className='Home-sec-3-pera2-2'>At jointure ladyship an insisted so humanity<br />
                            he. Friendly bechelor entrance to on by. As put<br />
                            impossible own apartments b</p>

                            </div>
                            <div className='Home-sec-3-pera3'>
                                <p className='Home-sec-3-pera3-1'>Education</p>
                                <p className='Home-sec-3-pera3-2'>At jointure ladyship an insisted so humanity<br />
                            he. Friendly bechelor entrance to on by. As put<br />
                            impossible own apartments b</p>
                            </div>
                        </div>

                    </div>

                   

                    
                    
                    
                

                </div>
            </div>

            <div className='first-home-third-page'>
                <div className='first-home-third-page-para1'>
                    <h2>Harmony Event<br />
                        Management Firm $<br />
                        Wedding Planners is a<br />
                        group of creative minds<br />
                        who would like to make<br />
                        weddings, birthdays $<br />
                        any kind of events<br />
                        courteous $ a better <br />
                        place for our clients to<br />
                        celebrate important<br />
                        moments of their<br />
                        lives...
                    </h2>
                    <p>Request Early Access to Get Started</p>
                </div>
                <div className='first-home-third-page-para2'>

                    <div className='first-home-third-page-para2-sub_para1'>
                        <p>Photography</p>
                    </div>
                    <div className='first-home-third-page-para2-sub_para2'>
                        <p>Cinematography or<br />
                            Videography Service</p>
                    </div>
                    <div className='first-home-third-page-para2-sub_para3'>
                        <p>Full Venue Decoration<br />
                            Service</p>
                    </div>
                    <div className='first-home-third-page-para2-sub_para4'>
                        <p>Home Decoration</p>
                    </div>



                </div>
                <div className='first-home-third-page'>
                    <div className='first-home-third-page-para3'>
                        <div className='first-home-third-page-para3-sub-para1'>
                            <p>A Team of 3 talented Photography are ready to snap the<br />
                                best monents of your ceremony</p>
                        </div>

                        <div className='first-home-third-page-para3-sub-para2'>
                            <p>Createive full HD 1080p Video, a different scape of your<br />
                                ceremony.</p>
                        </div>
                        <div className='first-home-third-page-para3-sub-para3'>
                            <p>A Blend of out-of-the-box ideas to decore your precious<br />
                                date</p>
                        </div>
                        <div className='first-home-third-page-para3-sub-para4'>
                            <p>Just call us and get total event solution one roof..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='first-home-last'>
                <div className='first-home-last_sub'>
                    <p>Request Early Access to Get Started</p>
                    <div className='first-home-third-page-last_sub'>
                        <p>Register Today & start exploring the endless possibilities.</p>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home
