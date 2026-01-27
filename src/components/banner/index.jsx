import React, { useState } from 'react'
import { calendar, profile, search, shipicon, } from '../../utils/images';
import BigCard from '../bigcard';
import { bigCards } from '../../utils/bigcard';
import SmallCard from '../smallcard';

import { bar } from '../../utils/bar';
import Bar from '../bar';


const Banner = () => {
  const [tripType, settripType] = useState('oneWay');

  const handleChange = (event) => {
    settripType(event.target.value);
  };


  return (
    <>
      <section className='container mx-auto pt-4'>
        <div className="hero-banner relative z-10 rounded-4xl flex flex-col ">
          <div className="pt-20 pb-32 text-center px-4">
            <div className="inline-block">
              <div className="border-2 border-dashed border-white max-w-max mx-auto rounded-3xl px-6 py-2">
                <p className="text-white text-sm whitespace-nowrap">Welcome To SeaTravo.com</p>
              </div>
              <h1 className="mx-auto text-5xl md:text-7xl font-bold text-white mb-4">
                Seamless travel.
              </h1>
              <h2 className="mx-auto text-5xl md:text-7xl font-bold text-white mb-8">
                Endless Adventures.
              </h2>
              <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Book ferries across the Caribbean—all operators, one platform. Instant confirmation.
              </p>
            </div>
          </div>
          <div className='items-center text-white justify-center mx-auto  gap-2 max-w-max transform -translate-y-25 bg-[#ffffff27] backdrop-blur-md rounded-tl-lg rounded-tr-lg  pt-3 pl-10 pr-10 md:flex hidden'>
            <img src={shipicon} alt="icon" />
            <h6 className='text-xl font-semibold font-Haniva'>Book your Ferry</h6>
          </div>
          <div className='mx-auto  h-60 rounded-2xl bg-[#ffffff27] backdrop-blur-md pt-5 pl-5 transform -translate-y-25 md:block hidden'>

            <div className="flex gap-4">
              <div className={`${tripType === 'oneWay' && "border-2 border-white rounded-lg"} p-4 flex items-center justify-center gap-2 cursor-pointer`}>
                <input type='radio' id="radio1" name="trip" value="oneWay" checked={tripType === 'oneWay'} onChange={handleChange} className='cursor-pointer w-6 h-6 px-3 py-2 rounded-full  outline-offset: -2px; outline-Border-brdr-inverse inline-flex justify-start items-start gap-4' />
                <label htmlFor="radio1" className='justify-start text-Text-txt-Inverse text-lg  font-bold font-Haniva text-white cursor-pointer '>One Way</label>
              </div>
              <div className={`${tripType === 'roundtrip' && "border-2 border-white rounded-lg"} p-4 flex items-center justify-center gap-2 cursor-pointer`}>
                <input type="radio" id="radio2" name="trip" value="roundtrip" checked={tripType === 'roundtrip'} onChange={handleChange} className=' w-6 h-6 px-3 py-2 bg-white rounded-full cursor-pointer outline-offset: -2px; outline-Border-brdr-inverse inline-flex justify-start items-start gap-4' />
                <label htmlFor="radio2" className='justify-start text-Text-txt-Inverse text-lg font-bold font-Haniva text-white cursor-pointer'>Round Trip</label>
              </div>
            </div>
            <div className='flex cursor-pointer'>
              <div>
                {bigCards.map((item, index) => (
                  <BigCard key={index} title={item.title} description={item.description} town={item.town} />
                ))}
              </div>

              <SmallCard title={'Departing On'} description={'Fri, 22 Oct'} isPassenger={false} icon={calendar} />
              <SmallCard title={'Passengers'} description={'3 Passengers'} isPassenger={true} icon={profile} />
            </div>
            <div className='mt-2 mx-auto max-w-max px-6 py-4 rounded-xl flex justify-center items-center gap-2 bg-stone-50 cursor-pointer'>
              <div className='w-5 h-5 relative'>
                <img src={search} alt="logo" />
              </div>
              <div className='text-center justify-center text-lg font-bold font-Haniva md:block hidden'>Search Available Ferries</div>
            </div>
          </div>

        </div>
        <div className='md:flex justify-center mt-5 hidden'>
          <div className='mx-auto max-w-max gap-11  px-6 py-5 inline-flex justify-between rounded-3xl bg-[#ECEDED]'>
            {bar.map((item, index) => (
              <Bar key={index} description={item.description} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Banner;
