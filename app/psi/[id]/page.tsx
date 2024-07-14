import {getPsychologistById} from "@/app/api/getPsychologistList";
import Card from "@/app/components/card/card";
import PsychologistCard from "@/app/components/psychologistCard/psychologistCard";
import Tag from "../components/tag";
import Image from "next/image";
import Button from "@/app/components/button/button";

interface PsychologistDetails {
    params: {
        id: string
    }
}

export default async function PsychologistDetails({ params }: PsychologistDetails) {
    const data = await getPsychologistById(params.id);

    return (
        <main className="flex w-full justify-center p-5 flex-col items-center">
            <Button title={'Retornar à Lista'} icon={true}></Button>

            <PsychologistCard data={data} information={false} />

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
        </main>
    )
}