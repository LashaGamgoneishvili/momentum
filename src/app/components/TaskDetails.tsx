import Image from "next/image";
import pieChart from "../../../public/pie-chart.svg";
import calendar from "../../../public/calendar.svg";
import Frame from "../../../public/employee-icon.svg";
import { Task } from "../../../typings";
import user from "../../../public/Ellipse 3892@2x.png";
import { getAllStatuses } from "../../../actions";
import StatusDropdown from "./StatusDropdown";

async function TaskDetails({ task }: { task: Task }) {
  const statuses = await getAllStatuses();
  const dateStr = task.due_date;
  const date = new Date(dateStr);

  const weekday = date.toLocaleDateString("ka-GE", { weekday: "short" });
  const formattedDate = `${weekday} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <>
      <div className="flex flex-col text-[#2A2A2A] w-[493px] gap-[18px]">
        <h1 className=" text-2xl">დავალების დეტალები</h1>
        <div className="flex gap-[70px]">
          <div className="flex flex-col gap-[44px]">
            <div className="flex gap-2 items-center py-[23px]">
              <Image src={pieChart} width={24} height={24} alt="pieChart" />
              <span className="">სტატუსი</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Frame} width={24} height={24} alt="employee" />
              <span className="">თანამშრომელი</span>
            </div>
            <div className="flex gap-2 items-center ">
              <Image src={calendar} width={24} height={24} alt="data" />
              <span className="">ვადა</span>
            </div>
          </div>
          <div className="flex flex-col gap-[46px]">
            <StatusDropdown statuses={statuses} task={task} />
            <div className="flex gap-2 items-center ">
              <Image src={user} width={32} height={32} alt="department" />
              <div className="flex flex-col">
                <span className="text-sm text-[#474747]">
                  {`${task.department.name
                    .split(" ")
                    .map((word: string) => word.slice(0, 3))
                    .join(". ")}.`}
                </span>
                <span className="text-[14px]">{task.employee.name}</span>
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <span className="">{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
