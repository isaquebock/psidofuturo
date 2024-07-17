import Pyschologist from "../model/pyschologist.model";

export async function getPsychologistById(id: string): Promise<Pyschologist> {
    const res = await fetch(`http://localhost:3000/psichologist/${id}`)

    if(!res.ok) {
        throw new Error('Não foi possivel carregar a listagem!');
    }

    return res.json();
}

export async function getPsychologistList(): Promise<Pyschologist[]> {
    const res = await fetch(`http://localhost:3000/psichologist/`)

    if(!res.ok) {
        throw new Error('Não foi possivel carregar os dados!');
    }

    return res.json();
}