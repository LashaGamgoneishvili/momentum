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
  console.log("Task-Task-14", task);
  return (
    <>
      <Link
        href={`/details/${task.id}`}
        className="flex flex-col border border-orange-300 rounded-lg p-4 max-w-md cursor-pointer"
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
            <span className="bg-[#FF66A8] text-white  px-[10px] py-1 text-[12px] rounded-[15px] font-semibold">
              {task.department
                .split(" ")
                .map((word) => word.slice(0, 3))
                .join(" ")}
            </span>
          </div>
          <span className="text-gray-500 text-sm">{formattedDate}</span>
        </div>

        <h3 className="font-bold text-md text-black">{task.title}</h3>
        <p className="text-gray-700 text-sm mt-1">{task.description}</p>

        <div className="flex justify-between items-end mt-[28px]">
          <div className="flex items-end ">
            <Image
              src={"/Ellipse 3892@2x.png"}
              alt="Profile"
              width={25}
              height={25}
            />
          </div>

          <div className="flex items-center gap-1 text-[#212529]">
            <Image src={commentIcon} alt="comment" width={22} height={22} />
            <p>{task.employee_name}</p>
            <p>{task.employee_id}</p>
            <span className="text-sm">{/* {task.total_comments} */}8</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
