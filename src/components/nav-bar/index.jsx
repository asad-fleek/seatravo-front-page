import React, { useState } from 'react'
import { headerLogo, headSet } from '../../utils/images';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const handleClick = () => {
    alert('clicked')
  }

  const [MenuBar, setMenuBar] = useState(false);
  const handleMeniBar = () => {
    setMenuBar(!MenuBar)
  };

  return (
    <>
      {/* <div className="w-330 flex justify-between items-center mx-auto">
      <div className="flex justify-start items-center gap-11">
        <img
          className="w-56 h-14 cursor-pointer"
          src={headerLogo}
          alt="Logo"
        />

        <div className="flex justify-start items-center gap-3.5">
          <div
            className="px-4 py-1 rounded-xl flex justify-center cursor-pointer items-center gap-2 hover:bg-[#E6F3FB]"
          >
            <div className="text-lg font-bold font-Haniva">Ferries
            </div>
          </div>

          <div
            className="px-4 py-1 rounded-xl flex justify-center cursor-pointer items-center gap-2 hover:bg-[#E6F3FB]"
          >
            <div className="text-lg font-bold font-Haniva ">
              Excursions
            </div>
          </div>

          <div
            className="px-4 py-1 bg-Interactive-Neutral-Default rounded-xl flex cursor-pointer justify-center items-center gap-2 hover:bg-[#E6F3FB]"
          >
            <div className="text-lg font-bold font-Haniva">
              Cars
            </div>
          </div>

          <div
            className="px-4 py-1 rounded-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-[#E6F3FB]"
          >
            <div className="text-lg font-bold font-Haniva">
              Cruises
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-4">
        <div
          className="p-0.5 rounded-lg flex justify-start items-center gap-1"
        >
          <div className="w-10 px-2.5 py-1 rounded-md cursor-pointer inline-flex flex-col justify-center items-center gap-2.5  bg-stone-950  hover:bg-red-50">
            <div className="text-center  text-base font-medium font-Haniva "><button onClick={handleClick}>EN</button> 
            </div>
          </div>

          <div className="w-10 px-2.5 py-1 rounded-md cursor-pointer inline-flex flex-col justify-center items-center gap-2.5  bg-red-50 hover:bg-stone-800">
            <div className="text-center text-Text-txt-dark text-base font-medium font-Haniva"><button onClick={handleClick}>ES</button>
            </div>
          </div>
        </div>

        <div className=" h-12 p-4 rounded-xl outline outline-1 outline-offset-[-1px] cursor-pointer outline-Border-brdr-divider flex justify-center items-center gap-2">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-4 h-5 absolute left-[3.35px] top-[1px] bg-Icon-icon-Dark" />
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
      </div>
    </div> */}



      <header>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='md:col-span-2 col-span-6 self-center'>
              <div className='justify-start'>
                <img
                  src={headerLogo}
                  alt="Logo"
                />
              </div>
            </div>
            <div className='col-span-6 self-center hidden md:block'>
              <div className="flex justify-start items-center gap-3.5">
                <div
                  className="px-4 py-1 rounded-xl flex justify-center cursor-pointer items-center gap-2 hover:bg-[#E6F3FB]"
                >
                  <div className="text-lg font-bold font-Haniva">Ferries
                  </div>
                </div>

                <div
                  className="px-4 py-1 rounded-xl flex justify-center cursor-pointer items-center gap-2 hover:bg-[#E6F3FB]"
                >
                  <div className="text-lg font-bold font-Haniva ">
                    Excursions
                  </div>
                </div>

                <div
                  className="px-4 py-1 bg-Interactive-Neutral-Default rounded-xl flex cursor-pointer justify-center items-center gap-2 hover:bg-[#E6F3FB]"
                >
                  <div className="text-lg font-bold font-Haniva">
                    Cars
                  </div>
                </div>

                <div
                  className="px-4 py-1 rounded-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-[#E6F3FB]"
                >
                  <div className="text-lg font-bold font-Haniva">
                    Cruises
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-6'>

              <div className="flex justify-end items-center gap-4">
                <div
                  className="p-0.5 rounded-lg justify-start items-center gap-1 hidden md:flex"
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

                <div className="hidden md:flex h-12 p-4 rounded-xl outline outline-1 outline-offset-[-1px] cursor-pointer outline-Border-brdr-divider  justify-center items-center gap-2">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-5 absolute left-[3.35px] top-[1px] bg-Icon-icon-Dark" />
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
