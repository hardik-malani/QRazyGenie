import React, { useRef } from "react";
import { QRCode } from "react-qrcode-logo";
import html2canvas from "html2canvas";

export default function Qr() {
  const qrRef = useRef(null);
  const bgColorQr = "white";

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
      <QRCode
        value="https://youtu.be/dQw4w9WgXcQ?si=aDCRi0NIUfiTJydW"
        bgColor={bgColorQr}
        quietZone={10}
        fgColor="green"
        logoImage="/github.png"
        logoWidth="90"
        logoOpacity="0.4"
        qrStyle="square"
      />
      </div>
      <button
        onClick={downloadQR}
        className="w-48 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 cursor-pointer rounded-xl font-mono hover:text-white mt-6"
      >
        Download
      </button>
    </div>
  );
}
