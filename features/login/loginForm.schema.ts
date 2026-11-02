import z from "zod";

export const loginSchema = z.object({
  email: z.email({
    message: "Digite seu email",
  }),
  password: z.string().min(8, { message: "Digite sua senha" }),
});
