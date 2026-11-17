export type RegisterErrorType = "server" | "unknown" | "networkError";

export type RegisterErrorField =
  | "email"
  | "root.serverError"
  | "root.networkError";

export type RegisterErrorResult = {
  success: false;
  type: RegisterErrorType;
  field: RegisterErrorField;
  message: string;
};
