const CustomCard = ({ img, title = "asad", price, duration }) => {
    return (
        <div className=" bg-white flex flex-col gap-4 items-center w-78.75 h-104.75 justify-center flex-wrap mb-6">
            <img className="w-78.75 h-50 rounded-tl-xl rounded-tr-xl" src={img} alt="Route 1" />
            <h2 className="font-primary font-semibold">{title}
            </h2>
            <p className="font-primary font-bold text-[18px] leading-2 text-[#055C9D]">Starting From ${price}</p>
            <p className="w-35 b-[1px]  pr-xs pb-xxs pl-xs  rounded-4xl block text-center"> {duration} journey</p>
            <button className="w-78.75 h-13 gap-2.5 rounded-xl text-[#FF6B6B] pr-sm pl-sm px-6 py-3 text-lg  border hover:bg-gray-100">View Schedules</button>
        </div>
    )
}

export default CustomCard;