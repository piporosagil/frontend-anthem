"use server";

import type { RegisterUserData } from "../register/registerForm.schema";

const apiUrl = process.env.API_URL;

export async function registerUser(registerData: RegisterUserData) {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      console.log("deu erro");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
