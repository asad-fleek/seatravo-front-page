import  { useState, useEffect } from 'react'
import { headerLogo, headSet } from '../../utils/images';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from "react-router";



const NavBar = () => {
  const handleClick = () => {
    alert('clicked')
  }

  const [MenuBar, setMenuBar] = useState(false);
  const handleMeniBar = () => {
    setMenuBar(!MenuBar)
  };

  const location = useLocation();


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='md:col-span-2 col-span-6 self-center'>
              <NavLink to="/">
                <div className='justify-start'>
                  <img
                    src={headerLogo}
                    alt="Logo"
                  />
                </div>
              </NavLink>
            </div>
            <div className='col-span-6 self-center hidden md:block'>
              <div className="justify-start items-center gap-3.5 hidden lg:flex">
                <NavLink
                  to="/ferries"
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-xl flex justify-center cursor-pointer items-center gap-2 ${isActive ? 'bg-[#E6F3FB]' : 'hover:bg-[#E6F3FB]'
                    }`
                  }
                >
                  <div className="text-lg font-bold font-Haniva">Ferries</div>
                </NavLink>

                <NavLink
                  to="/excursion"
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-xl flex justify-center cursor-pointer items-center gap-2 ${isActive ? 'bg-[#E6F3FB]' : 'hover:bg-[#E6F3FB]'
                    }`
                  }
                >
                  <div className="text-lg font-bold font-Haniva">Excursions</div>
                </NavLink>

                <NavLink
                  to="/cars"
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-xl flex cursor-pointer justify-center items-center gap-2 ${isActive ? 'bg-[#E6F3FB]' : 'hover:bg-[#E6F3FB]'
                    }`
                  }
                >
                  <div className="text-lg font-bold font-Haniva">Cars</div>
                </NavLink>

                <NavLink
                  to="/crusies"
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-xl flex justify-center items-center gap-2 cursor-pointer ${isActive ? 'bg-[#E6F3FB]' : 'hover:bg-[#E6F3FB]'
                    }`
                  }
                >
                  <div className="text-lg font-bold font-Haniva">Cruises</div>
                </NavLink>
              </div>
            </div>
            <div className='md:col-span-4 col-span-6'>
              <div className="flex justify-end items-center gap-4">
                <div
                  className="p-0.5 rounded-lg justify-start items-center gap-1 hidden lg:flex"
                >
                  <div className="w-10 px-2.5 py-1 text-white rounded-md cursor-pointer inline-flex flex-col justify-center items-center gap-2.5  bg-stone-950 hover:text-black hover:bg-red-50">
                    <div className="text-center  text-base font-medium font-Haniva "><button onClick={handleClick}>EN</button>
                    </div>
                  </div>

                  <div className="w-10 px-2.5 py-1 text-black rounded-md cursor-pointer inline-flex flex-col justify-center items-center gap-2.5  bg-red-50 hover:text-white hover:bg-stone-800">
                    <div className="text-center text-Text-txt-dark text-base font-medium font-Haniva"><button onClick={handleClick}>ES</button>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex  h-12 p-4 rounded-xl outline -outline-offset-1 cursor-pointer outline-Border-brdr-divider  justify-center items-center gap-2">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-5 absolute left-[3.35px] top-px bg-Icon-icon-Dark " />
                    <button onClick={handleClick}><img
                      src={headSet}
                      alt="Logo"
                    /></button>
                  </div>
                </div>

                <div className="h-12 px-6 cursor-pointer py-4 bg-Interactive-Secondary-Default rounded-xl flex justify-center items-center gap-2 bg-[#FF6B6B] text-white">
                  <div className="text-center   text-lg font-bold font-Haniva">
                    <button onClick={handleClick} className='cursor-pointer'>Login or Register</button>
                  </div>
                </div>
                <button className='sm-block md:hidden' onClick={handleMeniBar}>
                  {MenuBar ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;