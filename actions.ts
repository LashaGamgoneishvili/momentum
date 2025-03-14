"use server";

import axios from "axios";

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
