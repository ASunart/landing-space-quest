function App() {

  return (
    <>
      <header className="relative flex flex-col items-center">
        <img
          src="/smoke-vector.svg"
          alt="Smoke of Rocket"
        />
        <img
          src="/logo_space.svg"
          alt="Space Quest Logo"
          className="absolute top-24"
        />
      </header>
      <main className="relative">

        <section className="text-white">
          <h1>JUGAR, COMPETIR Y COOPERAR</h1>
          <p>SPACE QUEST combina la diversión de un juego de mesa tradicional con la interactividad de la tecnología digital.</p>
          <div>
            <button>Jugar ahora</button>
            <button>Ver video</button>
          </div>
        </section>
        <section>
          <h2>¿CÓMO JUGAR?</h2>
          <p>SPACE QUEST combina la diversión de un juego de mesa tradicional con la interactividad de la tecnología digital.</p>
        </section>

        <section>
          <article>
            <img src="/earth.webp" alt="Earth Image" />
            <div>
              <span>
                <h3>TIERRA</h3>
                <p>PRINCIPIANTE</p>
              </span>
              <p>¡Prepárate para poner a prueba tus conocimientos!. Si tu respuesta es acertada, avanza con valentía dos casillas hacia las fronteras del espacio. Sin embargo, si cometes un error, te quedarás en tu posición actual.</p>
            </div>
          </article>
        </section>

        <section>
          <h2>TIPOS DE CASILLAS</h2>
          <p>A lo largo del tablero encontrarás diferentes cuadrados con QR que activan diferentes eventos:</p>
          <article>
            <h3>TODOS JUEGAN</h3>
            <p>Todos los jugadores deben completar un desafío o pregunta. Si ganan, todos son recompensados; si pierden, todos sufren las consecuencias.</p>
          </article>
        </section>

        <section>
            <img src="" alt="" />
            <img src="" alt="" />
            <h3>¡Comienza tu aventura en Space Quest y descubre un mundo de aprendizaje y diversión!</h3>
        </section>

        <section>
          <h2>CONSEJOS Y TRUCOS</h2>
          <article>
            <img src="" alt="" />
            <p>Forma alianzas estratégicas con otros jugadores para avanzar juntos.</p>
          </article>
        </section>

        <footer>
          Footer
        </footer>

      </main>
    </>
  )
}

export default App
