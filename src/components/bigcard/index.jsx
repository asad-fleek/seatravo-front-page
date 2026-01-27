import React from "react";

const BigCard = (props) => {
    return (
        <div className="h-32  mt-3 pl-6 pr-20 py-3 bg-white/10  text-white outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-1 ">
            <div className="justify-start text-Text-txt-Inverse text-base font-medium font-Haniva ">{props.title}</div>
            <div className="flex-col flex justify-start items-center gap-0.5 ">
                <div className="justify-start text-Text-txt-Inverse text-2xl font-semibold font-Haniva">{props.description}</div>
                <div className="justify-start text-Text-txt-Inverse text-lg font-bold font-Haniva">{props.town}</div>

            </div>
        </div>
    )
}
export default BigCard;