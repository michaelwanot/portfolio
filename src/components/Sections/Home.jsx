import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BaseSection } from './BaseSection';

export const Home = () => {
  return (
    <BaseSection section="home">
      <div className='relative top-[20%]'>
        <div className='lg:w-2/3'>
            <h3 className='font-thin text-tertiary uppercase w-full'>IT Consultant</h3>
            <p className='my-6 font-bold lg:text-5xl text-2xl'>
              Hi, I'm Michael<br/>
              I am an <span className='text-primary font-bold'>IT</span> consultant, experienced in frontend.<br/>in the game since 4 years.
             
            </p>
            <p className='my-4 text-sm font-thin'>Hai un progetto da realizzare?</p>
            <div className='lg:mx-0 flex gap-8'>
              <a href='#contacts' className='button-primary'>Hire me!</a>
              <a download href="CV_ENG.pdf" className='button-secondary'>Download CV <span><FontAwesomeIcon icon={faDownload} /></span></a>
            </div>
        </div>
        <div className='mt-12'>
          <h2 className='font-thin text-tertiary uppercase'>Elsewhere</h2>
          <ul className='flex gap-6 mt-3'>
            <a href="https://github.com/michaelwanot" className='icon-wrapper'>
              <i className='fa fa-github linked-icon'/>
            </a>
            <a href="https://www.linkedin.com/in/michael-wanot-9154a4151" className='icon-wrapper'>
              <i className='fa fa-linkedin linked-icon'/>
            </a>
          </ul>
        </div>    
      </div>
    </BaseSection>
  );
}
