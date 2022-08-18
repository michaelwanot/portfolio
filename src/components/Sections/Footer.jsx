import React from 'react';


export const Footer = () => {
  return (
    <div className='bg-black text-white py-2'>
      <div className='container py-4 flex items-center'>
        <div>
          <ul className='flex gap-4'>
            <a href="https://github.com/michaelwanot" className='icon-wrapper h-8 w-8'>
              <i className='fa fa-github linked-icon text-[16px]'/>
            </a>
            <a href="https://www.linkedin.com/in/michael-wanot-9154a4151" className='icon-wrapper h-8 w-8'>
              <i className='fa fa-linkedin linked-icon text-[16px]'/>
            </a>
          </ul>
        </div>
        <div className='text-xs ml-auto'>
          © 2022 Michael Wanot.
        </div>
      </div>
    </div>
  )
}