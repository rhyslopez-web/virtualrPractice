import React from 'react'
import { features } from '../constants'

const FeatureSection = () => {
  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
        {/* Features pill*/}
        <div className='text-center'>
            <span className='px-5 py-2 bg-purple-950 rounded-full'>FEATURES</span>
        </div>

        {/* Features heading */}
        <h2 className='text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide font-normal w-4/5 lg:w-1/2 mt-20'>
            Easily build
            <span className='bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-medium'>
                {" "}
                your code
            </span>
        </h2>

        {/* Features cards */}
        <div className='mt-20 flex flex-wrap w-4/5 gap-y-10'>
            {features.map((feature, index) => (
                <div key={index} className='w-full lg:w-1/3'>
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-600 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>

                        <div>
                            <h5 className='text-xl mb-5'>{feature.text}</h5>
                            <p className='text-neutral-500'>{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
   
    </div>
  )
}

export default FeatureSection