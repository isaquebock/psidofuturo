
import { getPsychologistList } from "@/app/api/getPsychologistList";
import PsychologistCard from "../psychologistCard/psychologistCard";

export default async function PsychologistList() {
    const data = await getPsychologistList();
    
    return (
        <div className="flex text-black flex-wrap mt-24">
            {data.map((item: any) => (
                <PsychologistCard data={item} information={true} />
            ))}
        </div>
      );
}