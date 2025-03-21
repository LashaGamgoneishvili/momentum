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
    console.error("Error fetching getAllTasksv:", error);
    return [];
  }
}

export async function getAllStatuses() {
  try {
    const response = await customFetch.get("/statuses");

    return response.data;
  } catch (error) {
    console.error("Error fetching getAllStatuses:", error);
    return [];
  }
}

export async function getAllPriorities() {
  try {
    const response = await customFetch.get("/priorities");

    return response.data;
  } catch (error) {
    console.error("Error fetching getAllPriorities:", error);
    return [];
  }
}

export async function getAllDepartment() {
  try {
    const response = await customFetch.get("/departments");

    return response.data;
  } catch (error) {
    console.error("Error fetching getAllDepartment:", error);
    return [];
  }
}

export async function getTask(id: string) {
  try {
    const response = await customFetch.get(`/tasks/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching getTask:", error);
    return [];
  }
}

export async function getAllEmployees() {
  try {
    const response = await customFetch.get(`employees`);
    console.log("EmployeesData", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching getAllEmployees:", error);
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
    console.error("Error creating CreateEmployee:", error);
    return null;
  }
}

export async function addNewTask(task: {
  [key: string]: string | number | Date;
}) {
  console.log("addNewTaskAction", addNewTask);
  if (!task) {
    console.error("Invalid employee data provided.");
    return null;
  }

  const data = {
    name: task.name,
    description: task.description,
    due_date: task.due_date,
    status_id: task.status_id,
    employee_id: task.employee_id,
    priority_id: task.priority_id,
  };

  console.log("Sending employee data:", data);

  try {
    const response = await customFetch.post("/tasks", data);
    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    return null;
  }
}

export async function getAllComments() {
  try {
    const response = await customFetch.get("/tasks/{task}/comments");

    return response.data;
  } catch (error) {
    console.error("Error fetching getAllComments:", error);
    return [];
  }
}

export async function changeStatus(taskId: number, id: number) {
  if (!taskId && !id) {
    return;
  }
  try {
    const statusId = { status_id: id };
    const response = await customFetch.put(`/tasks/${taskId}`, statusId);

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getTaskComments(taskId: string) {
  try {
    const response = await customFetch.get(`/tasks/${taskId}/comments`);

    return response.data;
  } catch {
    console.error("Error fetching Comments");
    return [];
  }
}

export async function postCommentAction(taskId: string, comment: string) {
  const data = {
    text: comment,
  };
  try {
    const response = await customFetch.post(`/tasks/${taskId}/comments`, data);

    return response.data;
  } catch {
    console.error("Error fetching Comments");
    return [];
  }
}
export async function postSubComment(
  taskId: string,
  parentId: number | null,
  comment: string
) {
  if (!taskId || !parentId || !comment) {
    return console.error(
      "One of the required value doesn't exists",
      taskId,
      parentId,
      comment
    );
  }
  const data = {
    text: comment,
    parent_id: parentId,
  };
  try {
    const response = await customFetch.post(`/tasks/${taskId}/comments`, data);

    return response.data;
  } catch {
    console.error("Error fetching Comments");
    return [];
  }
}
