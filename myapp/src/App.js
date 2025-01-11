import "./App.css";
import Qrcode from "./Qrcode";
import QRScanner from "./QrScanner";

function App() {
  return (
    <div className="App">
      <QRScanner />
      <Qrcode />
    </div>
  );
}

export default App;
