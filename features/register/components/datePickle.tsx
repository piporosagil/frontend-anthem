"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import type { ControllerRenderProps } from "react-hook-form";

export default function DatePicker(field: ControllerRenderProps) {
  const [open, setOpen] = useState(false);

  return (
    <Field className="mx-auto">
      <FieldLabel htmlFor="date" className="font-bold">
        Data de nascimento
      </FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date"
              className="justify-start font-normal"
            >
              {field.value
                ? field.value.toLocaleDateString()
                : "Selecione sua data"}
            </Button>
          }
        />
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            defaultMonth={field.value}
            captionLayout="dropdown"
            onSelect={(date) => {
              field.onChange(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
