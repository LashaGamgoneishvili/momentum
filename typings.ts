import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
} from "./constant";

export type Priority = {
  id: number;
  name: string;
  icon: string;
};

export type Department = {
  id: number;
  name: string;
};

export type Departments = Department[];

export type Status = {
  id: number;
  name: string;
};

export type Employee = {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department: Department;
};

export type Task = {
  id: number;
  name: string;
  description: string;
  due_date: string;
  department: Department;
  employee: Employee;
  status: Status;
  priority: Priority;
  total_comments: number;
};

export type FlatTask = {
  id: number;
  status: string;
  status_id: number;
  priority: string;
  priority_id: number;
  priority_icon: string;
  department: string;
  department_id: number;
  date: string;
  title: string;
  description: string;
  employee_id: number;
  employee_name: string;
  employee_surname: string;
  employee_avatar: string;
  total_comments: number;
  color: string;
};

export type MainProps = {
  params: {
    id: string;
  };
};

export type D_E_P = "department" | "priority" | "employee";

export type FilterType = {
  id: number;
  name: string;
  key: D_E_P;
};

type File = {
  size: number;
  type: string;
  name: string;
  lastModified: number;
};

export type CreateEmployeeType = {
  name: string;
  surname: string;
  avatar: File;
  departmentId_id: number;
};

export type SubComment = {
  author_avatar: string;
  author_nickname: string;
  id: number;
  parent_id: number;
  task_id: number;
  text: string;
};

export type CommentType = {
  id: number;
  text: string;
  task_id: number;
  parent_id: null | number;
  author_avatar: string;
  author_nickname: string;
  sub_comments: SubComment[];
};

export type Action =
  | { type: typeof LOAD_PRODUCTS; payload: FlatTask[] }
  | {
      type: typeof UPDATE_FILTERS;
      payload: { name: D_E_P; value: FilterType };
    }
  | { type: typeof FILTER_PRODUCTS }
  | { type: typeof CLEAR_FILTERS };
