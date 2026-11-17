"use server";

import type { RegisterUserData } from "../register/registerForm.schema";
import type { ApiErrorResponse } from "./types";

const apiUrl = process.env.API_URL;

export async function registerUser(
  registerData: RegisterUserData,
): Promise<ApiErrorResponse> {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return {
      message: "Não foi possível conectar ao servidor.",
      error: "NetworkError",
      statusCode: null,
    };
  }
}
