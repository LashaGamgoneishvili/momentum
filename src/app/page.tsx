import Card from "@/Card";
import DropdownMenu from "@/DropdownMenu";
import {
  getAllPriorities,
  getAllDepartment,
  getAllEmployees,
  getAllStatuses,
  getAllTasks,
} from "./api/api";
import {
  PrioritiesProps,
  Departments,
  Status,
  Employee,
  Task,
  Categories,
} from "../../typings";
import { Fragment } from "react";

export default async function TaskBoard() {
  const priorities: PrioritiesProps = await getAllPriorities();
  const department: Departments = await getAllDepartment();
  const statuses: Status[] = await getAllStatuses();
  const employees: Employee = await getAllEmployees();
  const tasksData: Task[] = await getAllTasks();
  console.log("---------employees--------", employees);
  // console.log("---------statuses--------", statuses);
  // console.log("---------tasks--------", tasksData);

  const tasks: Categories[] = tasksData.map((task) => {
    return {
      id: task.id,
      status: task.status.name,
      status_id: task.status.id,
      priority: task.priority.name,
      priority_id: task.priority.id,
      priority_icon: task.priority.icon,
      department: task.department.name,
      department_id: task.department.id,
      date: task.due_date,
      title: task.name,
      description: task.description,
      employee_id: task.employee.id,
      emploee_name: task.employee.name,
      emploee_surname: task.employee.surname,
      emploee_avatar: task.employee.avatar,
      total_comments: task.total_comments,
      color: "string",
    };
  });

  // const beginning = tasks.filter((task) => task.status_id === 1);
  // const inProgress = tasks.filter((task) => task.status_id === 2);
  // const readyForTesting = tasks.filter((task) => task.status_id === 3);
  // const Completed = tasks.filter((task) => task.status_id === 4);
  // console.log("array-1", beginning);
  // console.log("array-2", inProgress);
  // console.log("array-3", readyForTesting);
  // console.log("array-4", Completed);

  return (
    <div className="min-h-screen bg-gray-100 p-6 px-[120px] w-[1920px] ">
      <div className=" mx-auto">
        <div className="w-full">
          <h2 className="text-[#212529] font-bold text-[34px] mb-12">
            დავალების ვერდი
          </h2>
        </div>

        <DropdownMenu prio={priorities} dep={department} />
        <div className="grid grid-cols-4 gap-4">
          {statuses.map((status: Status) => (
            <div key={status.id} className="flex flex-col gap-6 w-[381px]">
              <h2
                className={`text-white p-2 rounded-[10px] w-full text-center ${
                  status.id === 1 && "bg-beginning"
                } ${status.id === 2 && "bg-progress"} ${
                  status.id === 3 && "bg-ready"
                } ${status.id === 4 && "bg-done"}`}
              >
                {status.name}
              </h2>

              {tasks.map((task) => {
                return (
                  <Fragment key={task.id}>
                    {status.id === task.status_id && <Card task={task} />}
                  </Fragment>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
