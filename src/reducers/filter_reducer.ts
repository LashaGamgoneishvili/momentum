import {
  LOAD_TASKS,
  UPDATE_FILTERS,
  FILTER_TASKS,
  CLEAR_FILTERS,
} from "../../constant";
import { Action, FilterType, FlatTask } from "../../typings";

type Filters = {
  department: FilterType[];
  priority: FilterType[];
  employee: FilterType[];
};

type State = {
  filtered_tasks: FlatTask[];
  tasks: FlatTask[];
  filters: Filters;
};

const filter_reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case LOAD_TASKS: {
      return {
        ...state,
        tasks: [...action.payload],
        filtered_tasks: [...action.payload],
      };
    }
    case UPDATE_FILTERS: {
      const { name, value } = action.payload;

      const filters = state.filters;

      const temp = filters[name];

      if (temp.some((item) => item.id === value.id)) {
        return {
          ...state,
          filters: {
            ...filters,
            [name]: temp.filter((item) => item.id !== value.id),
          },
        };
      } else {
        return {
          ...state,
          filters: { ...filters, [name]: [...temp, value] },
        };
      }
    }
    case FILTER_TASKS: {
      const { tasks } = state;
      const { department, priority, employee } = state.filters;

      let tempTasks = [...tasks];

      if (department.length !== 0) {
        tempTasks = tempTasks.filter((task) => {
          return department.some((item) => task.department_id === item.id);
        });
      }
      if (priority.length !== 0) {
        tempTasks = tempTasks.filter((task) => {
          return priority.some((item) => task.priority_id === item.id);
        });
      }
      if (employee.length !== 0) {
        tempTasks = tempTasks.filter((task) => {
          return employee.some((item) => task.employee_id === item.id);
        });
      }

      return { ...state, filtered_tasks: tempTasks };
    }
    case CLEAR_FILTERS: {
      return {
        ...state,
        filtered_tasks: [...state.tasks],
        filters: {
          ...state.filters,
          department: [],
          priority: [],
          employee: [],
        },
      };
    }

    default:
      throw new Error(`No Matching action type`, action);
  }
};

export default filter_reducer;
