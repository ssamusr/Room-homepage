import { useState } from 'react'
import { NavLink } from './NavLink'
import { IconClose, IconHamburger, IconLogo } from '../Icons'

export function Navbar () {
  const [showMenu, setShowMenu] = useState(false)

  const handleShow = () => setShowMenu(!showMenu)

  return (
    <nav
      className={showMenu
        ? 'flex justify-between items-center absolute w-full h-20 px-8 bg-white text-black text-lg'
        : 'flex items-center absolute font-semibold w-full h-20 px-8 lg:justify-between lg:text-white lg:w-1/2 lg:top-8 lg:left-14 lg:px-0'}
    >
      <button
        onClick={handleShow}
        className='p-1 lg:hidden'
      >
        {
            showMenu ? <IconClose aria-label='close' /> : <IconHamburger aria-label='menu' />
        }
      </button>

      <a
        href='#'
        className={showMenu ? 'hidden' : 'p-1 mx-auto pr-[1.75rem] lg:mx-0'}
        aria-label='room logo'
      >
        <IconLogo />
      </a>

      <ul
        className={showMenu
          ? 'flex gap-6 items-center'
          : 'hidden lg:flex lg:gap-6 lg:items-center'}
      >
        <NavLink link='home' />
        <NavLink link='shop' />
        <NavLink link='about' />
        <NavLink link='contact' />
      </ul>
    </nav>
  )
}
