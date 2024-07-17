import { getPsychologistList } from "@/app/api/getPsychologistList";
import PsychologistCard from "../psychologistCard/psychologistCard";
import Pyschologist from "@/app/model/pyschologist.model";
import Error from "@/app/error";

export default async function PsychologistList() {
    try {
        const data: Pyschologist[] = await getPsychologistList();
    
        return (
            <div className="flex text-black flex-wrap mt-24">
                {data.map((item: Pyschologist) => (
                    <PsychologistCard key={item.id} data={item} information={true} />
                ))}
            </div>
          );
    } catch {
        return (
            <Error />
          );
    }
}   