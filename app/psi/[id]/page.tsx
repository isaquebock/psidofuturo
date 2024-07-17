import {getPsychologistById} from "@/app/api/getPsychologistList";
import Card from "@/app/components/card/card";
import PsychologistCard from "@/app/components/psychologistCard/psychologistCard";
import Tag from "../components/tag/tag";
import Image from "next/image";
import Button from "@/app/components/button/button";
import Calendar from "../components/calendar/calendar";
import { getCalendar } from "@/app/api/getCalendar";
import Link from "next/link";
import Error from "./error";

interface PsychologistDetails {
    params: {
        id: string
    }
}

export default async function PsychologistDetails({ params }: PsychologistDetails) {
    try {
        console.log(params.id)
        const data = await getPsychologistById(params.id);
        const calendar = await getCalendar();

        return (
            <main className="flex w-full justify-center p-5 items-start flex-wrap">
                <div className="w-full">
                    <Link href={`/`}>
                        <Button title={'Retornar à Lista'} icon={true} full={false}></Button>
                    </Link>
                </div>
                <div className="flex justify-center p-5 flex-col items-center">

        
                    <PsychologistCard key={data.id} data={data} information={false} />

                    <Card title="Descrição pessoal">
                        <p className="text-gray-500 leading-5">
                            {data.bio}
                        </p>
                    </Card>

                    <Card title="Anamnese">
                        {data.anamnesis.map((anamnese: any) => {
                            return (<Tag key={anamnese.id} props={anamnese.name}></Tag>)
                        })}
                    </Card>

                    <Card title="Formação Profissional">
                        {data.professionalCarreerTrail.map((carreerTrail: any) => {
                            return (
                                <span key={carreerTrail.id} className="flex mb-5">
                                    <Image
                                        src="/professional.svg"
                                        alt="Logo"
                                        width={24}
                                        height={24}
                                    />
                                    <p className="ml-2">{carreerTrail.name}</p>
                                </span>
                            )
                        })}
                    </Card>
                </div>
                <div className="flex justify-center p-5 flex-col items-center">
                    <Calendar calendar={calendar}></Calendar>
                </div>
            </main>
        )
    } catch {
        console.log(params.id, 'erro')
        return (
            <Error />
        )
    }
}