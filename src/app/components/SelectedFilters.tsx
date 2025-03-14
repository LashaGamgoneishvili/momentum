import React from "react";
import { FilterType } from "../../../typings";

const SelectedFilters = ({ allFilters }: { allFilters: FilterType[] }) => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 flex gap-[12px] items-center overflow-x-auto overflow-y-hidden w-full">
      {allFilters.map((filter, index) => {
        return (
          <div
            key={`${index}_${filter.id}`}
            className="flex gap-2 rounded-[43px] px-[10px] py-[6px] text-[#343A40] flex-shrink-0  border-[1px] border-[#CED4DA]"
          >
            <p className="text-[14px]">{filter.name} </p>
            <span className="text-[14px]">x</span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedFilters;
