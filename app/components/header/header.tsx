import Image from "next/image"; 

export default function Header() {
    return (
        <header className="z-10 w-full flex flex-wrap items-center justify-between text-sm lg:flex text-black">
            <h1 className="left-0 top-0 flex w-full justify-start lg:static">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={200}
                    height={50}
                    priority
                />
            </h1>
            <div className="bottom-0 left-0 flex  flex-wrap w-full items-end justify-start bg-gradient-to-t lg:static lg:size-auto bg-none">
                <h2 className="text-red-700 py-6 w-2/3 font-bold text-5xl">Encontre a profissional certa e transforme sua vida.</h2>
                <p className="text-blue-900 w-full">Encontramos alguns psis que se encaixam em seu perfil, veja mais detalhes de cada profissional e agende sua primeira consulta.</p>
            </div>
        </header>
    )
}