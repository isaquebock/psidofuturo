import Image from "next/image"
import Link from "next/link"

interface ButtonProps {
    title: string,
    icon: boolean,
    full: boolean
}

export default function Button({title, icon, full = false}: ButtonProps) {
    return (
        <Link href="/" className={`flex bg-red-600 rounded-full px-6 m-auto ${full ? `w-full my-1 justify-center p-2` : 'w-max my-8'}`}>
            {
                icon &&
                <Image
                    src="/arrow-left.svg"
                    alt="Seta para esquerda"
                    width={24}
                    height={24}
                ></Image>
            }
            <p className="m-2 text-white">{title}</p>
        </Link>
    )
}