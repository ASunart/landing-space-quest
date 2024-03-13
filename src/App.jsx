import { BoxType } from "./components/BoxType"
import { CardType } from "./components/CardType"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { TipCard } from "./components/TipCard"

function App() {

  const btnStyle = "w-full px-8 py-2 bg-[rgba(255,255,255,0.1)] rounded-lg border border-[rgba(255,255,255,0.1)] lg:text-lg lg:w-1/4"

  const h1Style = "text-[#698EBF] text-2xl font-regular lg:text-5xl"
  return (
    <>
      <Header />
      <main className="relative mt-8 flex flex-col gap-16 lg:-mt-8 lg:gap-8">

        <section className="text-white flex flex-col gap-4 px-6 lg:px-20">
          <div>
            <h1 className={h1Style}>JUGAR, COMPETIR Y COOPERAR</h1>
            <p className="lg:text-lg lg:w-1/3">SPACE QUEST combina la diversión de un juego de mesa tradicional con la interactividad de la tecnología digital.</p>
          </div>
          <div className="flex gap-4 w-full">
            <button className={btnStyle}>Jugar ahora</button>
            <button className={btnStyle}>Ver video</button>
          </div>

        </section>
        <section className="text-white px-6 w-full lg:px-20">
          <div className="flex w-full items-center justify-between">
            <span>
              <h2 className={h1Style}>¿CÓMO JUGAR?</h2>
              <p className="lg:text-xl lg:w-3/4">SPACE QUEST combina la diversión de un juego de mesa tradicional con la interactividad de la tecnología digital.</p>
            </span>
            <img
              src="/cards.webp"
              alt="Game Cards"
              className="relative w-36 -right-6 lg:w-2/5 lg:-right-20" />
          </div>

          <section className="mt-6 flex flex-col gap-16 lg:gap-4">
            <CardType />
          </section>
        </section>


        <section className="text-white px-6 flex flex-col gap-12">
          <div>
            <h2 className="text-cream text-2xl font-regular">TIPOS DE CASILLAS</h2>
            <p>A lo largo del tablero encontrarás diferentes cuadrados con QR que activan diferentes eventos:</p>
          </div>

          <BoxType />
        </section>

        <section>
          <img src="" alt="" />
          <img src="" alt="" />
          <h3>¡Comienza tu aventura en Space Quest y descubre un mundo de aprendizaje y diversión!</h3>
        </section>

        <section className="text-white px-6 flex flex-col gap-8">
          <h2 className="text-blue-200 text-2xl font-regular">CONSEJOS Y TRUCOS</h2>
          <TipCard />
        </section>

        <Footer />

      </main>
    </>
  )
}

export default App
