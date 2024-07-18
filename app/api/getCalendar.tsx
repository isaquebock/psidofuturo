import { Calendar } from "../model/calendar.model";


export async function getCalendar(): Promise<Calendar[]> {
    const res = await fetch(`http://localhost:3000/calendar`)

    if(!res.ok) {
        throw new Error('Não foi possivel carregar o calendário!');
    }

    return res.json();
}
