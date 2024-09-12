import React from 'react'
import {useState} from 'react'
import logo from '../assets/brainwave-symbol.svg'
import {navItems} from '../constants'
import {X, Menu} from "lucide-react"
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import {AnimatePresence, motion} from 'framer-motion'


const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen)
    //   mobileMenuOpen ? enablePageScroll() : disablePageScroll()
  }

  return (
    <nav className='fixed top-0 right-0 left-0 bg-gradient-to-b from-[#121212] to-transparent'>
        <div className='container px-4 mx-auto relative text-md py-5 z-20'>
            <div className="grid lg:grid-cols-4 grid-cols-2 items-center justify-between">
                {/* Navbar Branding */}
                <div className='flex items-center'>
                    <img className='h-10 w-10 mr-2' src={logo} alt="" />
                    <span>Brainwave</span>
                </div>

                {/* Navbar Desktop Links */}
                <ul className='hidden lg:flex lg:space-x-10 lg:col-span-2 lg:justify-center'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Navbar Buttons Desktop */}
                <div className="hidden lg:flex gap-3 lg:justify-end">
                    <SecondaryBtn link="#">Sign In</SecondaryBtn>
                    <PrimaryBtn link="#">Join Now</PrimaryBtn>
                </div>

                {/* Mobile View Links */}
                <div className='lg:hidden flex justify-end'>
                    <button onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
        </div>

        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div 
                initial={{
                    x: -500,
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    duration: 0.7,
                    ease: 'anticipate'
                }}
                exit={{
                    x: -500
                }}
                
                id='mobileNav' className="flex flex-col gap-10 items-center justify-center backdrop-blur-2xl h-[90vh]
                absolute top-0 right-0 left-0">
                    <ul className='flex flex-col justify-center items-center gap-10'>
                        {navItems.map((item, index) => (
                            <li key={index} className=''>
                                <a 
                                className='text-xl' 
                                onClick={toggleMobileMenu} 
                                href={item.href}>{item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3">
                        <SecondaryBtn link="#">Sign In</SecondaryBtn>
                        <PrimaryBtn link="#">Join Now</PrimaryBtn>
                    </div>
                </motion.div>    
            )}
        </AnimatePresence>
    </nav>
  )
}

export default Navbar