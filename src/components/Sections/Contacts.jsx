import React from 'react';

import { BaseSection } from './BaseSection';

export const Contacts = () => {

  return (
    <BaseSection section="contacts">
      <div className='relative top-[17%] bg-primary p-4 lg:w-2/3 lg:ml-auto'> 
        <div className='flex -mt-14'>
          <ul className='flex gap-6 ml-auto mr-6'>
            <a href="https://wa.me/+393312275783" className='icon-wrapper h-16 w-16'>
              <i className='fa fa-whatsapp linked-icon text-5xl'/>
            </a>
            <a href="mailto:michaelwanot.mail@gmail.com" className='icon-wrapper h-16 w-16'>
              <i className='fa fa-at linked-icon text-5xl'/>
            </a>
          </ul>
        </div>
        <form action="http://formspree.io/michele.wanot@gmail.com" method="POST" className='lg:w-2/3 mx-auto uppercase'>

          <div className="form-input">
            <label htmlFor="name">first name</label>
            <input type="text" id="name" className='h-8'/>
          </div>
          
          <div className="form-input">
            <label htmlFor="email">your email</label>
            <input type="email" id="email" className='h-8'/>
          </div>

          <div className="form-input">
            <label htmlFor="subject">your subject</label>
            <input type="text" id="subject" className='h-8'/>
          </div>

          <div className="form-input">
            <label htmlFor="message">your message</label>
            <textarea rows="6" id="message"/>
          </div>
          <div className='flex'>
            <button className="bg-black p-2 ml-auto text-secondary uppercase ">submit</button>
          </div>
        </form>
      </div>
    </BaseSection>
  );
}
