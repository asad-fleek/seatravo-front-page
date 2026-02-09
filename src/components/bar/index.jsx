import { tick } from "../../utils/images";

const Bar = ({ description }) => {
  return (
    <div className="w-full min-h-5 flex items-center gap-2">
      <img src={tick} alt="Tick icon" className="w-4 h-4" />
      <h5 className="font-normal font-Haniva whitespace-nowrap">
        {description}
      </h5>
    </div>
  );
};

export default Bar;
