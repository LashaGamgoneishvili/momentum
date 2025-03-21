"use client";

import { useEffect, useState } from "react";
import { Status, Task } from "../../../typings";
import Image from "next/image";
import arrow from "../../../public/Shape.svg";
import { changeStatus } from "../../../actions";

export default function StatusDropdown({
  statuses,
  task,
}: {
  statuses: Status[];
  task: Task;
}) {
  const [dropDown, setDropDown] = useState(false);
  const [status, setStatus] = useState<string>(task.status.name);
  const [statusId, setStatusID] = useState<number>(task.status.id);

  useEffect(() => {
    changeStatus(task.id, statusId);
  }, [statusId, task.id]);

  return (
    <div>
      <form className="flex gap-2 items-center">
        <div
          onClick={() => setDropDown((prev) => !prev)}
          className="flex py-[14px] gap-6 cursor-pointer w-[259px] justify-between px-[14px] border-1 border-[#CED4DA] rounded-[5px]"
        >
          <p className="text-[14px] font-light">{status}</p>
          <Image
            src={arrow}
            width={14}
            height={8}
            alt="arrow"
            className="object-contain"
          />
        </div>
      </form>
      {statuses && dropDown && (
        <div className="relative flex flex-col w-full gap-[8px] text-[#0D0F10]">
          <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[259px] h-56 rounded-[10px] overflow-hidden top-2">
            {statuses.map((item: Status) => {
              return (
                <div
                  key={item.id}
                  className=" flex gap-2 cursor-pointer hover:bg-[#eee] p-[15px] duration-75 transform transition-all ease-in-out"
                  onClick={() => {
                    setDropDown((prev) => !prev);
                    setStatus(item.name);
                    setStatusID(item.id);
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
  );
}
