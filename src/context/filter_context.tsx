"use client";

import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  ReactNode,
  useState,
} from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from "../../constant";
import { D_E_P, FilterType, FlatTask, Task } from "../../typings";
import { getAllTasks } from "../../actions";

interface FilterContextType {
  filtered_tasks: FlatTask[];
  tasks: FlatTask[];
  filters: {
    department: FilterType[];
    priority: FilterType[];
    employee: FilterType[];
  };
  updateFilters: (name: D_E_P, value: FilterType) => void;
  clearFilters: () => void;
  filterTasks: () => void;
}

// Initial state
const initialState = {
  filtered_tasks: [],
  tasks: [],
  filters: {
    department: [],
    priority: [],
    employee: [],
  },
};

// Create context with `undefined` as initial value
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    dispatch({ type: LOAD_PRODUCTS, payload: tasks });
  }, [tasks]);

  const filterTasks = () => {
    dispatch({ type: FILTER_PRODUCTS });
  };

  const updateFilters = (name: D_E_P, value: FilterType) => {
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        filterTasks,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
