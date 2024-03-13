import { boxType } from "../const/boxType"

export function BoxType() {
    
    return (
        <section className="flex flex-col gap-12 px-4 lg:flex-row lg:flex-wrap lg:gap-16 lg:w-full">
            {
                boxType.map(({ id, title, content, textColor, vector, borderColor }) => {
                    const h1Style = `${textColor} text-2xl font-regular lg:text-3xl`
                    return <article key={id} 
                    className={`relative bg-[rgba(255,255,255,0.1)] p-6 border ${borderColor} rounded-lg lg:w-2/5`}>
                        <img src={vector} className="absolute w-10 -top-4 -left-4" />
                        <h3 className={h1Style}>{title}</h3>
                        <p className="lg:text-xl">{content}</p>
                    </article>
                })
            }

        </section>
    )
}