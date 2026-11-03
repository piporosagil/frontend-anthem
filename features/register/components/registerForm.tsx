"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "../registerForm.schema";
import z from "zod";
import { Button } from "@/components/ui/button";
import DatePicker from "./datePickle";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleTogglePassword(): void {
    setShowPassword((prev) => !prev);
  }

  function onSubmit(data: z.infer<typeof registerSchema>) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel className="font-bold" htmlFor="name">
            Nome
          </FieldLabel>
          <Input id="name" {...register("name")} />
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel className="font-bold" htmlFor="email">
            Email
          </FieldLabel>
          <Input id="email" {...register("email")} />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
        <Controller
          name="birthDate"
          control={control}
          render={({ field }) => <DatePicker {...field} />}
        />
        <Field>
          <FieldLabel className="font-bold" htmlFor="password">
            Senha
          </FieldLabel>
          <InputGroup className="relative p-0 m-0">
            <InputGroupInput
              {...register("password")}
              type={showPassword ? "text" : "password"}
              id="password"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                aria-label={showPassword ? "esconder senha" : "mostrar senha"}
                onClick={handleTogglePassword}
                size="icon-xs"
              >
                {showPassword ? (
                  <EyeOff aria-hidden="true" />
                ) : (
                  <Eye aria-hidden="true" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel className="font-bold" htmlFor="confirmPassword">
            Confirme sua senha
          </FieldLabel>
          <InputGroup className="relative p-0 m-0">
            <InputGroupInput
              {...register("confirmPassword")}
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                aria-label={
                  showPassword
                    ? "esconder senha de confirmação"
                    : "mostrar senha de confirmação"
                }
                onClick={handleTogglePassword}
                size="icon-xs"
              >
                {showPassword ? (
                  <EyeOff aria-hidden="true" />
                ) : (
                  <Eye aria-hidden="true" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {errors.confirmPassword && (
            <FieldError>{errors.confirmPassword.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel className="font-bold" htmlFor="favoriteSentence">
            Palavra favorita
          </FieldLabel>
          <Input {...register("favoriteSentence")} id="favoriteSentence" />
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
