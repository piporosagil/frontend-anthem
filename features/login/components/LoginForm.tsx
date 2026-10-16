import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel className="font-bold">Login</FieldLabel>
          <Input />
        </Field>
        <Field>
          <FieldLabel className="font-bold">Senha</FieldLabel>
          <Input type="password" />
        </Field>
      </FieldGroup>
    </form>
  );
}
