import React from 'react'
import { QRCode } from 'react-qrcode-logo';

export default function Hero() {
  return (
    <>
    <div>Hero</div>
    <QRCode value="https://github.com/gcoro/react-qrcode-logo" bgColor='yellow' quietZone={10} fgColor="green" logoImage={"/Groot.jpg"} logoWidth="40" logoOpacity="9" qrStyle="square" />

    </>
  )
}
