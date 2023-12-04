import React, { useEffect, useRef} from "react";
import { QRCode } from "react-qrcode-logo";
import html2canvas from "html2canvas";
import { useSelector } from 'react-redux';

export default function Qr() {
  const qrRef = useRef(null);
  const input = useSelector((state) => state.linkValue.name)
  const qrColor = useSelector((state) => state.frcolor.name?.hex || "#000000")
  const bgColor = useSelector((state) => state.Bgcolor.name?.hex || "#000000")
  const logo = useSelector((state) => state.UploadLogo.uploadedPictures)

  const downloadName = input + ".png" ;

  useEffect(()=>{
    console.log(qrColor)
    console.log(logo)
})

  const downloadQR = () => {
    if (qrRef.current) {
      html2canvas(qrRef.current).then((canvas) => {
        const qrImage = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const link = document.createElement("a");
        link.download = downloadName;
        link.href = qrImage;
        link.click();
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div ref={qrRef} className="w-auto self-center">
        <span></span>
      <QRCode
        value={input}
        fgColor={qrColor}
        bgColor={bgColor}
        quietZone={10}
        size={200}
        logoImage={logo.length > 0 ? URL.createObjectURL(logo[0]) : null}
        logoWidth="100"
        logoOpacity="0.5"
        qrStyle="dots"
      />
      </div>
      <button
        onClick={downloadQR}
        className="w-48 px-4 py-2 self-center bg-yellow-600 hover:bg-yellow-500 cursor-pointer rounded-xl font-mono hover:text-white mt-6"
      >
        Download
      </button>
    </div>
  );
}
