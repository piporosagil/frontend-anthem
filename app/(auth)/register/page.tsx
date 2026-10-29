import RegisterForm from "@/features/register/components/registerForm";
import Link from "next/link";

export default function RegisterContainer() {
  return (
    <div className="p-12 bg-white flex justify-center flex-col py-6 gap-4">
      <div>
        <h2 className=" text-2xl font-bold ">Cadastro</h2>
        <p className="mt-2 leading-relaxed text-slate-500">
          Preencha o formulário e tenha acesso aos conteúdos exclusivos
        </p>
      </div>
      <RegisterForm />
      <p>
        Já possui uma conta?{" "}
        <Link href={"/"} className="text-blue-700 underline">
          Log-se aqui
        </Link>
      </p>
    </div>
  );
}
