"use client";

import { D_E_P, FilterType, Priority as PriorityType } from "../../../typings";
import DropdownWrapper from "./DropdownWrapper";
function Priorities({
  handleFilterChange,
  handleFilterClick,
  priorities,
  filters,
}: {
  handleFilterChange: (section: D_E_P, value: FilterType) => void;
  handleFilterClick: () => void;
  priorities: PriorityType[];
  filters: FilterType[];
}) {
  return (
    <DropdownWrapper handleFilterClick={handleFilterClick}>
      {priorities.map((item: PriorityType) => {
        return (
          <div key={item.id} className="flex gap-2 ">
            <input
              className="rounded-[6px] cursor-pointer border-[1.5px] p-[10px]"
              type="checkbox"
              title="department"
              checked={filters.some((filter) => filter.id === item.id)}
              id={`${item.id}-checked`}
              onChange={() =>
                handleFilterChange("priority", { id: item.id, name: item.name })
              }
            />
            <label htmlFor={`${item.id}-checked`} className="cursor-pointer">
              {item.name}
            </label>
          </div>
        );
      })}
    </DropdownWrapper>
  );
}

export default Priorities;
