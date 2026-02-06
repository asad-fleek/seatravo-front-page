import React from "react"
import { tick } from "../../utils/images";

const Bar = ({ description }) => {
  return (

    <div className='w-full h-5 gap-1 flex items-center '>
      <img src={tick} alt="logo" />
      <h5 className='font-normal font-Haniva whitespace-nowrap'>{description}</h5>
    </div>
  )
}
export default Bar; 