import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi/index';
import { FaTimes } from 'react-icons/fa';
import { socialItems } from '../../common';

function Header({navItems}) {
  const [isMobileMenuOpended, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const listenToScroll = () => {
    if(window.scrollY){ // TODO: fade
        setScrolled(true)   
    }
    else{
        setScrolled(false)   
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  let scrolledClassName= scrolled ? ' shadow-xl bg-white' : 'bg-white/50';
  return (
    <header className={`flex lg:items-center w-full h-16 ${scrolledClassName} fixed z-10`}>
        <div className='container flex justify-between items-center'>
            <h1 className="uppercase" style={{fontSize: '36px'}}>Michael</h1>
            <ul className='hidden lg:flex gap-6'>
                {navItems.map((navItem) => <NavItem navItem={navItem} key={navItem} />)}
            </ul>
            <ul className='hidden lg:flex justify-between gap-2'>
                {socialItems.map((socialItem) => <SocialLink {...socialItem}/>)}
            </ul>
        {!isMobileMenuOpended ?
            <button className='lg:hidden ml-auto' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpended)} >
                <GiHamburgerMenu />
            </button> : null}
            
        </div>
        {isMobileMenuOpended ?
            <div className='mobile-menu'>
                <div className='flex flex-col'>
                <button onClick={() => setIsMobileMenuOpen(false)} className="fixed right-4 h-16 flex items-center font-thin gap-2">
                        CLOSE <FaTimes />
                    </button>
                    <div className='h-screen flex items-center'>
                        <div className='mx-auto'>
                            <ul className='m-auto'>
                                {navItems.map((navItem) => <NavItem navItem={navItem} key={navItem} onClick={() => setIsMobileMenuOpen(false) } />)}
                            </ul>
                            <ul className='flex justify-evenly'>
                                {socialItems.map((socialItem) => <SocialLink {...socialItem}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div> : null}
        
    </header>
  );
}

export default Header;

export const NavItem = ({navItem, onClick, currentView}) => {
    return (
        <li className='text-center uppercase'>
            <a href={`#${navItem}`} onClick={onClick}>
                {navItem}
            </a>
        </li>
    )
}

export const SocialLink = ({icon}) => {
    return icon;
}