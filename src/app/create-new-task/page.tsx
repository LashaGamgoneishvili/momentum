"use client";
import Image from "next/image";
import {
  addNewTask,
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
import { useState, useEffect, ChangeEvent } from "react";
import { CreateEmployee } from "@/CreateEmployee";
import CalendarInput from "@/CalendarInput";

export default function CreateNewTask() {
  const [departments, setDepartments] = useState<Departments>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [dropDownElement, setDropDownElement] = useState(false);
  const [priorityDropdown, setpriorityDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [employeeDropdown, setEmployeeDropdown] = useState(false);

  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [employee, setEmployee] = useState("");

  const [avatar, setAvatar] = useState("");

  const [priorityId, setPriorityId] = useState<number>();
  const [priorityIcon, setPriorityIcon] = useState("");
  const [employeeAccordingDepartment, setEmployeeAccordingDepartment] =
    useState<Employee[]>([]);

  const [showCreateEmployee, setShowCreateEmployee] = useState(false);

  const [task, setTask] = useState<{ [key: string]: string | number | Date }>({
    name: "",
    description: "",
    due_date: new Date(),
    task_id: 1,
    employee_id: 1,
    priority_id: 1,
  });
  const [taskColors, setTaskColors] = useState<{
    name: "red" | "green" | "gray";
    description: "red" | "green" | "gray";
  }>({
    name: "gray",
    description: "gray",
  });

  const handleTaskChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "description" && value.length > 255) {
      return;
    }
    if (value.length >= 2 && value.length <= 255) {
      setTaskColors({ ...taskColors, description: "green" });
    } else if (value.length === 0) {
      setTaskColors({ ...taskColors, description: "gray" });
    } else if (value.length < 2 || value.length > 255) {
      setTaskColors({ ...taskColors, description: "red" });
    }
    if (name === "name") {
      if (value.length >= 2 && value.length <= 255) {
        setTaskColors({ ...taskColors, name: "green" });
      } else if (value.length === 0) {
        setTaskColors({ ...taskColors, name: "gray" });
      } else if (value.length < 2 || value.length > 255) {
        setTaskColors({ ...taskColors, name: "red" });
      }
    }
    setTask({ ...task, [name]: value });
  };

  function handlePrioritySelector(id: number, icon: string) {
    setPriorityId(id);
    setPriorityIcon(icon);
  }

  function handleCleanUp() {
    setTimeout(() => {
      setTask({
        name: "",
        description: "",
        task_id: 0,
        employee_id: 0,
        priority_id: 0,
      });
      setTaskColors({ name: "gray", description: "gray" });
      setpriorityDropdown(false);
      setDropDownElement(false);
      setStatusDropdown(false);
      setEmployeeDropdown(false);
      setPriority("");
      setStatus("");
      setDepartment("");
      setEmployee("");
      setAvatar("");
    }, 200);
  }

  function closeAllList() {
    if (
      priorityDropdown ||
      dropDownElement ||
      statusDropdown ||
      employeeDropdown
    ) {
      setpriorityDropdown(false);
      setDropDownElement(false);
      setStatusDropdown(false);
      setEmployeeDropdown(false);
    }
  }

  const clientAction = async () => {
    await addNewTask(task);
  };

  useEffect(() => {
    async function fetchDepartment() {
      const data: Departments = await getAllDepartment();
      setDepartments(data);
    }

    fetchDepartment();
  }, []);

  useEffect(() => {
    async function fetchDepartment() {
      const allDepartment: Departments = await getAllDepartment();
      const allPriorities: Priority[] = await getAllPriorities();
      const statuses: Status[] = await getAllStatuses();
      const employees: Employee[] = await getAllEmployees();

      setDepartments(allDepartment);
      setStatuses(statuses);
      setPriorities(allPriorities);
      setEmployees(employees);
    }

    fetchDepartment();
  }, []);

  useEffect(() => {
    setEmployeeAccordingDepartment(
      employees.filter(
        (employee) => employee.department.id === task.department_id
      )
    );
  }, [department, employees, task.department_id]);

  return (
    <div className="flex flex-col gap-[25px] w-full px-[118px] py-10 text-[#212529] ">
      <h1 className="text-[34px] w-full font-semibold ">
        შექმენი ახალი დავალება
      </h1>
      <form
        onClick={closeAllList}
        onSubmit={(e) => {
          e.preventDefault();
          clientAction();
        }}
        className="relative flex gap-[161px] px-[55px]  py-[65px] bg-[#FBF9FFA6] border border-[#DDD2FF] rounded-sm"
      >
        <div className="flex flex-col gap-[55px] w-[550px]">
          <div className="flex w-full flex-col gap-[3px] border-[#CED4DA]">
            <label htmlFor="name" className="text-[14px] text-[#343A40]">
              სათაური*
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={task.name as string}
              required
              onChange={handleTaskChange}
              min={2}
              max={255}
              className={
                "p-[10px] rounded-[6px] text-[#0D0F10] border-[#DEE2E6] outline-0 border-[1px]"
              }
            />
            <div className={`flex gap-2`}>
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px] ${
                  taskColors.name === "green"
                    ? `text-green-50`
                    : taskColors.name === "red"
                    ? "text-red-50"
                    : "text-gray-50"
                }`}
              >
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div className="flex gap-2">
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px]   text-[#6C757D] ${
                  taskColors.name === "green"
                    ? `text-green-50`
                    : taskColors.name === "red"
                    ? "text-red-50"
                    : "text-gray-50"
                }`}
              >
                მაქსიმუმ 255 სიმბოლო
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[3px] border-[#CED4DA]">
            <label htmlFor="description" className="text-[14px] text-[#343A40]">
              აღწერა*
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={task.description as string}
              onChange={handleTaskChange}
              className=" p-[10px] text-[#0D0F10] !w-[550px] !h-[130px] border-[#DEE2E6] rounded-[6px] outline-0 border-[1px] "
            />
            <div className={`flex gap-2`}>
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px] ${
                  taskColors.description === "green"
                    ? `text-green-50`
                    : taskColors.description === "red"
                    ? "text-red-50"
                    : "text-gray-50"
                }`}
              >
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div className="flex gap-2">
              <Image src="./check.svg" width={16} height={16} alt="Checker" />
              <p
                className={`text-[10px] ${
                  taskColors.description === "green"
                    ? `text-green-50`
                    : taskColors.description === "red"
                    ? "text-red-50"
                    : "text-gray-50"
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
                  setDropDownElement(false);
                  setStatusDropdown(false);
                  setEmployeeDropdown(false);
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
                          className=" flex gap-2 cursor-pointer hover:bg-[#eee] p-[15px] duration-75 transform transition-all ease-in-out"
                          onClick={() => {
                            setTask({ ...task, priority_id: item.id });
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
                className="relative flex h-[42px]  items-center border-[#CED4DA] rounded-[6px] 
              outline-0 border-[1px] cursor-pointer"
                onClick={() => {
                  setStatusDropdown((prev) => !prev);
                  setpriorityDropdown(false);
                  setDropDownElement(false);
                  setEmployeeDropdown(false);
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
                          className=" flex gap-2 cursor-pointer hover:bg-[#eee] p-[15px] duration-75 transform transition-all ease-in-out"
                          onClick={() => {
                            setTask({ ...task, status_id: item.id });
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
                    setDropDownElement((prev) => !prev);
                    setStatusDropdown(false);
                    setpriorityDropdown(false);
                    setEmployeeDropdown(false);
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
              {dropDownElement && (
                <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[450px] h-56 z-20 rounded-[10px] overflow-hidden top-20">
                  <div className="relative flex flex-col h-full w-full  overflow-y-scroll">
                    {departments.map((item: Department) => {
                      return (
                        <div
                          key={item.id}
                          className=" flex gap-2 cursor-pointer hover:bg-[#eee] p-[15px] duration-75 transform transition-all ease-in-out"
                          onClick={() => {
                            setTask({ ...task, department_id: item.id });
                            setDropDownElement(false);
                          }}
                        >
                          <p
                            className="w-full"
                            onClick={() => {
                              setDropDownElement((prev) => !prev);
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
          <div className="relative flex items-center  z-10  text-[#212529] ">
            <div className="flex flex-col gap-[6px]">
              <p className="">პასუხისმგებელი თანამშრომელი*</p>
              <div
                className="relative flex h-[42px] w-[384px]  items-center  border-[#CED4DA] rounded-[6px] 
              outline-0 border-[1px] cursor-pointer"
                onClick={() => {
                  setEmployeeDropdown((prev) => !prev);
                  setDropDownElement(false);
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
                  <div
                    onClick={() => {
                      setShowCreateEmployee(true);
                      handleCleanUp();
                    }}
                    className="flex gap-2 cursor-pointer p-[14px] item-center w-full text-[#8338EC]"
                  >
                    <Image
                      src="add.svg"
                      alt="addButton"
                      width={16}
                      height={16}
                    />
                    <div className="hover:underline">
                      <p>დაამატე თანამშრომელი</p>
                    </div>
                  </div>
                  {employeeAccordingDepartment.map((employee) => {
                    return (
                      <div
                        key={employee.id}
                        className=" flex gap-2 cursor-pointer hover:bg-[#eee] p-[14px] duration-75 transform transition-all ease-in-out"
                        onClick={() => {
                          setTask({ ...task, employee_id: employee.id });
                          setEmployeeDropdown(false);
                          setEmployee(`${employee.name} ${employee.surname} `);
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
          <CalendarInput task={task} setTask={setTask} />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            clientAction();
            handleCleanUp();
          }}
          className="absolute bottom-[62px] active:bg-[#B588F4] transition duration-200 right-[368px] bg-[#8338EC] text-white px-4 py-2 rounded cursor-pointer"
        >
          დავალების შექმნა
        </button>
      </form>
      {showCreateEmployee && (
        <div className="z-300">
          <CreateEmployee setShowCreateEmployee={setShowCreateEmployee} />
        </div>
      )}
    </div>
  );
}
