import React from 'react'
import { testimonials } from '../constants'

const Reviews = () => {
  return (
    <div id='testimonials' className='mt-20'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide'>
            What people are saying
        </h2>

        <div className='mt-20 flex flex-wrap justify-center gap-5'>
            {testimonials.map((review,index) => (
                <div key={index} className='w-4/5 lg:w-1/4 border border-neutral-700 rounded-lg p-10
                bg-neutral-900 flex flex-col justify-between gap-5'>
                    <p className='font-thin'>{review.text}</p>

                    <div className='flex gap-5 items-center'>
                        <div className='h-10 w-10 rounded-full overflow-hidden'>
                            <img src={review.image} alt="" />
                        </div>

                        <div className='flex flex-col'>
                            <span>{review.user}</span>
                            <span className='font-thin text-sm'>{review.company}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews