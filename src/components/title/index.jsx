import React from 'react'


const CustomTitle = ({ title }) => {
    return (
        <h1 className="max-w-1/2 mx-auto text-center mb-5 font-primary text-[68px] font-bold text-blue-600 leading-[110%] tracking-[0%] items-center flex justify-center">
            {title}
        </h1>
    )
}

export default CustomTitle;