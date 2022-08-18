import React from 'react';
import { BaseSection } from './BaseSection';

export const Skills = () => {
  return (
    <section className="min-h-screen">
      <a name="skills" href="#"/>
       
      <div className='bg-black'>
        <div className='container pt-24 lg:pt-20 pb-4'>
          <div className='flex w-full mb-10 hidden lg:block' >
            <p className='quote-box'>“First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.”</p>
          </div>
          <h1 className='lg:text-6xl text-4xl font-bold text-white'>Skills & <span className="text-primary">Experience </span></h1>
        </div>
      </div>

      <div className='bg-white'>
        <div className='container py-4 lg:py-8'>
          <p className='font-thin'>
            Since beginning my journey as a developer nearly 4 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
          </p>
          <p className='mt-4 font-thin'>
            I create successful responsive websites, easy to use, and built with best practices. The main area of my expertise is front-end development, <span className="font-bold text-primary">React</span>, <span className="font-bold text-primary">Typescript</span>, building small and medium web apps, features, animations, and coding interactive layouts
          </p>
          <p className='mt-4 font-thin'>
            I also have full-stack developer experience with popular open-source Backend Technologies, <span className="font-bold text-primary">Django</span>, <span className="font-bold text-primary">Python</span>.
          </p>
        </div>
      </div>
      
      <div className='bg-secondary'>
        <div className='container'>
          <div className='lg:flex py-4 lg:justify-between '>

            <div className='skill-box'>
              <h2 className='font-bold text-xl'>
                Fullstack developer
              </h2>
              <h3 className='text-sm text-primary font-bold mt-2'>
                Spaziodati
              </h3>
              <h4 className='text-xs'>
                2021 - today
              </h4>
              <p className='font-thin mt-2'>
                Features and plugin for the Atoka product, a powerful search engine that introduces the concept of pay-per-data accessible to public and private individuals. The interface, built in React Typescript, communicates with the API via an intermediate provided by Django framework
              </p>
            </div>

            <div className='skill-box lg:border-4 lg:border-primary lg:bg-secondary'>
              <h2 className='font-bold text-xl lg:text-tertiary'>
                Frontend lead
              </h2>
              <h3 className='text-sm text-primary font-bold mt-2'>
                Telecom Italia
              </h3>
              <h4 className='text-xs lg:text-tertiary'>
                2019 - 2021
              </h4>
              <p className='font-thin mt-2 lg:text-tertiary'>
                Direct relationships with the customer for the analysis and collection of requirements. The project represents the extension of the previous work confirmed as successful and therefore acquired by Telecom Italia
              </p>
            </div>

            <div className='skill-box lg:bg-primary'>
              <h2 className='font-bold text-xl lg:text-secondary'>
                Frontend developer
              </h2>
              <h3 className='text-sm text-primary lg:text-white font-bold mt-2'>
                Telecom Brasil
              </h3>
              <h4 className='text-xs lg:text-tertiary'>
                2018 - 2019
              </h4>
              <p className='font-thin mt-2 lg:text-tertiary'>
                Search engine based on micro services on Java springboot core. The UI / UX is presented in React JS. I had the opportunity to work with a young and dynamic team that was self-coordinated via Agile methodologies.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
   
  );
}
