import { UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function Header() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const isScreenWidthGreatherThan744 =  screenWidth > 744;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  return (
    <header className="flex items-center justify-between p-4 pb-8 max-w-[1440px] mx-auto">
      <img src="/logo-dark.png" alt="logo" />

      <div className="flex items-center gap-4">
        
        {
          isScreenWidthGreatherThan744 && (
            <nav className="flex gap-3">
              <ul> <a href="#">Página inicial</a> </ul>
              <ul> <a href="#">Ver Vagas</a> </ul>
              <ul> <a href="#">Criar Vagas</a> </ul>
            </nav>
            )
        }

        <div className="flex items-center gap-2">
          <span className="font-bold">John Doe</span>
          <UserCircle size={32} weight="fill" />
        </div>
      </div>
    </header>
  );
}
