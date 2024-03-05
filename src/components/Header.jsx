import { useState } from "react"
import { navOptions } from "../const/navOptions"

export function Header() {
    const [menu, setMenu] = useState(false)
    const [menuImg, setMenuImg] = useState("/menu.svg")

    const handleMobileMenu = () => {
        setMenu(prevState => !prevState)
        !menu ? setMenuImg('/close.svg') : setMenuImg('/menu.svg')
    }

    const mobileMenu = menu ? "absolute bg-[#040A22] z-10 flex flex-col gap-3 left-0 p-4 w-full top-20 h-full mt-3 " : 'hidden md:flex md:gap-16'

    return (
        <header className="flex justify-between py-4 px-3 items-center md:px-12">
            <img
                src="/logo_space.svg"
                alt="Space Quest Logo"
                className="w-24 cursor-pointer hover:scale-105" />
            <nav>
                <img src={menuImg} alt="Hamburger menu" onClick={handleMobileMenu} className="inline md:hidden" />
                <ul className={mobileMenu}>
                    {
                        navOptions.map(({ id, label }) => {
                            return <a href={`#${id}`} key={id} >
                                <li
                                    className="text-white cursor-pointer text-2xl hover:text-pink"
                                >{label}</li>
                            </a>
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}