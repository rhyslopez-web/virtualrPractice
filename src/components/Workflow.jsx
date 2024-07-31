import React from 'react'
import code from '../assets/code.jpg'
import { checklistItems } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Workflow = () => {
  return (
    <>
        <div className='flex justify-center'>
            <h2 className='text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide font-normal w-4/5 lg:w-1/2 mt-20'>
                Accelerate your
                <span className='bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-medium'>
                    {" "}
                    coding workflow
                </span>
            </h2>
        </div>

        <div className='flex justify-center mt-20'>
            <div className='flex lg:flex-row flex-col w-4/5 gap-y-10'>
                <div className='lg:w-1/2 flex'>
                    <img src={code} alt="" />
                </div>

                <div className="flex flex-col justify-evenly lg:w-1/2 sm:gap-10 lg:gap-0">
                    {checklistItems.map((item, index) => (
                        <div className='flex gap-5'>
                            <div className='h-10 w-10 p-2 flex justify-center items-center text-green-500'>
                                <CheckCircle2/>
                            </div>

                            <div>
                                <h5 className='text-xl mb-5'>{item.title}</h5>
                                <p className="text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Workflow