import { useState } from "react"
import { navOptions } from "../const/navOptions"

export function Header() {
    const [menu, setMenu] = useState(false)

    const handleMobileMenu = () => {
        setMenu(prevState => !prevState)
    }

    const mobileMenu = menu ? "absolute bg-black flex flex-col gap-2 left-0 p-4 w-full top-20 h-full" : 'hidden'

    return (
        <header className="flex justify-between py-4 px-3 items-center">
            <img
                src="/logo_space.svg"
                alt="Space Quest Logo"
                className="w-24 cursor-pointer" />
            <nav>
                <div
                    className="w-4 h-4 bg-black cursor-pointer"
                    onClick={handleMobileMenu}></div>
                <ul className={mobileMenu}>
                    {
                        navOptions.map(({id, label}) => {
                            return <li 
                            key={id} 
                            className="text-white cursor-pointer"
                            >{label}</li>
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}