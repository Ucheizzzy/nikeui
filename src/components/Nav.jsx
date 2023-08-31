import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
navLinks
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href='/'>
          <img
            src={headerLogo}
            width={129}
            height={29}
            className='w-[129px] h-[29px] m-0 '
          />
        </a>

        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => {
            return (
              <li key={item.text}>
                <a
                  href={item.href}
                  className='text-lg leading-normal text-slate-gray font-montserrat hover:text-black translate-x-0 ease-in'
                >
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden width:mr-24'>
          <a
            href='/
         '
          >
            Sign in
          </a>
          <span></span>
          <a
            href='/
         '
          >
            Explore now
          </a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}
export default Nav
