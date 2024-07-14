export async function getPsychologistById(id: string): Promise<any> {
    const res = await fetch(`http://localhost:3000/users/${id}`)
    return res.json();
}

export async function getPsychologistList(): Promise<any> {
    const res = await fetch(`http://localhost:3000/users/`)
    return res.json();
}