import z from "zod";

export const loginSchema = z.object({
  email: z.email({
    message: "Digite um email válido",
  }),
  password: z.string().min(8, { message: "Digite sua senha" }),
});
