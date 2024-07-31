import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
import { Video } from 'lucide-react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";


const HeroSection = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center lg:mt-20 px-10'>
            {/* Hero Heading */}
            <h1 className='text-6xl sm:text-6xl lg:text-7xl text-center tracking-wide font-normal lg:w-1/2'>
                Brainwave build tools
                <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-wide font-normal'>
                    {" "}
                    for developers
                </span>
            </h1>

            {/* Hero Paragraph */}
            <p className='lg:text-lg max-w-4xl text-neutral-500 text-center mt-5'>
                Empower your creativity and bring your app ideas to life with out intuitive development tools.
                Get started today and turn your imagination into immersive reality.
            </p>

            {/* Hero C2As */}
            <div className="flex gap-3 justify-center items-center mt-10">
                <SecondaryBtn link="#">Documentation</SecondaryBtn>
                <PrimaryBtn link="#">Get Started</PrimaryBtn>
            </div>
        </div>

        {/* Hero Videos */}
        <div className='mt-20 flex justify-center'>
            <div className='flex justify-center items-center flex-col lg:flex-row lg:w-3/5 gap-3 px-10'>
                <video className='lg:w-1/2 border border-purple-600 rounded-lg' muted loop autoPlay>
                    <source src={video1} type='video/mp4' />
                </video>
                
                <video className='lg:w-1/2 border border-purple-600 rounded-lg' muted loop autoPlay>
                    <source src={video2} type='video/mp4' />
                </video>
            </div>
        </div>
    </>
  )
}

export default HeroSection