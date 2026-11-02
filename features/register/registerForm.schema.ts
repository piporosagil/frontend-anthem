import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, {
      message: "Seu nome deve ter pelo menos 1 charactere",
    }),
    email: z.email({
      message: "Digite um email válido",
    }),
    birthDate: z.date().optional(),
    password: z
      .string()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
    confirmPassword: z.string().min(1, {
      message: "Confirme sua senha",
    }),
    favoriteSentence: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
