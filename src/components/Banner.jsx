export function Banner() {
    return (
        <section className="flex flex-col items-center gap-6 md:items-start">
            <section className="flex flex-col items-center md:flex-row md:justify-between">
                <article className="">
                    <h1 className="font-bold text-xl text-blue-200 md:text-6xl">PLAY, COMPETE AND COOPERATE</h1>
                    <p className="font-regular text-sm text-white w-3/4 md:text-xl">SPACE QUEST combines the fun of a traditional board game with the interactivity of digital technology.</p>
                </article>
                <img src="/cards.webp" alt="Space Quest Cards" className="w-1/2 md:w-1/3 md:mr-20 animate-pulse" />
            </section>
            <fieldset className="flex justify-between w-full gap-4 md:w-1/2 lg:-mt-24">
                <button className="bg-pink px-2 py-1 w-full rounded-lg hover:bg-blue-200">Play now</button>
                <button className="border border-blue px-2 py-1 w-full rounded-lg text-white flex justify-center items-center gap-1">
                    <img src="/play.svg" alt="Play video icon" className="-ml-2" />
                    Watch video
                </button>
            </fieldset>
        </section>
    )
}