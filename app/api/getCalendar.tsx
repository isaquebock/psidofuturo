

export async function getCalendar(): Promise<any> {
    const res = await fetch(`http://localhost:3000/calendar`)

    if(!res.ok) {
        throw new Error('Não foi possivel carregar o calendário!');
    }

    return res.json();
}
