import { ReactNode } from "react";

function DropdownWrapper({
  children,
  handleFilterClick,
}: {
  children: ReactNode;
  handleFilterClick: () => void;
}) {
  return (
    <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[688px] h-[274px] rounded-[10px] overflow-hidden top-14">
      <div className="relative flex flex-col h-full gap-6 pt-10 px-[30px] pb-5 overflow-y-scroll">
        {children}
      </div>
      <button
        className="absolute w-[155px] cursor-pointer text-[16px] h-[35px] bottom-2 right-6 text-white px-5  bg-[#8338EC] rounded-[20px]"
        onClick={() => handleFilterClick()}
      >
        არჩევა
      </button>
    </div>
  );
}

export default DropdownWrapper;
