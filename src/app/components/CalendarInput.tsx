import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Dispatch, SetStateAction } from "react";

const CalendarInput = ({
  task,
  setTask,
}: {
  task: { [key: string]: number | string | Date };
  setTask: Dispatch<SetStateAction<{ [key: string]: number | string | Date }>>;
}) => {
  return (
    <div className="flex flex-col gap-[6px] w-[318px]">
      <label>დედლაინი</label>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={task.due_date instanceof Date ? task.due_date : null}
          onChange={(newDate) =>
            setTask({ ...task, due_date: newDate as Date })
          }
        />
      </LocalizationProvider>
    </div>
  );
};
export default CalendarInput;
