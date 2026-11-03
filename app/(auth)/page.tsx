import LoginForm from "@/features/login/components/LoginForm";
import { LockKeyholeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-12 bg-white flex justify-center flex-col py-6 gap-4">
      <LockKeyholeIcon
        aria-hidden="true"
        className="bg-blue-50 p-2 rounded-2xl size-12 text-blue-700"
      />
      <div>
        <h2 className=" text-2xl font-bold ">Acesse sua jornada</h2>
        <p className="mt-2 leading-relaxed text-slate-500">
          Dê o próximo passo na sua carreira
        </p>
      </div>
      <LoginForm />
      <p>
        Ainda não tem uma conta?{" "}
        <Link href={"register"} className="text-blue-700 underline">
          Cadastre-se aqui
        </Link>
      </p>
    </div>
  );
}
