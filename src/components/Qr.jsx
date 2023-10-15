import React, {useRef} from 'react'
import { QRCode } from "react-qrcode-logo";
import html2canvas from 'html2canvas';


export default function Qr() {

    const bgColorQr = "white"

  return (
    <div>
            <QRCode value="https://youtu.be/dQw4w9WgXcQ?si=aDCRi0NIUfiTJydW" bgColor={bgColorQr} quietZone={10} fgColor="green" logoImage={"/github.png"} logoWidth="90" logoOpacity="0.4" qrStyle="square"/>
    </div>
  )
}
