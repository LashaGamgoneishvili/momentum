"use client";
import {
  D_E_P,
  Department as DepartmentTypes,
  FilterType,
} from "../../../typings";
import DropdownWrapper from "./DropdownWrapper";

function Department({
  handleFilterChange,
  handleFilterClick,
  dep,
  filters,
}: {
  handleFilterChange: (section: D_E_P, value: FilterType) => void;
  handleFilterClick: () => void;
  dep: DepartmentTypes[];
  filters: FilterType[];
}) {
  console.log("filters", filters);
  console.log("dep", dep);
  return (
    <DropdownWrapper handleFilterClick={handleFilterClick}>
      {dep.map((item: DepartmentTypes) => {
        return (
          <div key={item.id} className="flex gap-2 ">
            <input
              className="rounded-[6px] cursor-pointer border-[1.5px] p-[10px]"
              type="checkbox"
              title="department"
              checked={filters.some((filter) => filter.id === item.id)}
              id={`department-${item.id}`}
              onChange={() =>
                handleFilterChange("department", {
                  id: item.id,
                  name: item.name,
                  key: "department",
                })
              }
            />

            <label htmlFor={`department-${item.id}`} className="cursor-pointer">
              {item.name}
            </label>
          </div>
        );
      })}
    </DropdownWrapper>
  );
}

export default Department;
