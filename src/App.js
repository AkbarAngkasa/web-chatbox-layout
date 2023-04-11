import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import logo from './assets/images/emkop-logo-transparent-landscape.png';

// Layouts
import PinLayout from "./components/layouts/PinLayout"
import AnimationLayout from './components/layouts/AnimationLayout';
import CameraLayout from "./components/layouts/CameraLayout"

// Breadcrumbs
import NotFoundAnimation from './components/animated/NotFoundAnimation';
import Button from './components/breadcrumbs/Button';

export default function App() {

  function clickHandler(){
    console.log(`Clicked!`);
  }

  return(
    <Router>
      <div className="content select-none font-sans">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/camera-layout" element={<CameraLayout />}/>
          <Route path="/pin-screen-layout" element={<PinLayout />}/>
          <Route path="/animation-layout" element={
            <AnimationLayout 
              isHeader={true}
              headerElhImg={<img src={logo} alt={logo} className="w-60 -mt-2 sm:w-80 sm:-mt-8 z-10" />}
              isHeaderTitle={true}
              headerTitle="Animation Page Layout"
              animation={<NotFoundAnimation />}
              isAnimationTitle={true}
              animationTitle="Animation Title"
              isBtn={true}
              btnTitle={"Button"}
              isBtnHandler={true}
              btnHandler={clickHandler}
            />
          }/>
          <Route path='/component-button' element={
            <Button 
              isBtnHandler={false}
              btnTitle={'Button'}
            />}
          />
        </Routes>
      </div>
    </Router>
  )
}