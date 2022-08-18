import { useState } from 'react';
import classNames from 'classnames';

export default function Header({navItems}) {
  const [isMobileMenuOpended, setIsMobileMenuOpen] = useState(false)
  const mobileClassName = classNames(
      'mobile-menu', {
        'top-0 py-[200px]': isMobileMenuOpended,
        '-top-[500px]': !isMobileMenuOpended,
      },
  );

  return (
    <header>
        <div className='flex items-center'>
            <div className='container flex justify-between'>
                <h1 className="logo">M<span className="font-medium">W</span></h1>
                <ul className='hidden lg:flex gap-14'>
                    {navItems.map((navItem) => <NavItem navItem={navItem} key={navItem} />)}
                </ul>
                <button className='mobile-menu-button' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpended)} >
                    <i className={`fa fa-${!isMobileMenuOpended ? 'bars' : 'times'} mx-auto`} />
                </button>
            </div>
        </div>
        <ul className={mobileClassName}>
            {navItems.map((navItem) =>
                <NavItem
                    navItem={navItem}
                    key={navItem}
                    onClick={() => setIsMobileMenuOpen(false)}
                />)}
        </ul>
    </header>
  );
}

export const NavItem = ({navItem, onClick}) => {
    return (
        <li className='text-center uppercase p-2'>
            <a href={`#${navItem}`} onClick={onClick} className="nav-item">
                {navItem}
            </a>
        </li>
    )
}
