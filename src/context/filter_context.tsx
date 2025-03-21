"use client";

import {
  createContext,
  // useEffect,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  // useState,
} from "react";
import reducer from "../reducers/filter_reducer";
import {
  // LOAD_PRODUCTS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  // GET_TASKS,
} from "../../constant";
import {
  Action,
  D_E_P,
  FilterType,
  FlatTask,
  // , Task
} from "../../typings";
// import { getAllTasks } from "../../actions";

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

// Create context with `undefined` as initial value
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
