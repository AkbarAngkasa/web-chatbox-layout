import React from 'react'
import Header from '../breadcrumbs/Header'

export default function AnimationLayout({ isHeader, headerElhImg, isHeaderTitle, headerTitle, animation, isAnimationTitle, animationTitle }) {
  return (
    <div className="h-screen flex flex-col justify-center bg-red-400">
      {/* Header */}
      {isHeader &&
        <Header
          elhImg={headerElhImg}
          isTitle={isHeaderTitle}
          title={headerTitle}
        />
      }
      {/* Animation */}
      <div className="h-[75vh] py-[3%] px-[2%] flex flex-col justify-start items-start bg-red-300">
        <div className="h-[50vh] w-full lg:w-[40%] mx-auto flex flex-col justify-center items-center">
          {animation}
          {isAnimationTitle &&
            <h1 className='text-blue-600 font-semibold text-xl text-center sm:text-3xl'>{animationTitle}</h1>
          }
        </div>
      </div>
    </div>
  )
}
