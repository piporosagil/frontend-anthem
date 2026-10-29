"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "../registerForm.schema";
import z from "zod";
import { Button } from "@/components/ui/button";
import DatePicker from "./datePickle";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      favoriteSentence: "",
    },
  });

  function onSubmit(data: z.infer<typeof registerSchema>) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel className="font-bold">Nome</FieldLabel>
          <Input {...register("name")} />
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel className="font-bold">Email</FieldLabel>
          <Input {...register("email")} />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
        <Controller
          name="birthDate"
          control={control}
          render={({ field }) => <DatePicker {...field} />}
        />
        <Field>
          <FieldLabel className="font-bold">Senha</FieldLabel>
          <Input {...register("password")} type="password" />
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel className="font-bold">Confirme sua senha</FieldLabel>
          <Input {...register("confirmPassword")} type="password" />
          {errors.confirmPassword && (
            <FieldError>{errors.confirmPassword.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel className="font-bold">Palavra favorita</FieldLabel>
          <Input {...register("favoriteSentence")} />
        </Field>
      </FieldGroup>
      <Button
        className="mt-5 w-full bg-blue-700 hover:bg-blue-400 hover:cursor-pointer"
        type="submit"
      >
        Cadastrar
      </Button>
    </form>
  );
}
