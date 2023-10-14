import React from 'react'
import { QRCode } from 'react-qrcode-logo';

export default function Hero() {
  return (
    <>
    <div className='bg-gradient-to-r from-green-300 via-blue-400 to-purple-600 h-screen w-full'>
    <QRCode value="https://youtu.be/dQw4w9WgXcQ?si=aDCRi0NIUfiTJydW" bgColor='yellow' quietZone={10} fgColor="green" logoImage={"/Groot.jpg"} logoWidth="40" logoOpacity="9" qrStyle="square" />
    </div>
    </>
  )
}
