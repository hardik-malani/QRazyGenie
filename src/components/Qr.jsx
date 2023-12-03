import React, { useEffect, useRef} from "react";
import { QRCode } from "react-qrcode-logo";
import html2canvas from "html2canvas";
import { useDispatch,useSelector } from 'react-redux';

export default function Qr({link}) {
  const qrRef = useRef(null);
  const bgColorQr = "#000000";
  const input = useSelector((state) => state.linkValue)
  const qrcolor = useSelector((state) => state.frcolor.name?.hex || "#000000")

  useEffect(()=>{
    console.log(qrcolor)
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
        value={input.name}
        fgColor={qrcolor}
        bgColor={bgColorQr}
        quietZone={10}
        size={200}
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
