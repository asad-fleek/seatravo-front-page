import React from 'react'
// import { ThemeDataContext } from '../Context/context';

const CustomCard = ({ img, title = "asad", price, duration }) => {


   

    return (
        <div className=" bg-white flex flex-col gap-4 items-center w-[315px] h-[419px] justify-center flex-wrap mb-6">
            <img className="w-[315px] h-[200px] rounded-tl-xl rounded-tr-xl" src={img} alt="Route 1" />
            <h2 className="font-primary font-semibold">{title}
            </h2>
            <p className="font-primary font-bold text-[18px] leading-2 text-[#055C9D]">Starting From ${price}</p>
            <p className="w-[140px] b-[1px]  pr-xs pb-xxs pl-xs  rounded-4xl w-full block text-center"> {duration} journey</p>
            <button className="w-[315px] h-[52px] gap-[10px] rounded-xl text-[#FF6B6B] pr-sm pl-sm px-6 py-3 text-lg  border hover:bg-gray-100">View Schedules</button>
        </div>
    )
}

export default CustomCard;