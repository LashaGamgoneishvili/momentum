"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Department as DepartmentType,
  Priority as PriorityType,
  Employee as EmployeeType,
  D_E_P,
  FilterType,
} from "../../../typings";
import Department from "./Department";
import Priorities from "./Priorities";
import Employee from "./Employee";
import { useFilterContext } from "../../context/filter_context";
import DropdownHeader from "./DropdownHeader";
import SelectedFilters from "./SelectedFilters";

export default function DropdownMenu({
  priorities,
  dep,
  employees,
}: {
  priorities: PriorityType[];
  dep: DepartmentType[];
  employees: EmployeeType[];
}) {
  const context = useFilterContext();
  const filters = useMemo(
    () =>
      context?.filters || {
        department: [],
        priority: [],
        employee: [],
      },
    [context?.filters]
  );

  const updateFilters = context?.updateFilters || (() => {});
  const filterTasks = context?.filterTasks || (() => {});

  const [allFilters, setAllFilters] = useState([
    ...filters.department,
    ...filters.priority,
    ...filters.employee,
  ]);

  const [shownFilters, setShownFilters] = useState([...allFilters]);

  const [dropdownElement, setDropdownElement] = useState<D_E_P | "none">(
    "none"
  );
  const [showSelectedFilters, setShowSelectedFilters] = useState(false);

  useEffect(() => {
    setAllFilters([
      ...filters.department,
      ...filters.priority,
      ...filters.employee,
    ]);
  }, [filters]);

  function handleClick(section: D_E_P) {
    if (section === dropdownElement) {
      setDropdownElement("none");
      return;
    }
    setDropdownElement(section);
  }

  function handleFilterChange(name: D_E_P, value: FilterType) {
    updateFilters(name, value);
  }

  function handleFilterClick() {
    filterTasks();
    setShownFilters([...allFilters]);
    setShowSelectedFilters(true);
    setDropdownElement("none");
  }

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative flex justify-between text-[16px] w-[688px] border-2 border-[##DEE2E6] rounded-[10px] z-10"
      >
        <DropdownHeader
          section_name="department"
          header="დეპარტამენტი"
          handleClick={handleClick}
        >
          {dropdownElement === "department" && (
            <Department
              handleFilterChange={handleFilterChange}
              handleFilterClick={handleFilterClick}
              dep={dep}
              filters={filters.department}
            />
          )}
        </DropdownHeader>
        <DropdownHeader
          section_name="priority"
          header="პრიორიტეტი"
          handleClick={handleClick}
        >
          {dropdownElement === "priority" && (
            <Priorities
              handleFilterChange={handleFilterChange}
              handleFilterClick={handleFilterClick}
              priorities={priorities}
              filters={filters.priority}
            />
          )}
        </DropdownHeader>
        <DropdownHeader
          section_name="employee"
          header="თანამშრომელი"
          handleClick={handleClick}
        >
          {dropdownElement === "employee" && (
            <Employee
              handleFilterChange={handleFilterChange}
              handleFilterClick={handleFilterClick}
              employees={employees}
              filters={filters.employee}
            />
          )}
        </DropdownHeader>
      </form>
      <div className="h-[78px] relative z-1 w-full ">
        {showSelectedFilters && allFilters.length !== 0 && (
          <SelectedFilters allFilters={shownFilters} />
        )}
      </div>
    </>
  );
}
