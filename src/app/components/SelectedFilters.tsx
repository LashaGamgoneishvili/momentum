import React from "react";
import { FilterType } from "../../../typings";
import Image from "next/image";

const SelectedFilters = ({
  allFilters,
  handleFilterRemove,
  handleAllFilterRemove,
}: {
  allFilters: FilterType[];
  handleFilterRemove: (value: FilterType) => void;
  handleAllFilterRemove: () => void;
}) => {
  return (
    <div className="absolute z-1 top-1/2 transform -translate-y-1/2 flex gap-[12px] items-center overflow-x-auto overflow-y-hidden w-full">
      {allFilters.map((filter, index) => {
        return (
          <div
            key={`${index}_${filter.id}`}
            className="flex gap-2 rounded-[43px] px-[10px] py-[6px] text-[#343A40] flex-shrink-0  border-[1px] border-[#CED4DA]"
          >
            <p className="text-[14px]">{filter.name} </p>
            <Image
              onClick={() => handleFilterRemove(filter)}
              className="cursor-pointer"
              src="x (1).svg"
              alt="icon"
              width={14}
              height={14}
            />
          </div>
        );
      })}
      {allFilters.length !== 0 && (
        <div className="flex gap-2">
          <p
            className="text-[14px] text-[#343A40] cursor-pointer font-normal"
            onClick={handleAllFilterRemove}
          >
            გასუფთავება
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedFilters;
