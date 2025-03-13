import Image from "next/image";
import pieChart from "../../../public/pie-chart.png";
import calendar from "../../../public/calendar.png";
import Frame from "../../../public/Frame 1000005864.png";
import arrow from "../../../public/Shape.svg";
import { Task } from "../../../typings";
import user from "../../../public/Ellipse 3892@2x.png";

function TaskDetails({ task }: { task: Task }) {
  return (
    <div className="flex flex-col text-[#2A2A2A] w-[493px]">
      <h1 className=" mb-7 text-2xl">დავალების დეტალები</h1>
      <div className="flex gap-[70px]">
        <div className="flex flex-col gap-[46px]">
          <div className="flex gap-2 items-center ">
            <Image src={pieChart} width={15} height={15} alt="pieChart" />
            <span className="">სტატუსი</span>
          </div>
          <div className="flex gap-2 items-center ">
            <Image src={Frame} width={15} height={15} alt="pieChart" />
            <span className="">თანამშრომელი</span>
          </div>
          <div className="flex gap-2 items-center ">
            <Image src={calendar} width={15} height={15} alt="pieChart" />
            <span className="">ვადა</span>
          </div>
        </div>
        <div className="flex flex-col gap-[46px]">
          <form className="flex gap-2 items-center ">
            <div
              className="flex gap-6 w-[200px] cursor-pointer  border-1 border-[#CED4DA] rounded-[5px]"
              // onClick={() => handleclick("department")}
            >
              <span className="px-[18px] py-[10px]">{task.status.name}</span>
              <Image
                src={arrow}
                width={14}
                height={8}
                alt="arrow"
                className="object-contain"
              />
            </div>
          </form>
          <div className="flex gap-2 items-center ">
            <Image src={user} width={32} height={32} alt="pieChart" />
            <div className="flex gap-2 flex-col">
              <span className="text-sm text-[#474747]">
                {task.department.name}
              </span>
              <span className="text-[14px]">{task.employee.name}</span>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <Image src={calendar} width={15} height={15} alt="pieChart" />
            <span className="">ვადა</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
