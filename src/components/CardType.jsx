import { cardType } from "../const/cardType"

export function CardType() {
    return (
        <>
            {
                cardType.map(({id, planet, type, content, color, image, flexType, position, dtPosition}) => {
                    return <article key={id} className={`text-white flex ${flexType} items-center relative font-regular ${position} lg:w-2/3 lg:${dtPosition}`}>
                        <img
                            src={image}
                            alt={planet}
                            className="w-36 lg:w-96" />
                        <div>
                            <span className="flex flex-col">
                                <h3 className={`text-xl ${color} lg:text-5xl`}>{planet}</h3>
                                <p className="text-sm -mt-1 opacity-40 lg:text-2xl">{type}</p>
                            </span>
                            <p className="text-sm lg:text-xl">{content}</p>
                        </div>
                    </article>
                })
            }

        </>
    )
}