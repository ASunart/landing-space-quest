import { cardInstructions } from "../const/cardInstructions";

export function CardInstruction() {
    return (
        <section className="flex flex-col gap-6">
            <div>
            <h2 className="font-bold text-xl">How to play?</h2>
            <p className="font-regular text-sm">Cards function as dice to move the tiles. There are three groups with different difficulties</p>
            </div>
            {
                cardInstructions.map(({ id, difficulty, content }) => {
                    return <article className="flex gap-2 w-full justify-start" key={id}>
                        <div className="w-1/2 bg-gray-500"></div>
                        <div className="">
                            <h4>{difficulty}</h4>
                            <p className="font-regular text-sm">{content}</p>
                        </div>
                    </article>

                })
            }
        </section>
    )
}