import React from 'react'
import './nav.css';
import img from '../../assets/1.site-logo.png';
import img1 from '../../assets/iamge.jpg';
import img2 from '../../assets/1.down-arrow.png';
import { useNavigate } from 'react-router-dom';


function Navbal() {
  
  const navigate = useNavigate();

  const login = ()=>{
    navigate('/signin')
  }

  return (
    <>
      <div className='navbal'>
        <div className='logo'>
          <img src={img} />

        </div>
        <div className='header'>
          <ul>
            <li><a href='/'>HOME</a></li>
            <li><a href='/about'>ABOUT</a></li>
            <li><a href='/map'>EVENTS</a></li>
            <li><a href='/gallery'>GALLERY</a></li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className='signin'>
          <button onClick={login} style={{ backgroundImage: `url(${img1})` }}>SingIn <img src={img2} /></button>

        </div>
      </div>

    </>
  )
}

export default Navbal
