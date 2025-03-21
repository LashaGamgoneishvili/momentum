import Image from "next/image";
import { FlatTask } from "../../../typings";
import commentIcon from "../../../public/Comments.svg";
import Link from "next/link";

const Card = ({ task }: { task: FlatTask }) => {
  const dateStr = task.date;
  const date = new Date(dateStr);

  const formattedDate = `${date.getDate()} ${date.toLocaleString("ka-Ge", {
    month: "short",
  })}, ${date.getFullYear()}`;

  const text = task.description;

  const shortDescription = text.split(" ").slice(0, 9).join(" ");

  return (
    <>
      <Link
        href={`/details/${task.id}`}
        className="flex flex-col border border-orange-300 rounded-lg p-5 max-w-[381px] cursor-pointer"
      >
        <div className="flex justify-between items-center mb-[28px]">
          <div className="flex gap-2">
            <div
              className={`flex w-[86px] gap-1 p-1 border-[1px] px-[5px] rounded-[5px] ${
                task.priority_id === 3 && "border-heigh"
              } ${task.priority_id === 2 && "border-medium"} ${
                task.priority_id === 1 && "border-low"
              }`}
            >
              <Image
                src={task.priority_icon}
                alt="icon"
                width={15}
                height={15}
              />
              <span
                className={`text-[12px] font-semibold ${
                  task.priority_id === 3 && "text-heigh"
                }
                ${task.priority_id === 2 && "text-medium"}
                ${task.priority_id === 1 && "text-low"}`}
              >
                {task.priority}
              </span>
            </div>
            <span
              className={`bg-[#FF66A8] ${
                task.department_id === 1 && "bg-[#FF66A8]"
              }${task.department_id === 2 && "bg-[#FD9A6A]"}
              ${task.department_id === 3 && "bg-[#89B6FF]"}
              
              ${task.department_id === 4 && "bg-[#FFD86D]"}
              ${task.department_id === 5 && "bg-[#FA4D4D]"}
              ${task.department_id === 6 && "bg-[#08A508]"}
              ${task.department_id === 7 && "bg-[#FFBE0B]"}
               text-white  w-[88px] h-6 text-center  px-[10px] py-1 text-[12px] rounded-[15px] font-semibold`}
            >
              {task.department.split(" ").length > 2
                ? `${
                    task.department.split("").length < 9
                      ? task.department
                      : task.department
                          .split(" ")
                          .map((word) => word.slice(0, 2))
                          .join(". ")
                  }.`
                : `${
                    task.department.split("").length < 9
                      ? task.department
                      : task.department
                          .split(" ")
                          .map((word) => word.slice(0, 3))
                          .join(". ")
                  }.`}
            </span>
          </div>
          <span className="text-gray-500 text-sm">{formattedDate}</span>
        </div>

        <h3 className="font-bold text-md text-black">{task.title}</h3>
        <p className="text-gray-700 text-sm mt-4">{shortDescription}</p>

        <div className="flex justify-between items-end mt-[28px]">
          <div className="flex justify-start items-end w-full h-full">
            <Image
              src={task.employee_avatar}
              alt="Profile"
              width={31}
              height={31}
              className="rounded-full"
            />
          </div>

          <div className="flex items-center gap-2 text-[#212529]">
            <Image src={commentIcon} alt="comment" width={22} height={22} />
            <span className="text-[14px]">{task.total_comments}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
