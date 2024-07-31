import React from 'react'

const SecondaryBtn = ({link, children}) => {
  return (
        <a href={link} className='px-6 py-2 rounded-lg font-medium border border-purple-600'>
            {children}
        </a>
    )
}

export default SecondaryBtn