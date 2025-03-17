"use client";
import Image from "next/image";
import {
  getAllDepartment,
  getAllEmployees,
  getAllPriorities,
  getAllStatuses,
} from "../../../actions";
import {
  Department,
  Departments,
  Employee,
  Priority,
  Status,
} from "../../../typings";
import { useState, useEffect } from "react";

export default function CreateNewTask() {
  const [departments, setDepartments] = useState<Departments>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [dropdownElement, setDropdownElement] = useState(false);
  // const [departamentDropdown, setDepartamentDropdown] = useState(false);
  const [priorityDropdown, setpriorityDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [employeeDropdown, setEmployeeDropdown] = useState(false);

  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [employee, setEmployee] = useState("");

  const [avatar, setAvatar] = useState("");

  const [priorityId, setPriorityId] = useState<number>(0);
  const [priorityIcon, setPriorityIcon] = useState("");

  const [inputChecking, setInputChecking] = useState(false);
  const [title, setTitle] = useState("");
  // const [comment, setComment] = useState("");

  console.log("title", title);
  console.log("avatar", avatar);

  useEffect(() => {
    async function fetchDepartment() {
      const allDepartment: Departments = await getAllDepartment();
      const allPriorities: Priority[] = await getAllPriorities();
      const statuses: Status[] = await getAllStatuses();
      const employees: Employee[] = await getAllEmployees();

      setDepartments(allDepartment);
      console.log("priorities", allPriorities);
      console.log("allDepartment", allDepartment);
      setStatuses(statuses);
      setPriorities(allPriorities);
      setEmployees(employees);
    }

    fetchDepartment();
  }, []);

  console.log("employees", employees);
  function handleTitle(value: string) {
    setTitle(value);
    if (value.length > 1 && value.length < 255) {
      setInputChecking(true);
    } else {
      setInputChecking(false);
    }
  }

  function handlePrioritySelector(id: number, icon: string) {
    setPriorityId(id);
    setPriorityIcon(icon);
  }

  return (
    <div className="flex flex-col gap-[25px]  px-[118px] py-10 bg-white w-full text-[#212529] ">
      <h1 className="text-[34px] w-full font-semibold ">
        შექმენი ახალი დავალება
      </h1>
      <div className="flex gap-[161px] px-[55px]  py-[65px] bg-[#FBF9FFA6] border border-[#DDD2FF] rounded-sm">
        <div className="flex flex-col gap-[55px] w-[550px]">
          <div className="flex w-full flex-col gap-[3px] border-[#CED4DA]">
            <label htmlFor="name" className="text-[14px] text-[#343A40]">
              სათაური*
            </label>
            <input
              type="text"
              // value={title}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleTitle(e.target.value)
              }
              min={2}
              max={255}
              className="p-[10px] rounded-[6px] text-[#0D0F10] outline-0 border-[1px]"
              id="name"
            />
            <div className={`flex gap-2`}>
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px]   text-[#6C757D] ${
                  inputChecking && "text-[#08A508]"
                }`}
              >
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div className="flex gap-2">
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px]   text-[#6C757D] ${
                  inputChecking && "text-[#08A508]"
                }`}
              >
                მაქსიმუმ 255 სიმბოლო
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[3px] border-[#CED4DA]">
            <label htmlFor="name" className="text-[14px] text-[#343A40]">
              აღწერა*
            </label>
            <textarea
              // type="text"
              required
              // min={2}
              // max={255}
              className=" p-[10px] text-[#0D0F10] w-[550px] h-[130px] rounded-[6px] outline-0 border-[1px]"
              id="name"
            />
            <div className={`flex gap-2`}>
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px]   text-[#6C757D] ${
                  inputChecking && "text-[#08A508]"
                }`}
              >
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div className="flex gap-2">
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px]   text-[#6C757D] ${
                  inputChecking && "text-[#08A508]"
                }`}
              >
                მაქსიმუმ 255 სიმბოლო
              </p>
            </div>
          </div>

          <div className="flex gap-8 justify-between text-[#0D0F10] ">
            <div className="relative flex flex-col w-full gap-[8px] text-[#0D0F10]">
              <p className="text-[14px]">პრიორიტეტი *</p>
              <div
                className="relative flex h-[42px] w-full items-center  border-[#CED4DA] rounded-[6px] 
              outline-0 border-[1px] cursor-pointer"
                onClick={() => {
                  setpriorityDropdown((prev) => !prev);
                  setDropdownElement(false);
                  setStatusDropdown(false);
                }}
              >
                {priorityIcon && priorityId && (
                  <div className="flex gap-2 p-[14px] ">
                    <Image
                      src={priorityIcon}
                      alt="priorityIcon"
                      width={16}
                      height={16}
                    />
                    <p
                      className={`text-[14px]  ${
                        priorityId === 2 && "text-[#FFBE0B]"
                      } ${priorityId === 1 && "text-[#08A508]"}
                            ${priorityId === 3 && "text-[#FA4D4D]"}`}
                    >
                      {priority}
                    </p>
                  </div>
                )}
                <Image
                  src="arrow-down.svg"
                  width={14}
                  height={8}
                  alt="arrow"
                  className="absolute right-2 cursor-pointer"
                />
              </div>

              {priorityDropdown && (
                <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[450px] h-56 rounded-[10px] overflow-hidden top-20">
                  <div className="relative flex flex-col h-full      w-full  overflow-y-scroll">
                    {priorities.map((item: Priority) => {
                      return (
                        <div
                          key={item.id}
                          className=" flex gap-2 cursor-pointer hover:bg-[#CED4DA] p-[15px] duration-75 transform transition-all ease-in-out"
                          onClick={() => {
                            setpriorityDropdown((prev) => !prev);
                            setPriority(item.name);
                            handlePrioritySelector(item.id, item.icon);
                          }}
                        >
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={16}
                            height={16}
                          />
                          <p
                            className={`w-full  ${
                              item.id === 2 && "text-[#FFBE0B]"
                            } ${item.id === 1 && "text-[#08A508]"}
                            ${item.id === 3 && "text-[#FA4D4D]"}`}
                          >
                            {item.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="relative flex flex-col w-full gap-[8px] text-[#0D0F10]">
              <p className="text-[14px]">სტატუსი*</p>
              <div
                className="relative flex h-[42px]  items-center  border-[#CED4DA] rounded-[6px] 
              outline-0 border-[1px] cursor-pointer"
                onClick={() => {
                  setStatusDropdown((prev) => !prev);
                  setpriorityDropdown(false);
                  setDropdownElement(false);
                }}
              >
                <p className="text-[14px] p-[10px]">{status}</p>

                <Image
                  src="arrow-down.svg"
                  width={14}
                  height={8}
                  alt="arrow"
                  className={`absolute right-2 cursor-pointer transition duration-75  ${
                    true && "rotate-x-180"
                  }`}
                />
              </div>

              {statusDropdown && (
                <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[450px] h-56 rounded-[10px] overflow-hidden top-20">
                  <div className="relative flex flex-col h-full      w-full  overflow-y-scroll">
                    {statuses.map((item: Status) => {
                      return (
                        <div
                          key={item.id}
                          className=" flex gap-2 cursor-pointer hover:bg-[#CED4DA] p-[15px] duration-75 transform transition-all ease-in-out"
                          onClick={() => {
                            setStatusDropdown((prev) => !prev);
                            setStatus(item.name);
                          }}
                        >
                          <p className="w-full">{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[61px]">
          <div className="flex flex-col mb-8">
            <div className="relative flex gap-2 items-center ">
              <div className="flex flex-col gap-[8px] ">
                <p className="text-[14px]">დეპარტამენტი*</p>
                <div
                  className="relative flex h-[42px] w-[384px]  items-center  border-[#CED4DA] rounded-[6px] 
              outline-0 border-[1px] cursor-pointer"
                  onClick={() => {
                    setDropdownElement((prev) => !prev);
                    setStatusDropdown(false);
                    setpriorityDropdown(false);
                  }}
                >
                  <p className="text-[14px] p-[10px]">{department}</p>
                  <Image
                    src="arrow-down.svg"
                    width={14}
                    height={8}
                    alt="arrow"
                    className="absolute right-2 cursor-pointer"
                  />
                </div>
              </div>
              {dropdownElement && (
                <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[450px] h-56 z-20 rounded-[10px] overflow-hidden top-20">
                  <div className="relative flex flex-col h-full w-full  overflow-y-scroll">
                    {departments.map((item: Department) => {
                      return (
                        <div
                          key={item.id}
                          className=" flex gap-2 cursor-pointer hover:bg-[#CED4DA] p-[15px] duration-75 transform transition-all ease-in-out"
                          onChange={() => {
                            setDropdownElement(true);
                          }}
                        >
                          <p
                            className="w-full"
                            onClick={() => {
                              setDropdownElement((prev) => !prev);
                              setDepartment(item.name);
                            }}
                          >
                            {item.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative flex items-center   text-[#212529] ">
            <div className="flex flex-col gap-[6px]">
              <p className="">პასუხისმგებელი თანამშრომელი*</p>
              <div
                className="relative flex h-[42px] w-[384px]  items-center  border-[#CED4DA] rounded-[6px] 
              outline-0 border-[1px] cursor-pointer"
                onClick={() => {
                  setEmployeeDropdown((prev) => !prev);
                  setDropdownElement(false);
                  setStatusDropdown(false);
                  setpriorityDropdown(false);
                }}
              >
                <div className="flex items-center gap-2 p-[10px]  ">
                  {avatar.length > 1 && (
                    <Image
                      src={avatar}
                      alt="avatar"
                      width={16}
                      height={16}
                      className="rounded-full"
                    />
                  )}
                  <p className="text-[14px] ">{employee}</p>
                </div>

                <Image
                  src="arrow-down.svg"
                  width={14}
                  height={8}
                  alt="arrow"
                  className="absolute right-2 cursor-pointer"
                />
              </div>
            </div>

            {employeeDropdown && (
              <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-full h-[274px] rounded-[10px] overflow-hidden top-20">
                <div className="relative flex flex-col h-full w-full overflow-y-scroll">
                  <div className="flex gap-2 cursor-pointer p-[14px] item-center w-full text-[#8338EC]">
                    <Image
                      src="add.svg"
                      alt="addButton"
                      width={16}
                      height={16}
                    />
                    <p className="hover:underline">დაამატე თანამშრომელი</p>
                  </div>
                  {employees.map((employee) => {
                    return (
                      <div
                        key={employee.id}
                        className=" flex gap-2 cursor-pointer hover:bg-[#CED4DA] p-[14px] duration-75 transform transition-all ease-in-out"
                        onChange={() => {
                          setEmployeeDropdown(true);
                        }}
                      >
                        <div
                          className="flex gap-2 w-full"
                          onClick={() => {
                            setEmployeeDropdown((prev) => !prev);
                            setEmployee(employee.name);
                            setAvatar(employee.avatar);
                          }}
                        >
                          <Image
                            src={employee.avatar}
                            width={28}
                            height={28}
                            alt="user "
                            className="object-contain rounded-full"
                          />
                          {employee.name} {employee.surname}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
