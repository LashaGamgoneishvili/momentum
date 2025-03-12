export const BASE_URL = "https://momentum.redberryinternship.ge/api";

export async function getAllStatuses() {
  try {
    // revalidatePath(`/admin`);
    const response = await fetch(`${BASE_URL}/statuses`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllPriorities() {
  try {
    // revalidatePath(`/admin`);
    const response = await fetch(`${BASE_URL}/priorities`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllDepartment() {
  try {
    const response = await fetch(`${BASE_URL}/departments`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllTasks() {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      cache: "no-cache",
      headers: { Authorization: "Bearer 9e6a193a-c4d1-4758-ae39-76d3720b9491" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

// export async function getAllEmployees() {
//   try {
//     // revalidatePath(`/admin`);
//     const response = await fetch(`${BASE_URL}/employees`, {
//       cache: "no-cache",
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     // console.log("data------", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// }

// export async function getAllPriorities() {
//   const data = await fetch(`${BASE_URL}/priorities`);
//   const response = data.json();
//   return response;
// }

// export async function getAllDepartment() {
//   const data = await fetch(`${BASE_URL}/departments`);
//   const response = data.json();
//   console.log("response---", response);
//   return response;
// }

export async function getAllEmployees() {
  const response = await fetch(`${BASE_URL}/employees`);
  const data = response.json();

  console.log("----data----", data);
  return ["1", "2"];
}
