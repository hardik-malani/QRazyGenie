import React, { useEffect, useRef} from "react";
import { QRCode } from "react-qrcode-logo";
import html2canvas from "html2canvas";
import { useDispatch,useSelector } from 'react-redux';

export default function Qr({link}) {
  const qrRef = useRef(null);
  const bgColorQr = "white";
  const Store = useSelector((state) => state.linkValue)

  useEffect(()=>{
    console.log(Store)
  })


  const downloadQR = () => {
    if (qrRef.current) {
      html2canvas(qrRef.current).then((canvas) => {
        const qrImage = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const link = document.createElement("a");
        link.download = "qr-code.png";
        link.href = qrImage;
        link.click();
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div ref={qrRef} className="w-auto self-center ">
        <span></span>
      <QRCode
        value={Store.name}
        bgColor={bgColorQr}
        quietZone={10}
        size={200}
        fgColor="green"
        logoImage="/github.png"
        logoWidth="100"
        logoOpacity="0.4"
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
