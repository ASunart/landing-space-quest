import { Banner } from "./components/Banner"
import { CardInstruction } from "./components/CardInstruction"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { SquareTypes } from "./components/SquareTypes"
import { Tips } from "./components/Tips"

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 px-3 my-4">
        <Banner />
        <section className="flex flex-col gap-8">
          <CardInstruction />
          <SquareTypes />
          <Tips />
        </section>
        <h2 className="text-xl font-bold text-center w-3/4 mx-auto my-10">Start your adventure in Space Quest and discover a world of learning and fun!</h2>
      </main>
      <Footer />
    </>
  )
}

export default App
