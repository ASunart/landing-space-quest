import { tips } from "../const/tips";

export function Tips() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="font-bold text-xl">Tips & Tricks</h2>
            {
                tips.map(({ id, content }) => {
                    return <article className="flex gap-2 w-full justify-start" key={id}>
                        <div className="w-1/2 bg-gray-500"></div>
                        <p className="font-regular text-sm">{content}</p>
                    </article>
                })
            }

        </section>
    )
}