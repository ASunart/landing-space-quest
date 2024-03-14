import { BoxType } from "./components/BoxType"
import { CardType } from "./components/CardType"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { TipCard } from "./components/TipCard"

function App() {

  const mainBtn = "w-full px-8 py-2 bg-magenta rounded-lg lg:text-2xl lg:w-1/4 text-center"
  const btnStyle = "w-full text-center px-8 py-2 bg-[rgba(255,255,255,0.1)] rounded-lg border border-[rgba(255,255,255,0.1)] lg:text-2xl lg:w-1/4 flex justify-center items-center gap-1"

  const h1Style = "text-[#698EBF] text-2xl font-regular lg:text-5xl"
  return (
    <>
      <Header />
      <main className="relative mt-8 flex flex-col gap-16 lg:-mt-8 lg:gap-8">

        <section className="text-white flex flex-col gap-4 px-6 lg:px-20">
          <div>
            <h1 className={h1Style}>JUGAR, COMPETIR Y COOPERAR</h1>
            <p className="lg:text-2xl lg:w-1/3">SPACE QUEST combina la diversión de un juego de mesa tradicional con la interactividad de la tecnología digital.</p>
          </div>
          <div className="flex gap-4 w-full">
            <a className={mainBtn} href="https://spacequest.vercel.app/" target="_blank">Jugar ahora</a>
            <a className={btnStyle} href="#" target="_blank"><img src="/video.svg" alt="Icono video" />Ver video</a>
          </div>

        </section>
        <section className="text-white px-6 w-full lg:px-20">
          <div className="flex w-full items-center justify-between">
            <span>
              <h2 className={h1Style}>¿CÓMO JUGAR?</h2>
              <p className="lg:text-2xl lg:w-3/4">Olvídate de los dados tradicionales. Ingresa a la web del juego y utiliza las cartas de preguntas para avanzar en las fronteras del espacio, aquí te explicamos cómo:</p>
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


        <section className="text-white px-6 flex flex-col gap-12 lg:px-20">
          <div>
            <h2 className="text-cream text-2xl font-regular lg:text-5xl">TIPOS DE CASILLAS</h2>
            <p className="lg:text-2xl">A lo largo del tablero encontrarás diferentes cuadrados con QR que activan diferentes eventos:</p>
          </div>

          <BoxType />
        </section>

        <section className="flex flex-col justify-center lg:mt-36 items-center gap-4 px-6 lg:px-20">
          <div className="flex flex-col gap-12 justify-center md:flex-row">
            <img
              src="/bento-image.webp"
              alt=""
              className="w-80 rounded-lg lg:w-2/5" />
            <img 
            src="/bento-image.webp" 
            alt="" 
            className="w-80 rounded-lg lg:w-2/5" />

          </div>
          <h3 className="text-white border border-blue-100 p-6 rounded-lg bg-[rgba(255,255,255,0.1)] md:w-4/5 text-center md:text-2xl">¡Comienza tu aventura en Space Quest y descubre un mundo de aprendizaje y diversión!</h3>
        </section>

        <section className="text-white px-6 flex flex-col gap-8 lg:gap-16 lg:px-20 lg:mt-18">
          <h2 className="text-blue-200 text-2xl font-regular lg:text-5xl">CONSEJOS Y TRUCOS</h2>
          <TipCard />
        </section>

        <Footer />

      </main>
    </>
  )
}

export default App
