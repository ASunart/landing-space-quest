import { cardInstructions } from "../const/cardInstructions";

export function CardInstruction() {
    return (
        <>
            <div>
                <h2 className="font-bold text-xl text-blue-200 md:text-3xl">HOW TO PLAY?</h2>
                <p className="font-regular text-sm text-white md:text-lg">Cards function as dice to move the tiles. There are three groups with different difficulties</p>
            </div>
            <section className="flex flex-col gap-6 lg:flex-row">
                {
                    cardInstructions.map(({ id, difficulty, content, color, image }) => {
                        return <article className="flex gap-1 w-full justify-start items-center" key={id}>
                            <img
                                src={image}
                                alt={`${difficulty} card image`}
                                className="w-24" />
                            <div className="">
                                <h4 className={`${color} md:text-lg`}>{difficulty}</h4>
                                <p className="font-regular text-sm text-white md:text-lg">{content}</p>
                            </div>
                        </article>

                    })
                }
            </section>
        </>

    )
}