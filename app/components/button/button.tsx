'use client';

import Image from "next/image"
interface ButtonProps {
    title: string,
    icon: boolean,
    full: boolean,
    action?: any,
}

export default function Button({title, icon, full = false, action}: ButtonProps) {

    return (
        <button className={`flex bg-red-600 rounded-full px-6 m-auto ${full ? `w-full my-1 justify-center p-2` : 'w-max my-8'}`} onClick={action}>
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
        </button>
    )
}