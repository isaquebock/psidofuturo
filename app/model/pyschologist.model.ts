export default interface Pyschologist {
    id: string,
    firstName: string,
    lastName: string,
    nickName: string,
    bio: string,
    avatarUrl: string,
    gender: string,
    sessionPrice?: number,
    crp?: string,
    specialization?: string,
    montlyPrice?: number,
    professionalContact: ProfessionalContact[],
    anamnesis: Anamnese[]
    professionalCarreerTrail: ProfessionalCarreerTrail[]
}

export interface ProfessionalContact {
    id: string,
    type: string,
    value: string
}

export interface Anamnese {
    id: string,
    name: string
}

export interface ProfessionalCarreerTrail {
    id: string,
    name: string
}