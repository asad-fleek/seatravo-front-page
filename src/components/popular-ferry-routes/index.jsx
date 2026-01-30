import React from 'react'
import { logo } from '../../utils/images';
import CustomTitle from '../routes';
import CustomCard from '../custom-small-card';
import { routes } from '../../utils/routes';




function FerryRoutes() {
    return (
        <>
            <section className='mt-8'>
                <div className='container mx-auto'>
                    <div className='grid grid-col-12'>
                        <div className='col-span-12 md:col-span-8 mx-auto '>
                            <img className="w-[29.35px] h-[30px] mx-auto" src={logo} alt="agency logo" />
                            <CustomTitle title="Popular Ferry Routes" />
                            <p className="font-semibold text-lg md:text-2xl text-center font-Haniva">Compare
                                schedules and prices across multiple ferry operators. All routes include <br /> real-time availabilty and
                                instant booking confirmation.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 '>


                        {
                            routes.map((item, index) => {
                                return (
                                    <div key={index} className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 gap-6 mx-auto pt-6'>
                                        <CustomCard   title={item.title} price={item.price} duration={item.duration} img={item.img} />
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
        </>
    )
}
export default FerryRoutes;