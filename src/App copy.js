/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from 'classnames';
import React from 'react';
import { sections } from './common';
import Header from './components/Header';
import { FaDownload } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <Header navItems={sections}/>
      {sections.map((section, index) => <BaseSection section={section} key={section} index={index}/>)}
      <Footer />
    </div>
  );
}

export default App;


export class BaseSection extends React.Component {

  renderSection = () => {
    switch(this.props.section) {
      case 'home':
        return <Home/>;
      default:
        return 'Not implemented';
    }
  }

  render() {

    const className = classNames(
      'h-screen', {
      'bg-gray-200': this.props.index%2 !== 0,
      'bg-image': this.props.section === 'home',
    });
  
    return (
      <section className={className} style={{height: '300vh'}}>
        <div className='container'>
          <a name={this.props.section} href="#"/>
          {this.renderSection()}
        </div>
      </section>
    )
  }
}

export const Home = () => {
  return (
    <div>
    ciao

      <div className='absolute top-1/2'>

        <div className='flex flex-col gap-6'>
          <h3 className='text-bold'>Looking for a Designer !</h3>
          <h1> I'm Michael Wanot</h1>
          
        
          <p className=''>Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
          <div className='lg:mx-0 flex gap-4'>
            <button className='rounded-md bg-white  flex items-center gap-2 py-2 px-3'>Hire me!</button>
            <button className='rounded-md border-2 border-rose-500 flex items-center gap-2 py-2 px-3'>Download CV <span><FaDownload /></span></button>
          </div>
        </div>

      </div>

    
    </div>
  );
}

export const GoToTop = () => {
  return (
    <div>Top</div>
  )
}

export const Footer = () => {
  return (
    <div>© 2022 Michael Wanot.</div>
  )
}