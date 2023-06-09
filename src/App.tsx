import { Header } from "./components/header";
import { Container } from "./components/container";
import { CardsListSection } from "./components/CardsListSection";

export default function App() {
  return (
    <>
      <Header />

      <Container as="section" className="mb-8 xl:mb-10">
        <h1 className="text-xl md:text-2xl font-bold">Implementar css para um sistema - tailwind com react</h1>
        <p>Veja os candidatos que aplicaram para a sua vaga</p>
      </Container>

      <CardsListSection />
    </>
  )
}