import { squareTypes } from "../const/squareTypes";

export function SquareTypes() {
    return (
        <section className="flex flex-col gap-6">
            <p className="font-regular text-sm">Along the board you will find different squares with QRs that activate different events:</p>

            {
                squareTypes.map(({ id, type, content }) => {
                    return <article className="flex gap-2 w-full justify-start" key={id}>
                        <div className="w-1/2 bg-gray-500"></div>
                        <div className="">
                            <h4>{type}</h4>
                            <p className="font-regular text-sm">{content}</p>
                        </div>
                    </article>
                })
            }

        </section>
    )
}