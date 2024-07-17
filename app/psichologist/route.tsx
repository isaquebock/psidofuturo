import { PSYCHOLOGIST_LIST_MOCK } from "../mocks/psychologistList.mock";

export async function GET() { 
    const data =  JSON.stringify(PSYCHOLOGIST_LIST_MOCK);
    return new Response(data)
}