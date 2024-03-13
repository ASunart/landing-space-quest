export function Header() {
    return (
        <header
            className="relative flex flex-col items-center">
            <img
                src="/smoke-vector.svg"
                alt="Smoke of Rocket"
            />
            <img
                src="/cloud.svg"
                alt="Cloud Image"
                className="absolute left-0 w-10 top-40" />
            <img
                src="/logo_space.svg"
                alt="Space Quest Logo"
                className="absolute top-24"
            />
        </header>
    )
}