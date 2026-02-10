import React, { useState } from 'react';
import { calendar, profile, search, shipicon } from '../../utils/images';
import BigCard from '../big-card';
import { bigCards } from '../../utils/bigcard';
import SmallCard from '../small-card';
import { bar } from '../../utils/bar';
import Bar from '../bar';

const Banner = () => {
  const [tripType, setTripType] = useState('oneWay');

  const handleChange = (event) => {
    setTripType(event.target.value);
  };

  return (
    <section className="container mx-auto pt-4">
      <div className="hero-banner relative z-10 rounded-3xl flex flex-col">
        <div className="pt-20 pb-32 text-center px-4">
          <div className="inline-block">
            <div className="border-2 border-dashed border-white max-w-max mx-auto rounded-3xl px-6 py-2">
              <p className="text-white text-sm whitespace-nowrap">
                Welcome To SeaTravo.com
              </p>
            </div>

            <h1 className="mx-auto text-5xl md:text-7xl font-bold text-white mb-4">
              Seamless travel.
            </h1>
            <h2 className="mx-auto text-5xl md:text-7xl font-bold text-white mb-8">
              Endless Adventures.
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Book ferries across the Caribbean—all operators, one platform.
              Instant confirmation.
            </p>
          </div>
        </div>

        <div className="items-center text-white justify-center mx-auto gap-2 max-w-max -translate-y-24 bg-[#ffffff27] backdrop-blur-md rounded-tl-lg rounded-tr-lg pt-3 px-10 hidden lg:flex">
          <img src={shipicon} alt="Ship icon" />
          <h6 className="text-xl font-semibold font-Haniva">
            Book your Ferry
          </h6>
        </div>

        <div className="mx-auto h-60 rounded-2xl bg-[#ffffff27] backdrop-blur-md pt-5 pl-5 -translate-y-24 hidden lg:block">
          <div className="flex gap-4">
            <div
              className={`p-4 flex items-center gap-2 cursor-pointer ${tripType === 'oneWay'
                  ? 'border-2 border-white rounded-lg'
                  : ''
                }`}
            >
              <input
                type="radio"
                id="radio1"
                name="trip"
                value="oneWay"
                checked={tripType === 'oneWay'}
                onChange={handleChange}
                className="cursor-pointer w-6 h-6 -outline-offset-2"
              />
              <label htmlFor="radio1" className="text-white text-lg font-bold cursor-pointer">
                One Way
              </label>
            </div>

            <div
              className={`p-4 flex items-center gap-2 cursor-pointer ${tripType === 'roundtrip'
                  ? 'border-2 border-white rounded-lg'
                  : ''
                }`}
            >
              <input
                type="radio"
                id="radio2"
                name="trip"
                value="roundtrip"
                checked={tripType === 'roundtrip'}
                onChange={handleChange}
                className="cursor-pointer w-6 h-6 -outline-offset-2"
              />
              <label htmlFor="radio2" className="text-white text-lg font-bold cursor-pointer">
                Round Trip
              </label>
            </div>
          </div>

          <div className="flex cursor-pointer">
            <div>
              {bigCards.map((item, index) => (
                <BigCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  town={item.town}
                />
              ))}
            </div>

            <SmallCard
              title="Departing On"
              description="Fri, 22 Oct"
              isPassenger={false}
              icon={calendar}
            />
            <SmallCard
              title="Passengers"
              description="3 Passengers"
              isPassenger
              icon={profile}
            />
          </div>

          <div className="mt-2 mx-auto max-w-max px-6 py-4 rounded-xl flex items-center gap-2 bg-stone-50 cursor-pointer">
            <img src={search} alt="Search" className="w-5 h-5" />
            <div className="text-lg font-bold font-Haniva md:block hidden">
              Search Available Ferries
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center mt-5 hidden">
        <div className="mx-auto max-w-max gap-11 px-6 py-5 inline-flex rounded-3xl bg-[#ECEDED]">
          {bar.map((item, index) => (
            <Bar key={index} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
