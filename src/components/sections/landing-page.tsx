import { Classificacao } from "./Classificacao";
import { Etapas } from "./Etapas";
import { Ferramentas } from "./Ferramentas";
import { Footer } from "./Footer";
import { Governanca } from "./Governanca";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Sobre } from "./Sobre";

export function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Etapas />
      <Governanca />
      <Classificacao />
      <div className="lg:px-5 xl:px-9 lg:pt-20 lg:pb-32 md:pt-12 md:pb-24 xs:pt-8 xs:pb-16">
        <Ferramentas />
      </div>

      <Footer />
    </>
  );
}
