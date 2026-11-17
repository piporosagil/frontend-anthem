import type { RegisterErrorResult } from "./registerErrors.types";
import type { ApiErrorResponse } from "../services/types";

export function handleRegisterErrors(
  response: ApiErrorResponse,
): RegisterErrorResult {
  if (
    response.statusCode === 409 &&
    response.message === "This email address is already in use"
  ) {
    return {
      success: false,
      type: "server",
      field: "email",
      message: "Este email já está em uso",
    };
  }

  if (response.statusCode === 400) {
    return {
      success: false,
      type: "server",
      field: "root.serverError",
      message:
        "Alguns dados estão inválidos ou incluem campos não reconhecidos. Revise as informações e tente novamente.",
    };
  }

  if (response.statusCode === 429) {
    return {
      success: false,
      type: "server",
      field: "root.serverError",
      message:
        "Muitas tentativas de cadastro. Aguarde um momento e tente novamente.",
    };
  }

  if (response.statusCode === null) {
    return {
      success: false,
      type: "networkError",
      field: "root.networkError",
      message: response.message[0],
    };
  }

  return {
    success: false,
    type: "unknown",
    field: "root.serverError",
    message: "Não foi possível realizar o cadastro.",
  };
}
