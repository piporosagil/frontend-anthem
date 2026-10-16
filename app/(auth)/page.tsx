import { LockKeyholeIcon, Sparkle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-dvw h-dvh flex items-center justify-center  bg-slate-900 px-5 py-10">
      <section
        aria-labelledby="page-title"
        className="grid md:grid-cols-[0.8fr_0.5fr] overflow-hidden md:grid-flow-row w-full max-w-5xl border border-white/10 bg-white/6 rounded-3xl"
      >
        <div className="p-12">
          <p className="flex items-center font-bold text-white gap-3 text-xl mb-10">
            <Sparkle
              aria-hidden="true"
              className="bg-blue-300 p-2 rounded-2xl size-12"
            />
            Anthem
          </p>
          <div>
            <p className="text-sm font-semibold uppercase text-blue-300  tracking-[.18em]">
              inteligencia de carreira
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Descubra onde sua experiência pode levar você
            </h1>
            <p className="mt-5 text-lg max-w-100 leading-relaxed text-blue-100">
              Entre para acessar seu perfil, oportunidades, mapa de carreira,
              plano de evolução, e evidências profissionais.
            </p>
          </div>
        </div>
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
          <Link
            className="text-center text-white block py-2 w-full transition-colors rounded-xl bg-blue-600 text-base hover:bg-blue-800"
            href={"/register"}
          >
            Cadastrar-se
          </Link>
        </div>
      </section>
    </main>
  );
}
