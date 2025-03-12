import Card from "./components/Card";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import {
  getAllPriorities,
  getAllDepartment,
  getAllEmployees,
  getAllStatuses,
  getAllTasks,
} from "./api/api";
import { PrioritiesProps, Departments, Statuses } from "../../typings";

const categories = [
  { name: "დასაწყები", color: "#F7BC30", id: 2 },
  { name: "პროცესში", color: "#FB5607", id: 3 },
  { name: "მზად ტესტირებისთვის", color: "#FF006E", id: 4 },
  { name: "დასრულებული", color: "#3A86FF", id: 5 },
];

export default async function TaskBoard() {
  const priorities: PrioritiesProps = await getAllPriorities();
  const department: Departments = await getAllDepartment();
  // const statuses: Statuses = await getAllStatuses();
  // const employees = await getAllEmployees();
  const tasks = await getAllTasks();
  // const employees = await getAllEmployees();
  console.log("---------tasks--------", tasks);

  return (
    <div className="min-h-screen bg-gray-100 p-6 px-[120px] w-[1920px] ">
      <Header />
      <div className=" mx-auto">
        <div className="w-full">
          <h2 className="text-[#212529] font-bold text-[34px] mb-12">
            დავალების ვერდი
          </h2>
        </div>

        <DropdownMenu prio={priorities} dep={department} />

        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col gap-[30px] w-[381px]"
            >
              <h2
                style={{ backgroundColor: category.color }}
                className={`text-white p-2 rounded-[10px] w-full text-center `}
              >
                {category.name}
              </h2>

              {categories.map((category) => (
                <div key={category.id}>
                  <Card />;
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
