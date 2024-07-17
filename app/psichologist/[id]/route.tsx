import { PSYCHOLOGIST_LIST_MOCK } from "@/app/mocks/psychologistList.mock";
import Pyschologist from "@/app/model/pyschologist.model";

export async function GET(request: Request,
    { params }: { params: { id: string } }) { 
    const data = PSYCHOLOGIST_LIST_MOCK;
    
    const id = params.id;
    const dataFromid = data.filter((dataItem: Pyschologist) => dataItem.id === id);
    
    console.log(dataFromid, request)

    return new Response(JSON.stringify(dataFromid[0]));
}