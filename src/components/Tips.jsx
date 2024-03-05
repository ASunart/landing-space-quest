import { tips } from "../const/tips";

export function Tips() {
    return (
        <>
            <h2 className="font-bold text-xl text-blue-200 md:text-3xl">TIPS & TRICKS</h2>
            <section className="flex flex-col gap-6 lg:flex-row">
                {
                    tips.map(({ id, content, image }) => {
                        return <article className="flex gap-2 w-full justify-start items-center" key={id}>
                            <img src={image} />
                            <p className="font-regular text-sm text-white md:text-lg">{content}</p>
                        </article>
                    })
                }

            </section>
        </>
    )
}