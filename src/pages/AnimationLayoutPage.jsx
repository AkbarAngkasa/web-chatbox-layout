import AnimationLayout from "../components/layouts/AnimationLayout"
import logo from "../assets/images/emkop-logo-transparent-landscape.png"
// import {LoadingAnimation} from "../components/animated/LoadingAnimation"
import {NotFoundAnimation} from "../components/animated/NotFoundAnimation"

export default function AnimationLayoutPage() {
  function clickHandler(){
    console.log('Clicked')
  }
  
  return (
    <>
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
    </>
  )
}
