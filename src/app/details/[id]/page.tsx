import Image from "next/image";
import TaskDetails from "../../components/TaskDetails";
import Comment from "@/comment";
import { getTask, getTaskComments } from "../../../../actions";

async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const task = await getTask(id);
  const taskComment = await getTaskComments(id);

  return (
    <div className="min-h-screen pt-10  w-full">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[63px] ">
          <div className="flex flex-col gap-9 ">
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-3">
                <div
                  className={`flex gap-1 py-1 px-[5px] border-[1px] rounded-[3px]  ${
                    task.priority.id === 3 && "border-heigh"
                  } ${task.priority.id === 2 && "border-medium"} ${
                    task.priority.id === 1 && "border-low"
                  } 
              ${task.priority.id === 3 && "border-heigh"}
              ${task.priority.id === 2 && "border-medium"}
              ${task.priority.id === 1 && "border-low"}  

              `}
                >
                  <Image
                    src={task.priority.icon}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                  <span
                    className={`text-[12px] font-semibold ${
                      task.priority.id === 3 && "text-heigh"
                    } ${task.priority.id === 2 && "text-medium"}
                ${task.priority.id === 1 && "text-low"}`}
                  >
                    {task.priority.name}
                  </span>
                </div>
                <button className="bg-[#FF66A8] text-white px-3 py-1 text-[12px] rounded-[15px] font-semibold">
                  {task.department.name.split("").length < 6
                    ? task.department.name
                    : `${task.department.name
                        .split(" ")
                        .map((word: string) => word.slice(0, 3))
                        .join(". ")}.`}
                </button>
              </div>

              <h1 className="text-2xl font-bold text-gray-900">{task.name}</h1>
            </div>

            <p className="text-gray-700 mt-3 text-lg w-[715px]">
              {task.description}
            </p>
          </div>
          <TaskDetails task={task} />
        </div>

        <Comment taskComment={taskComment} id={id} />
      </div>
    </div>
  );
}

export default DetailsPage;
