interface CardProps {   
    title: string;
    children: any;
}

export default function Card({title, children}: CardProps) {
    return (
        <div className="flex shadow-default flex-wrap text-black p-10 bg-white rounded-2xl max-w-lg m-2 w-full border-1 border-solid border-gray-100" data-testid="confirmed-schedule">
            <h4 className="w-full text-gray-950 font-semibold mb-5">{title}</h4>
            {children}
        </div>
    )
}