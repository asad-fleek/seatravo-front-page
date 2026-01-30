import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from 'react';


const CustomTitle = ({ title }) => {
   
    
    return (
        <h1 className="mx-auto text-center mb-5 font-primary text-34 md:text-[68px] font-bold text-[#055C9D] leading-[110%] tracking-[0%] items-center flex justify-center">
            {title}
        </h1>
    )
}

export default CustomTitle;