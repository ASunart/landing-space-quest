import { tips } from "../const/tips";

export function TipCard() {
    return (
        <>
            {
                tips.map(({id, content, planet, borderColor}) => {
                    return <article key={id} 
                    className={`py-4 bg-[rgba(255,255,255,0.1)] px-8 rounded-lg border ${borderColor} flex relative items-center`}>
                        <img 
                        src={planet}
                        className="absolute w-20 -left-8 rotate-45"
                         />
                        <p className="ml-6">{content}</p>
                    </article>
                })
            }

        </>
    )
}