"use client";
import { useFilterContext } from "../../context/filter_context";
import { Fragment } from "react";
import Card from "./Card";
import { Status } from "../../../typings";

function Tasks({ status }: { status: Status }) {
  const context = useFilterContext();
  const tasks = context?.filtered_tasks || [];

  return (
    <>
      {tasks.map((task) => {
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
