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
      <main className="flex flex-col gap-12 px-3 my-4 md:px-12">
        <Banner />
        <hr className="hidden lg:inline lg:my-8 lg:text-blue-200 lg:opacity-50"/>
        <section className="flex flex-col gap-8">
          <CardInstruction />
          <SquareTypes />
          <Tips />
        </section>
        <section className="flex flex-col items-center gap-4 my-6">
          <h2 className="text-xl font-bold text-center w-3/4 mx-auto text-white md:text-4xl">Start your adventure in Space Quest and discover a world of learning and fun!</h2>
          <button className=" bg-pink px-2 py-1 w-1/2 rounded-lg md:text-lg md:w-1/3">Play now</button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
