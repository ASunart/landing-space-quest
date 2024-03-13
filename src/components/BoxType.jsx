export function BoxType() {
    const h1Style = "text-[#698EBF] text-2xl font-regular"
    return (
        <article className="relative bg-[rgba(255,255,255,0.1)] p-6 border border-red rounded-lg">
            <h3 className={h1Style}>TODOS JUEGAN</h3>
            <p>Todos los jugadores deben completar un desafío o pregunta. Si ganan, todos son recompensados; si pierden, todos sufren las consecuencias.</p>
        </article>
    )
}