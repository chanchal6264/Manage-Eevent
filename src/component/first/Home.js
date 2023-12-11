import React from 'react'
import './HomePage.css';
function Home() {
  return (
    <>
      <div className='content'>
        <h1>Music for everyone.</h1>
        <p>Millions of songs. No credit card needed.</p>
        <button className='btn'>GET SPOTIFY FREE</button>
      </div>
    </>
  )
}
export default Home


/*import React from 'react'
import Home from './component/first/Home';
import About from './component/first/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
return (
<>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      </Routes>
  </BrowserRouter>
  <About/>
</>
)
}
export default App*/