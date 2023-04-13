import Header from '../blocks/Header'
import BtnCostum from '../blocks/BtnCostum'

// == Contents ==
// 1. Header  :Boolean
// 2. Header img  :HTML Element
// 3. Header Title  :String
// 4. Animation :HTML Element
// 5. Animation Title :String
// 6. Button  :Boolean
// 7. ButtonHandler :Function
// 8. ButtonTitle: String

export default function AnimationLayout({ isHeader, headerElhImg, isHeaderTitle, headerTitle, animation, isAnimationTitle, animationTitle, isBtn, btnTitle, isBtnHandler, btnHandler }) {
  return (
    <div className="h-screen flex flex-col justify-center bg-red-200">
      {/* Header */}
      {isHeader &&
        <Header
          elhImg={headerElhImg}
          isTitle={isHeaderTitle}
          title={headerTitle}
        />
      }
      {/* Animation */}
      <div className="h-[75vh] py-[3%] px-[2%] flex flex-col justify-start items-start">        
        <div className="h-[50vh] w-full lg:w-[40%] mx-auto flex flex-col justify-center items-center">
          {animation}
          {isAnimationTitle &&
            <h1 className='text-blue-600 font-semibold text-2xl text-center lg:text-3xl'>{animationTitle}</h1>
          }
          {isBtn &&
            <div className='mt-3 lg:mt-4'>
              {isBtnHandler ?
                <BtnCostum isBtnHandler={true} btnHandler={btnHandler} btnTitle={btnTitle}/>
                :
                <BtnCostum isBtnHandler={false} btnTitle={btnTitle}/>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
