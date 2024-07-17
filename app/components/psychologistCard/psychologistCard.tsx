'use client';

import Pyschologist from "@/app/model/pyschologist.model";
import Image from "next/image";
import Link from "next/link";



interface PsychologistCardProps {
  data: Pyschologist
  information: boolean
}

export default function PsychologistCard({ data, information }: PsychologistCardProps) {    
  return (
      <div className={`shadow-default flex flex-wrap border-1 border-solid border-gray-100 text-black p-10 bg-white rounded-2xl ${information ? 'max-w-md' : 'max-w-lg'} m-2`}>
        <div className="flex w-full mb-5">
          <div className="w-20 h-20  mr-4 relative">
          <Image
              fill
              src={data.avatarUrl}
              alt="Foto do Psicólogo"
              className="rounded-full"
            />
          </div>
          <div className="w-9/12">
            <h4 className="text-blue-900 font-bold text-base">{data.nickName}</h4>
            { data.specialization && <p className="text-gray-500">{data.specialization}</p> }
            { data.crp && <p className="text-gray-500">{`CRP: ${data.crp}`}</p> }
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex w-1/2 flex-wrap mr-1">
            <span className="text-gray-500 w-full mb-1">Primeira sessão</span>
            <button className="text-gray-500 cursor-default w-full bg-gray-100 p-2 rounded-md">{data.sessionPrice ? `R$ ${data.sessionPrice}` : 'Sem custo'}</button>
          </div>
          <div className="flex w-1/2 flex-wrap ml-1">
            <span className="text-gray-500 w-full mb-1">Plano mensal</span>
            <button className="text-green-900 cursor-default w-full bg-green-100 font-semibold p-2 rounded-md">{data.montlyPrice ? `R$ ${data.montlyPrice}` : 'A combinar'}</button>
          </div>
        </div>

        {
          information && 
          <div className="flex w-full mt-5 flex-wrap text-sm leading-4">
            <p className="w-full text-gray-500">{data.bio}</p>
            <Link href={`/psi/${data.id}`} className="text-blue-link underline decoration-solid cursor-pointer mt-1">Ver perfil completo</Link>
          </div>
        }
      </div>
    );
}