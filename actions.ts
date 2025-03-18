"use server";

import axios from "axios";
import { CreateEmployeeType } from "./typings";

const customFetch = axios.create({
  baseURL: "https://momentum.redberryinternship.ge/api",
});

customFetch.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = `Bearer ${process.env.TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function getAllTasks() {
  try {
    const response = await customFetch.get("/tasks");

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllStatuses() {
  try {
    const response = await customFetch.get("/statuses");

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllPriorities() {
  try {
    const response = await customFetch.get("/priorities");

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllDepartment() {
  try {
    const response = await customFetch.get("/departments");

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getTask(id: string) {
  try {
    const response = await customFetch.get(`/tasks/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllEmployees() {
  try {
    const response = await customFetch.get(`employees`);

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function createEmployee(addEmployee: CreateEmployeeType | null) {
  if (!addEmployee) {
    console.error("Invalid employee data provided.");
    return null;
  }
  console.log("addEmployee", addEmployee.avatar);
  const formData = new FormData();
  formData.append("name", addEmployee.name);
  formData.append("surname", addEmployee.surname);
  formData.append(
    "avatar",
    addEmployee.avatar as unknown as Blob,
    addEmployee.avatar.name
  );
  formData.append("department_id", addEmployee.departmentId_id.toString());

  try {
    console.log(formData);
    const response = await customFetch.post("/employees", formData);

    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    return null;
  }
}

export async function addNewTask(task: { [key: string]: string | number }) {
  if (!task) {
    console.error("Invalid employee data provided.");
    return null;
  }

  const data = {
    name: task.name,
    description: task.description,
    // due_date: task.due_date,
    due_date: "2025-12-31",
    status_id: task.status_id,
    employee_id: task.employee_id,
    priority_id: task.priority_id,
  };

  console.log("Sending employee data:", data);

  try {
    const response = await customFetch.post("/tasks", data);
    console.log("CreateNewTasks", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    return null;
  }
}
