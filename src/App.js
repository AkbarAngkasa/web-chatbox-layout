import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import logo from './assets/images/emkop-logo-transparent-landscape.png';

// Layouts
import PinLayout from "./components/layouts/PinLayout"
import AnimationLayout from './components/layouts/AnimationLayout';
import CameraLayout from "./components/layouts/CameraLayout"

// components
import NotFoundAnimation from './components/animated/NotFoundAnimation';
import ButtonCostum from './components/component/ButtonCostum';
import PaginationCostum from './components/component/PaginationCostum';
import FormsCostum from './components/component/FormsCostum';
import MessageBoxCostum from './components/component/MessageBoxCostum';
import ModalCostum from './components/component/ModalCostum';

// Blocks
import NavbarBlock from './components/blocks/NavbarBlock';
import TableBlock from './components/blocks/TableBlock';
import CRUDBlock from './components/blocks/CRUDBlock';
import LoginBlock from './components/blocks/LoginBlock';
import SidenavBlock from './components/blocks/SidenavBlock';
import DashboardLayout from './components/layouts/DashboardLayout';
import PrimeTablesBlocks from './components/blocks/PrimeTablesBlocks';

export default function App() {

  function clickHandler(){
    console.log(`Clicked!`);
  }

  return(
    <Router>
      <div className="content font-sans">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/camera-layout" element={<CameraLayout />}/>
          <Route path="/pin-screen-layout" element={<PinLayout />}/>
          <Route path="/animation-layout" element={
            <AnimationLayout 
            isHeader={true}
            headerElhImg={<img src={logo} alt={logo} className="w-60 -mt-2 lg:w-80 lg:-mt-8 z-10" />}
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
          <Route path="/dashboard-layout" element={<DashboardLayout />}/>
          {/* <Route path='/component-button' element={
            <Button 
              isBtnHandler={false}
              btnTitle={'Button'}
            />}
          /> */}
          {/* <Route path='/component-button' element={
              <Button color="dark">
                Dark
              </Button>
          }/> */}
          <Route path='/component-button' element={
            <ButtonCostum />
          }/>
          <Route path='/component-pagination' element={
            <PaginationCostum />
          }/>
          <Route path='/component-form' element={
            <FormsCostum />
          }/>
          <Route path='/component-message-box' element={
            <MessageBoxCostum />
          }/>
          <Route path='/component-modal' element={
            <ModalCostum />
          }/>
          {/* Blocks */}
          <Route path='/block-navbar' element={
            <NavbarBlock />
          }/>
          <Route path='/block-table' element={
            <TableBlock />
          }/>
          <Route path='/block-table-prime' element={
            <PrimeTablesBlocks />
          }/>
          <Route path='/block-crud' element={
            <CRUDBlock />
          }/>
          <Route path='/block-login' element={
            <LoginBlock />
          }/>
          <Route path='/block-sidenav' element={
            <SidenavBlock />
          }/>
        </Routes>
      </div>
    </Router>
  )
}