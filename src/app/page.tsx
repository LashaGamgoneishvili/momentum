import DropdownMenu from "@/DropdownMenu";
import {
  getAllPriorities,
  getAllDepartment,
  getAllEmployees,
  getAllStatuses,
} from "../../actions";
import { Priority, Departments, Status, Employee } from "../../typings";
import Tasks from "@/Tasks";

export default async function TaskBoard() {
  const priorities: Priority[] = await getAllPriorities();
  const department: Departments = await getAllDepartment();
  const statuses: Status[] = await getAllStatuses();
  const employees: Employee[] = await getAllEmployees();

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
