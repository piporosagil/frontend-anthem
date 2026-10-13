import { Sparkle, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-dvw h-dvh flex items-center justify-center  bg-slate-900 px-5 py-10">
      <section className="grid md:grid-cols-[1fr_0.5fr] overflow-hidden md:grid-flow-row w-full max-w-5xl border border-white/10 bg-white/6 rounded-3xl">
        <div className="p-12">
          <p className="flex items-center font-bold text-white gap-3 text-xl mb-10">
            <Sparkle className="bg-blue-400 p-2" size={50} />
            Anthem
          </p>
          <div>
            <p className="text-sm font-semibold uppercase text-blue-400 ">
              inteligencia de carreira
            </p>
            <p className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Descubra onde sua experiência pode levar você
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
              Entre para acessar seu perfil, oportunidades, mapa de carreira,
              plano de evolução, e evidências profissionais.
            </p>
          </div>
        </div>
        <div className="p-12 bg-white flex justify-center flex-col">
          <Star />
          <p className="mt-6 text-2xl font-bold ">Acesse sua jornada</p>
          <p className="mt-2 leading-relaxed text-slate-500">
            Registre-se agora
          </p>
          <Link href={"/register"}>Cadastrar-se</Link>
        </div>
      </section>
    </main>
  );
}
