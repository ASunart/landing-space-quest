import { cardType } from "../const/cardType"

export function CardType() {
    cardType
    return (
        <>
            {
                cardType.map(({id, planet, type, content, color, image, flexType, position}) => {
                    return <article key={id} className={`text-white flex ${flexType} items-center relative font-regular ${position}`}>
                        <img
                            src={image}
                            alt={planet}
                            className="w-36" />
                        <div>
                            <span className="flex flex-col">
                                <h3 className={`text-xl ${color}`}>{planet}</h3>
                                <p className="text-sm -mt-1 opacity-40">{type}</p>
                            </span>
                            <p className="text-sm">{content}</p>
                        </div>
                    </article>
                })
            }

        </>
    )
}