import { getTask } from "../../api/api";
import { MainProps } from "../../../../typings";
import Image from "next/image";
import TaskDetails from "../../components/TaskDetails";

async function DetailsPage({ params: { id } }: MainProps) {
  const task = await getTask(id);
  console.log("Task-Task", task);

  return (
    <div className="min-h-screen bg-gray-100 p-6 px-[120px] w-[1920px]">
      <div className="flex">
        <div className="flex flex-col gap-[63px] ">
          <div className="flex gap-3 mb-4">
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
              }}
            >
              <Image
                src={task.priority.icon}
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
                {task.priority.name}
              </span>
            </div>
            <button className="bg-[#FF66A8] text-white px-3 py-1 text-[12px] rounded-[15px] font-semibold">
              {task.department.name
                .split(" ")
                .map((word: string) => word.slice(0, 3))
                .join(" ")}
            </button>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900">
            Redberry-ს საიტის ლენდინგის დიზაინი
          </h1>

          {/* Description */}
          <p className="text-gray-700 mt-3 text-lg w-[715px]">
            მიზანია რომ შევქმნათ თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,
            რომელიც უნიკალურობის განცდას მოგცემს და მაქსიმალურ ინფორმაციის
            გადმოსცემს. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული
            ვიზუალურად, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.
          </p>

          <TaskDetails task={task} />
        </div>

        <div className="flex flex-col text-black">
          <h1>asfca</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et
            debitis. Sint quam, alias animi reprehenderit incidunt est
            obcaecati. Temporibus recusandae accusamus praesentium delectus
            doloremque ipsam consequatur dignissimos impedit excepturi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
