import Link from "next/link";

export default function Menu() {
    return (
        <nav className="bg-[#6A9DB4] p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">Worlds in Collision</h1>
            <ul className="flex space-x-8">
            <li>
                <Link href="/" className="text-white hover:text-gray-300">
                Home
                </Link>
            </li>
            <li>
                <Link href="/orbita" className="text-white hover:text-gray-300">
                Órbitas
                </Link>
            </li>
            <li>
                <Link href="/cronologia" className="text-white hover:text-gray-300">
                Cronologia
                </Link>
            </li>
            <li>
                <Link href="/velocidade" className="text-white hover:text-gray-300">
                Velocidade
                </Link>
            </li>
            <li>
                <Link href="/gravitacionais" className="text-white hover:text-gray-300">
                Gravitacionais
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}
