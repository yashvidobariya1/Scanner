import React, { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState("");

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("Camera access is available.");
  } else {
    console.error("Camera access is not supported on this device.");
  }

  const startScanner = () => {
    const qrCodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    qrCodeScanner.render(
      (result) => {
        // Stop the scanner once the QR code is detected
        qrCodeScanner
          .clear()
          .then(() => {
            // Handle the scanned result
            setScanResult(result.text);
          })
          .catch((error) => {
            console.error("Error stopping the scanner: ", error);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <h1>QR Scanner</h1>
      <div id="reader" style={{ width: "100%", height: "400px" }}></div>
      <button onClick={startScanner}>Start Scanning</button>
      <p>Scanned Data: {scanResult}</p>
    </div>
  );
};

export default QRScanner;
