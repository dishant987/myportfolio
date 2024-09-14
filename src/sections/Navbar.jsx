import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'


const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {
        navLinks.map((link) => (
          <li key={link.id} className='nav-li'>
            <Link onClick={() => { }} to={link.href} className='nav-li_a'>
              {link.name}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className=' max-w-7xl mx-auto'>
        <div className=' flex justify-between items-center py-5 mx-auto c-space'>
          <Link to={'/'} className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            Dishant
          </Link>
         
          <button className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu' onClick={() => setIsOpen((prev) => !prev)}>
            <img src={isOpen ? "assets/menu.svg" : "assets/close.svg"} alt="toggle" className='w-6 h-6' />
          </button>

          <nav className=' sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${!isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar