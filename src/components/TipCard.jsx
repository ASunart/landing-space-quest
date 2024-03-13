import { tips } from "../const/tips";

export function TipCard() {
    return (
        <section className="flex flex-col gap-12 px-4 lg:gap-16 lg:w-full">
            {
                tips.map(({id, content, planet, borderColor}) => {
                    return <article key={id} 
                    className={`py-4 bg-[rgba(255,255,255,0.1)] px-8 rounded-lg border ${borderColor} flex relative items-center lg:w-3/4`}>
                        <img 
                        src={planet}
                        className="absolute w-20 -left-8 rotate-45 lg:w-40 lg:-left-16"
                         />
                        <p className="ml-6 lg:ml-20 lg:text-xl">{content}</p>
                    </article>
                })
            }

        </section>
    )
}