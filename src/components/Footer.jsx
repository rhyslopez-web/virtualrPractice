import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer id='footer' className='bg-black flex flex-col lg:flex-row lg:justify-evenly p-10 mt-20 gap-10'>
        <div>
            <h5 className='text-md font-semibold mb-4'>Resources</h5>
            <ul className='space-y-2'>
                {resourcesLinks.map((resource, index) => (
                    <li key={index} className='text-neutral-300 hover:text-white transition ease-in-out'>
                        <a href={resource.href}>
                            {resource.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        
        <div>
            <h5 className='text-md font-semibold mb-4'>Platform</h5>
            <ul className='space-y-2'>
                {platformLinks.map((platform, index) => (
                    <li key={index} className='text-neutral-300 hover:text-white transition ease-in-out'>
                        <a href={platform.href}>
                            {platform.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h5 className='text-md font-semibold mb-4'>Community</h5>
            <ul className='space-y-2'>
                {communityLinks.map((community, index) => (
                    <li key={index} className='text-neutral-300 hover:text-white transition ease-in-out'>
                        <a href={community.href}>
                            {community.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    </footer>
  )
}

export default Footer