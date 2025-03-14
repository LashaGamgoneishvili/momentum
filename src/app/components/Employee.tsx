"use client";
import Image from "next/image";
import { D_E_P, Employee as EmployeeType, FilterType } from "../../../typings";
import DropdownWrapper from "./DropdownWrapper";

function Employee({
  handleFilterChange,
  handleFilterClick,
  employees,
  filters,
}: {
  handleFilterChange: (section: D_E_P, value: FilterType) => void;
  handleFilterClick: () => void;
  employees: EmployeeType[];
  filters: FilterType[];
}) {
  return (
    <DropdownWrapper handleFilterClick={handleFilterClick}>
      {employees.map((item: EmployeeType) => {
        return (
          <div key={item.id} className="flex gap-2 ">
            <input
              className="rounded-[6px] cursor-pointer border-[1.5px] p-[10px]"
              type="checkbox"
              title="department"
              checked={filters.some((filter) => filter.id === item.id)}
              id={`${item.id}-checked`}
              onChange={() =>
                handleFilterChange("employee", { id: item.id, name: item.name })
              }
            />

            <label
              htmlFor={`${item.id}-checked`}
              className="flex gap-2 cursor-pointer"
            >
              <Image
                src={"/Ellipse 3892@2x.png"}
                width={28}
                height={28}
                alt="user "
                className="object-contain"
              />
              {item.name} {item.surname}
            </label>
          </div>
        );
      })}
    </DropdownWrapper>
  );
}

export default Employee;
