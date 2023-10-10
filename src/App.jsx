import { useState } from 'react'
import { QRCode } from 'react-qrcode-logo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
    <div className='flex flex-row'>
    <Sidebar/>
    <div>
    <Navbar/>
    <Hero/>
    <Footer/>
<QRCode value="https://github.com/gcoro/react-qrcode-logo" bgColor='yellow' quietZone={10} fgColor="green" logoImage={"/Groot.jpg"} logoWidth="40" logoOpacity="9" qrStyle="square" />,

    </div>
    </div>
    </>
  )
}

export default App
