import React from 'react'

const Cards = ({ title, description }) => {

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center mb-6 gap-4 ">

            <div className={`bg-[url('/images/plans/Frame.png')] bg-cover flex flex-col items-center p-10 justify-between text-center w-112.5 h-149`}>
                <div>
                    <h2 className="font-primary font-semibold text-[34px] text-stone-50">
                        {title}
                    </h2>
                    <p className="font-primary font-semibold text-[24px] text-stone-50">
                        {description}
                    </p>
                </div>
                <div className='px-4 py-2 rounded-3xl inline-flex justify-center items-center gap-2.5 border-2 border-blue-600 hover:bg-[#4DA9E1] bg-blue-50 transition-colors'>
                    <button className="text-[#055C9D] text-base font-medium font-Haniva">Coming Soon</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;