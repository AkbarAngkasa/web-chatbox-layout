import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import MobileCamera from "./MobileCamera"
import PinLayout from "./PinLayout"

export default function App() {
  return(
    <Router>
      <div className="content select-none">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/camera-layout" element={<MobileCamera />}/>
          <Route path="/pin-screen-layout" element={<PinLayout />}/>
        </Routes>
      </div>
    </Router>
  )
}