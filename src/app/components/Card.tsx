import Image from "next/image";
import { Categories } from "../../../typings";
import commentIcon from "../../../public/Comments.svg";
import Link from "next/link";

const Card = ({ task }: { task: Categories }) => {
  const dateStr = task.date;
  const date = new Date(dateStr);

  const formattedDate = `${date.getDate()} ${date.toLocaleString("ka-Ge", {
    month: "short",
  })}, ${date.getFullYear()}`;

  return (
    <>
      <Link
        href={`/details/${task.id}`}
        className="flex flex-col border border-orange-300 rounded-lg p-4 max-w-md cursor-pointer"
      >
        <div className="flex justify-between items-center mb-[28px]">
          <div className="flex gap-2">
            <div
              className="flex gap-1 p-1 px-[5px] rounded-[5px]"
              style={{
                color:
                  task.priority === "მაღალი"
                    ? "#FA4D4D"
                    : task.priority === "საშუალო"
                    ? "#FFBE0B"
                    : "#08A508",
                border: `1px solid ${
                  task.priority === "მაღალი"
                    ? "#FA4D4D"
                    : task.priority === "საშუალო"
                    ? "#FFBE0B"
                    : "#08A508"
                }`,
                // padding: "8px", // Optional: Add padding for better UI
                // borderRadius: "5px", // Optional: Rounded corners
              }}
            >
              <Image
                src={task.priority_icon}
                alt="icon"
                width={15}
                height={15}
              />
              <span
                style={{
                  color:
                    task.priority === "მაღალი"
                      ? "#FA4D4D"
                      : task.priority === "საშუალო"
                      ? "#FFBE0B"
                      : "#08A508",
                }}
                className="  text-[12px] font-semibold"
              >
                {task.priority}
              </span>
            </div>
            <span className="bg-[#FF66A8] text-white px-3 py-1 text-[12px] rounded-[15px] font-semibold">
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
            <span className="text-sm">8</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
