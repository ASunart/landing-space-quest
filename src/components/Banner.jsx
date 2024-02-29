export function Banner() {
    return (
        <section className="flex flex-col items-center gap-8">
            <article>
                <h1 className="font-bold text-xl">Titulo enganche para el usuario</h1>
                <p className="font-regular text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </article>
            <div className="w-[250px] h-[250px] bg-black my-3"></div>
            <fieldset className="flex justify-between w-full gap-4">
                <button className="bg-violet-900 px-2 py-1 w-full rounded-lg text-white">Play now</button>
                <button className="border border-violet-900 px-2 py-1 w-full rounded-lg text-violet-900">Watch video</button>
            </fieldset>
        </section>
    )
}