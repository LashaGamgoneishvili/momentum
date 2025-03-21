"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import reducer from "../reducers/filter_reducer";
import { UPDATE_FILTERS, CLEAR_FILTERS, FILTER_TASKS } from "../../constant";
import { Action, D_E_P, FilterType, FlatTask } from "../../typings";

interface FilterContextType {
  filtered_tasks: FlatTask[];
  tasks: FlatTask[];
  filters: {
    department: FilterType[];
    priority: FilterType[];
    employee: FilterType[];
  };
  dispatch: Dispatch<Action>;
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

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterTasks = () => {
    dispatch({ type: FILTER_TASKS });
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
        dispatch,
        filterTasks,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
