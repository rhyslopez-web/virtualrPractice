import React from 'react'
import {useState} from 'react'
import logo from '../assets/brainwave-symbol.svg'
import {navItems} from '../constants'
import {X, Menu} from "lucide-react"
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'


const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen)
      mobileMenuOpen ? enablePageScroll() : disablePageScroll()
  }

  return (
    <nav className='sticky z-50 py-5 top-0 bg-[#121212]'>
        <div className='container px-4 mx-auto relative text-md space-y-3'>
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

            {mobileMenuOpen && (
                <div id='mobileNav' className="flex flex-col gap-5">
                    <ul className='flex flex-col justify-center items-center gap-5'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3 justify-center items-center">
                        <SecondaryBtn link="#">Sign In</SecondaryBtn>
                        <PrimaryBtn link="#">Join Now</PrimaryBtn>
                    </div>
                </div>    
            )}
        </div>
    </nav>
  )
}

export default Navbar