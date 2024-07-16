import Pyschologist from "../model/pyschologist.model";

export const PSYCHOLOGIST_MOCK: Pyschologist = {
    id: "b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p",
    firstName: "Camila",
    lastName: "Oliveira",
    nickName: "Camila Oliveira",
    bio: "Especialista em psicologia educacional, contribuindo para o desenvolvimento emocional de crianças e adolescentes.",
    avatarUrl: "https://thispersondoesnotexist.com",
    gender: "FEMALE",
    sessionPrice: 100,
    crp: "06/170123",
    specialization: "Psicologia do comportamento",
    montlyPrice: 900,
    professionalContact: [
        {
            "id": "q7r8s9t0-u1v2w3x4-y5z6a7b8-c9d0e1f2",
            "type": "PHONE",
            "value": "5548999123456"
        },
        {
            "id": "g7h8i9j0-k1l2m3n4-o5p6q7r8-s9t0u1v2w3",
            "type": "EMAIL",
            "value": "camila.oliveira@psicoeducacional.com"
        }
    ],
    anamnesis: [
        {
            "id": "x4y5z6a7-b8c9d0e1-f2g3h4i5-j6k7l8m9n0",
            "name": "Desenvolvimento Infantil"
        },
        {
            "id": "o1p2q3r4-s5t6u7v8-w9x0y1z2-a3b4c5d6e",
            "name": "Orientação Vocacional"
        }
    ],
    professionalCarreerTrail: [
        {
            "id": "f7g8h9i0-j1k2l3m4-n5o6p7q8-r9s0t1u2v3",
            "name": "Mestrado em Psicologia Educacional"
        },
        {
            "id": "w4x5y6z7-a8b9c0d1-e2f3g4h5-i6j7k8l9m0",
            "name": "Especialização em Psicopedagogia"
        }
    ]
}

