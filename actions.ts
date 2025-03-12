"use server";
// const VERCEL_ENV = process.env.VERCEL_ENV;

export const BASE_URL = "https://momentum.redberryinternship.ge/api";

// export async function getAllPriorities() {
//   try {
//     const response = await fetch(`${BASE_URL}/priorities`, {
//       cache: "no-cache",
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data.users;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return null; // or handle the error as needed
//   }
// }

// export async function getAllPriorities() {
//   const data = await fetch(`${BASE_URL}/priorities`);
//   const response = data.json();
//   console.log(response);
//   return response;
// }
