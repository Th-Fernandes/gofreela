import { UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { useResizeDebounce } from "../hooks/useResizeDebounce";

export function Header() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const resizeDebounce = useResizeDebounce(() => setScreenWidth(window.innerWidth));
  const isScreenWidthGreatherThan744 =  screenWidth > 744;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    resizeDebounce();
  }, []);
  return (
    <Container as="header" className="flex items-center justify-between pb-8 md:pb-10 pt-4 md:pt-6 xl:pt-8">
      <img src="/logo-dark.png" alt="logo" />

      <div className="flex items-center gap-4">
        
        {
          isScreenWidthGreatherThan744 && (
            <nav className="flex gap-3">
              <ul> <a href="#" className="hover:font-bold transition-all">Página inicial</a> </ul>
              <ul> <a href="#" className="hover:font-bold transition-all">Ver Vagas</a> </ul>
              <ul> <a href="#" className="hover:font-bold transition-all">Criar Vagas</a> </ul>
            </nav>
            )
        }

        <div className="flex items-center gap-2">
          {isScreenWidthGreatherThan744 && <span className="font-bold">John Doe</span>}
          <UserCircle size={32} weight="fill" />
        </div>
      </div>
    </Container>
  );
}
