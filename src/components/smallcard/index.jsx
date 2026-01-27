import { calendar } from "../../utils/images";

const SmallCard = ({ title="title", description="description", icon=calendar , isPassenger=false}) => {
    return (
        <>
            <div className="h-32 w-56 text-white pl-6 mt-3 pr-4 py-3 bg-white/10 outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-1">
                <div className="text-base font-medium font-Haniva">{title}</div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                    <div className="inline-flex justify-between items-center gap-12">
                        <div className="justify-start text-lg font-semibold font-Haniva">{description}</div>
                        <div className="w-6 h-6 relative">
                            <img src={icon} alt="icon" />
                        </div>
                    </div>
                    {!isPassenger ? <> <div className="gap-12 flex">
                        <div className="justify-start  text-lg font-normal font-Haniva">Next</div>
                        <div className="justify-start  text-lg font-normal font-Haniva">Prev</div>
                    </div></> : <><div className="gap-12 flex">
                        <div className="justify-start text-lg font-normal font-Haniva">2 Adults , 1 Children</div>
                    </div></>}


                </div>
            </div>
        </>
    )
}
export default SmallCard;