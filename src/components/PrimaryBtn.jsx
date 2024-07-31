import React from 'react'

const PrimaryBtn = ({link, children}) => {
  return (
    <a href={link} className='px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-medium'>
        {children}
    </a>
  )
}

export default PrimaryBtn