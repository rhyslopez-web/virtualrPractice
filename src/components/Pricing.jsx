import React, { useRef } from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {

  const scrollRef = useRef()
  
  /*useGSAP(() => {
    const pricingCard = gsap.utils.toArray(scrollRef.current.children);

    // animations for cards still need to be smoother
    pricingCard.forEach((card) => {
        gsap.from(card, {
            y: 500,
            stagger: 10,
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
            },
        })
    })
  }, [])
  */

  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
        <h2 id='heading' className='text-3xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide'>Pricing</h2>

        <div ref={scrollRef} className='flex flex-col lg:flex-row gap-5 w-4/5 mt-10 overflow-hidden'>
            {pricingOptions.map((pricing, index) => (
                <div key={index} className='w-full lg:w-1/3 flex flex-col border border-neutral-700 p-10 rounded-lg justify-evenly gap-5'>
                    <p className='text-4xl'>
                        {pricing.title}

                        {pricing.title === "Pro" && (
                        <span 
                        className='bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text text-lg'>
                            {" "}(Most popular)
                        </span>
                        )}
                    </p>
                    
                    <div>
                        <span className='text-3xl'>{pricing.price} </span>
                        <span>/Month</span>
                    </div>

                    <ul className='flex flex-col gap-5'>
                        {pricing.features.map((feature, index) => (
                            <li key={index} className='flex gap-3'>
                                <CheckCircle2/>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className='flex justify-center mt-10'>
                        <a href="" className='px-6 py-3 rounded-lg font-medium border border-purple-600 w-full text-center
                        hover:bg-purple-500 transition ease-in-out'>
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing