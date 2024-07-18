import { Calendar } from "../model/calendar.model";

export async function getCalendar(): Promise<Calendar[]> {
    const res = await fetch(`https://psidofuturo-lxlo.vercel.app/calendar`)
    
    console.log(url)
    
    if(!res.ok) {
        throw new Error('Não foi possivel carregar o calendário!');
    }

    return res.json();
}
