import { BoxType } from "./components/BoxType"
import { CardType } from "./components/CardType"
import { Header } from "./components/Header"
import { TipCard } from "./components/TipCard"

function App() {

  const btnStyle = "px-8 py-2 bg-[rgba(255,255,255,0.1)] rounded-lg border border-[rgba(255,255,255,0.1)]"

  const h1Style = "text-[#698EBF] text-2xl font-regular"
  return (
    <>
      <Header />
      <main className="relative mt-32 flex flex-col gap-16">

        <section className="text-white flex flex-col gap-4 px-6">
          <div>
            <h1 className={h1Style}>JUGAR, COMPETIR Y COOPERAR</h1>
            <p className="">SPACE QUEST combina la diversión de un juego de mesa tradicional con la interactividad de la tecnología digital.</p>
          </div>
          <div className="flex gap-4">
            <button className={btnStyle}>Jugar ahora</button>
            <button className={btnStyle}>Ver video</button>
          </div>

        </section>
        <section className="text-white px-6">
          <div className="flex">
            <span>
              <h2 className={h1Style}>¿CÓMO JUGAR?</h2>
              <p>SPACE QUEST combina la diversión de un juego de mesa tradicional con la interactividad de la tecnología digital.</p>
            </span>
            <img
              src="/cards.webp"
              alt="Game Cards"
              className="relative w-36 -right-6" />
          </div>

          <section className="mt-6 flex flex-col gap-16">
            <CardType />
          </section>
        </section>


        <section className="text-white px-6">
          <h2 className={h1Style}>TIPOS DE CASILLAS</h2>
          <p>A lo largo del tablero encontrarás diferentes cuadrados con QR que activan diferentes eventos:</p>

          <BoxType />
        </section>

        <section>
          <img src="" alt="" />
          <img src="" alt="" />
          <h3>¡Comienza tu aventura en Space Quest y descubre un mundo de aprendizaje y diversión!</h3>
        </section>

        <section className="text-white px-6">
          <h2 className={h1Style}>CONSEJOS Y TRUCOS</h2>
          <TipCard />
        </section>

        <footer>
          <img src="/footer.webp" alt="Rocket with smoke" />
        </footer>

      </main>
    </>
  )
}

export default App
