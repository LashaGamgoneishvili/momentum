"use client";
import { useFilterContext } from "../../context/filter_context";
import { Fragment, useEffect, useMemo, useState } from "react";
import Card from "./Card";
import { FlatTask, Status, Task } from "../../../typings";
import { LOAD_TASKS } from "../../../constant";
import { getAllTasks } from "../../../actions";

function Tasks({ status }: { status: Status }) {
  const context = useFilterContext();
  const filtered_tasks = context?.filtered_tasks || [];
  const dispatch = useMemo(() => context?.dispatch || (() => {}), [context]);

  const [tasks, setTasks] = useState<FlatTask[]>([]);

  useEffect(() => {
    getAllTasks().then((data: Task[]) => {
      const flatTasks: FlatTask[] = data.map((task: Task) => {
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
          employee_name: task.employee.name,
          employee_surname: task.employee.surname,
          employee_avatar: task.employee.avatar,
          total_comments: task.total_comments,
          color: "string",
        };
      });
      setTasks(flatTasks);
    });
  }, []);

  useEffect(() => {
    dispatch({ type: LOAD_TASKS, payload: tasks });
  }, [tasks, dispatch]);

  return (
    <>
      {filtered_tasks.map((task) => {
        return (
          <Fragment key={task.id}>
            {status.id === task.status_id && <Card task={task} />}
          </Fragment>
        );
      })}
    </>
  );
}

export default Tasks;
