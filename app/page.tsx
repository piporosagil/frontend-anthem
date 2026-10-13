import { Sparkle, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col m-auto">
      <div className="p-12">
        <p className="flex items-center font-bold gap-3 text-xl">
          <Sparkle className="bg-blue-400 p-2" size={50} />
          Anthem
        </p>
        <div>
          <p className="text-sm font-semibold uppercase">
            inteligencia de carreira
          </p>
          <p>Descubra onde sua experiência pode levar você</p>
          <p>
            Entre para acessar seu perfil, oportunidades, mapa de carreira,
            plano de evolução, e evidências profissionais.
          </p>
        </div>
      </div>
      <div className="p-12">
        <Star />
        <p>acesse sua jornada</p>
        <p>faça login antes de consultar </p>
        <Link href={"/register"}>Cadastrar-se</Link>
      </div>
    </section>
  );
}
