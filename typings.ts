export type Priority = {
  id: number;
  name: string;
  icon: string;
};

export type PrioritiesProps = {
  priorities: Priority[];
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

export type Statuses = Status[];
