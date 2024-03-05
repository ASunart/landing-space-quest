import { squareTypes } from "../const/squareTypes";

export function SquareTypes() {
    return (
        <>
            <p className="font-regular text-sm text-white md:text-lg">Along the board you will find different squares with QRs that activate different events:</p>
            <section className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:w-full mb-3">
                {
                    squareTypes.map(({ id, type, content, color }) => {
                        return <article className="flex gap-4 w-full justify-start items-center lg:w-[23%] lg:items-start" key={id}>
                            <div className={`w-4 h-4 bg-${color} not-sr-only`} aria-label={`Square of ${color} color`}></div>
                            <div className="w-full">
                                <h4 className={`text-${color} md:text-lg`}>{type}</h4>
                                <p className="font-regular text-sm text-white md:text-lg">{content}</p>
                            </div>
                        </article>
                    })
                }

            </section>
        </>
    )
}