import { useState } from 'react'
import { QRCode } from 'react-qrcode-logo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<QRCode value="https://github.com/gcoro/react-qrcode-logo" bgColor='yellow' quietZone={10} fgColor="green" logoImage={"/Groot.jpg"} logoWidth="40" logoOpacity="9" qrStyle="square" />,
    </>
  )
}

export default App
