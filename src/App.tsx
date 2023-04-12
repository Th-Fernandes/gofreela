import { Container } from "./components/container";
import { Header } from "./components/header";

export default function App() {

  return (
    <>
      <Header />

      <Container as="section">
        <h1 className="text-xl md:text-2xl font-bold">Implementar css para um sistema - tailwind com react</h1>
        <p>Veja os candidatos que aplicaram para a sua vaga</p>
      </Container>
    </>
  )
}