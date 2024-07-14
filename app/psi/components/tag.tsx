import Image from "next/image"

export default function tag({props}: any) {
    return(
        <span className="p-2 bg-red-100 flex mr-1 rounded-md mb-2">
            <p className="text-red-950">{props}</p>
            <Image
                src="/check.svg"
                alt="Logo"
                width={20}
                height={20}
            />
        </span>
    )
}