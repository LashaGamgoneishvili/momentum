"use client";
import arrow from "../../../public/Shape.svg";
import Image from "next/image";
import { useState } from "react";
import user from "../../../public/Ellipse 3892@2x.png";
import {
  PrioritiesProps,
  Departments,
  Department,
  Priority,
} from "../../../typings";

const staffArray: string[] = [
  "ელაია ბაგრატიონი",
  "გიორგი კეკელიძე",
  "მარიამ მაჭავარიანი",
  "ნიკა მაღლაკელიძე",
];

// const initialItems = ["მაღაცლი, დიზაინი, ემილია მორგანი"];

export default function DropdownMenu({
  prio,
  dep,
}: {
  prio: PrioritiesProps;
  dep: Departments;
}) {
  const [department, setDepartment] = useState(false);
  const [priority, setPriority] = useState(false);
  const [staff, setStaff] = useState(false);

  // const [items, setItems] = useState(initialItems);

  // function handleDeleteItem(id) {
  //   console.log(id);
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }

  function handleclick(section: string) {
    if (section === "department") {
      setDepartment((condition) => !condition);
      setPriority(false);
      setStaff(false);
    }
    if (section === "priority") {
      setPriority((condition) => !condition);
      setDepartment(false);
      setStaff(false);
    }
    if (section === "staff") {
      setStaff((condition) => !condition);
      setPriority(false);
      setDepartment(false);
    }
  }
  return (
    <form className="relative flex justify-between text-[16px] mb-32 w-[688px] border-2 border-[##DEE2E6] rounded-[10px]">
      <div className=" flex items-center  text-[#212529] ">
        <div
          className="flex gap-6 w-[200px] cursor-pointer  "
          onClick={() => handleclick("department")}
        >
          <span className="px-[18px] py-[10px]">დეპარტამენტი</span>
          <Image
            src={arrow}
            width={14}
            height={8}
            alt="arrow"
            className="object-contain"
          />
        </div>

        {department && (
          <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[688px] h-[274px] rounded-[10px] pt-10 px-[30px] pb-5 top-14">
            <div className="relative flex flex-col h-full gap-6">
              {dep.map((item: Department) => {
                return (
                  <div key={item.id} className="flex gap-2 ">
                    <input
                      className="rounded-[6px] cursor-pointer border-[1.5px] p-[10px]"
                      type="checkbox"
                      title="department"
                      id={`${item.id}-checked`}
                    />

                    <label
                      htmlFor={`${item.id}-checked`}
                      className="cursor-pointer"
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
              <button
                className="absolute w-[155px] cursor-pointer text-[16px] h-[35px] bottom-2 right-2 text-white px-5  bg-[#8338EC] rounded-[20px]"
                onClick={() => handleclick("department")}
              >
                არჩევა
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex  items-center   text-[#212529]">
        <div
          className="flex gap-6 w-[200px] cursor-pointer "
          onClick={() => handleclick("priority")}
        >
          <span className="px-[18px] py-[10px]">პრიორიტეტი</span>
          <Image
            src={arrow}
            width={14}
            height={8}
            alt="arrow"
            className="object-contain"
          />
        </div>

        {priority && (
          <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[688px] h-[274px] rounded-[10px] pt-10 px-[30px] pb-5 top-14">
            <div className="relative flex flex-col h-full gap-6">
              {prio.map((item: Priority, i: number) => {
                return (
                  <div key={item.id} className="flex gap-2 ">
                    <input
                      className="rounded-[6px] cursor-pointer border-[1.5px] p-[10px]"
                      type="checkbox"
                      title="department"
                      id={`${i}-checked`}
                    />
                    <label htmlFor={`${i}-checked`} className="cursor-pointer">
                      {item.name}
                    </label>
                  </div>
                );
              })}
              <button
                className="absolute w-[155px] cursor-pointer text-[16px] h-[35px] bottom-2 right-2 text-white px-5  bg-[#8338EC] rounded-[20px]"
                onClick={() => handleclick("priority")}
              >
                არჩევა
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=" flex items-center text-[#212529]">
        <div
          className="flex gap-6 w-[200px]  cursor-pointer "
          onClick={() => handleclick("staff")}
        >
          <span className="px-[18px] py-[10px]">თანამშრომელი</span>
          <Image
            src={arrow}
            width={14}
            height={8}
            alt="arrow"
            className="object-contain"
          />
        </div>

        {staff && (
          <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[688px] h-[274px] rounded-[10px] pt-10 px-[30px] pb-5 top-14">
            <div className="relative flex flex-col h-full gap-6">
              {staffArray.map((item: string, i: number) => {
                return (
                  <div key={i} className="flex gap-2 ">
                    <input
                      className="rounded-[6px] cursor-pointer border-[1.5px] p-[10px]"
                      type="checkbox"
                      title="department"
                      id={`${i}-checked`}
                    />

                    <label
                      htmlFor={`${i}-checked`}
                      className="flex gap-2 cursor-pointer"
                    >
                      <Image
                        src={user}
                        width={28}
                        height={28}
                        alt="user "
                        className="object-contain"
                      />
                      {item}
                    </label>
                  </div>
                );
              })}
              <button
                className="absolute w-[155px] cursor-pointer text-[16px] h-[35px] bottom-2 right-2 text-white px-5  bg-[#8338EC] rounded-[20px]"
                onClick={() => handleclick("staff")}
              >
                არჩევა
              </button>
            </div>
          </div>
        )}
      </div>

      {/* <ul>
        {items.map((item, id) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul> */}
    </form>
  );
}
