// import Card from "@/Card";
import DropdownMenu from "@/DropdownMenu";
import {
  getAllPriorities,
  getAllDepartment,
  getAllEmployees,
  getAllStatuses,
  // getAllTasks,
} from "../../actions";
import {
  Priority,
  Departments,
  Status,
  Employee,
  // Task,
  // FlatTask,
} from "../../typings";
import Tasks from "@/Tasks";
// import { Fragment } from "react";

export default async function TaskBoard() {
  const priorities: Priority[] = await getAllPriorities();
  const department: Departments = await getAllDepartment();
  const statuses: Status[] = await getAllStatuses();
  const employees: Employee[] = await getAllEmployees();
  // const tasksData: Task[] = await getAllTasks();

  // const tasks: FlatTask[] = tasksData.map((task) => {
  //   return {
  //     id: task.id,
  //     status: task.status.name,
  //     status_id: task.status.id,
  //     priority: task.priority.name,
  //     priority_id: task.priority.id,
  //     priority_icon: task.priority.icon,
  //     department: task.department.name,
  //     department_id: task.department.id,
  //     date: task.due_date,
  //     title: task.name,
  //     description: task.description,
  //     employee_id: task.employee.id,
  //     employee_name: task.employee.name,
  //     employee_surname: task.employee.surname,
  //     employee_avatar: task.employee.avatar,
  //     total_comments: task.total_comments,
  //     color: "string",
  //   };
  // });

  return (
    <div className="min-h-screen bg-gray-100 p-6 px-[120px] w-[1920px] ">
      <div className=" mx-auto">
        <div className="w-full">
          <h2 className="text-[#212529] font-bold text-[34px] mb-12">
            დავალების ვერდი
          </h2>
        </div>

        <DropdownMenu
          priorities={priorities}
          dep={department}
          employees={employees}
        />
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

              <Tasks status={status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
