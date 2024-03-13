import { boxType } from "../const/boxType"

export function BoxType() {
    
    return (
        <>

            {
                boxType.map(({ id, title, content, textColor, vector, borderColor }) => {
                    const h1Style = `${textColor} text-2xl font-regular`
                    return <article key={id} className={`relative bg-[rgba(255,255,255,0.1)] p-6 border ${borderColor} rounded-lg`}>
                        <img src={vector} className="absolute w-10 -top-4 -left-4" />
                        <h3 className={h1Style}>{title}</h3>
                        <p>{content}</p>
                    </article>
                })
            }

        </>
    )
}