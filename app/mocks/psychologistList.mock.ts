import Pyschologist from "../model/pyschologist.model";

export const PSYCHOLOGIST_LIST_MOCK: Pyschologist[] = [
    {
        id: "8ca23943-702f-48f6-87f5-1effbac85bbd",
        firstName: "Rafaelli",
        lastName: "Cadó",
        nickName: "Rafaelli Cadó",
        bio: "Sou a Chloe e gosto de ajudar as pessoas a terem uma id melhor",
        avatarUrl: "https://thispersondoesnotexist.com",
        gender: "FEMALE",
        sessionPrice: 200,
        crp: "06/170123",
        specialization: "Psicologia do comportamento",
        montlyPrice: 800,
        professionalContact: [
            {
                id: "cd8d25dd-b018-4bd6-a865-40dc2695873a",
                type: "PHONE",
                value: "5599989988"
            },
            {
                id: "b365f56d-9913-4c1a-88d3-e8251925f608",
                type: "EMAIL",
                value: "teste@pidfuturo.com.br"
            }
        ],
        anamnesis: [
            {
                id: "9b0a1d2f-1e7f-42b2-8e9f-7f8b1e2d3c4d",
                name: "Estresse Pós-Traumático"
            },
            {
                id: "f2e1d6c7-8b5a-4c4d-9f2a-3e7c8f1b9a2e",
                name: "Transtorno Alimentar"
            },
            {
                id: "bcf8f8e9-c2d9-4b3e-b4c1-86ad54f3e0c8",
                name: "Transtorno Bipolar"
            },
            {
                id: "28d0f5e2-4f5a-4d58-bc8c-e8b8f7e1e0dc",
                name: "Esquizofrenia"
            },
            {
                id: "b7e4a6f5-1c2d-4f3b-8a7b-9e2f1b5c6d7e",
                name: "Ansiedade Generalizada"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "d1f3c72b-30b2-4b8c-a88f-bb5b2ed0767f",
                name: "Pós-Graduado em Neurociência"
            },
            {
                id: "d1f3c72b-30b2-4b8c-a88f-bb5b2ed0767s",
                name: "Bacharelado em Psicologia"
            }
        ]
    },
    {
        id: "b3e7a4d5-9c8b-4f2e-a4b6-5c8d9e0f1a2c",
        firstName: "Lucas",
        lastName: "Santoro",
        nickName: "Dr. Lucas",
        bio: "Atuo na área clínica há 10 anos, especializado em transtornos de ansiedade e depressão.",
        avatarUrl: "https://thispersondoesnotexist.com",
        gender: "MALE",
        sessionPrice: 100,
        crp: "06/170123",
        specialization: "Psicologia do comportamento",
        montlyPrice: 600,
        professionalContact: [
            {
                id: "fd8c71b9-eebc-4aa7-bf43-0ef52b5f0b0e",
                type: "PHONE",
                value: "5548999765432"
            },
            {
                id: "e45e2d98-0c0b-4c85-b4f0-2a6f6c9a0e3c",
                type: "EMAIL",
                value: "lucas.santoro+consulta@psiclinic.com.br"
            }
        ],
        anamnesis: [
            {
                id: "4c3b1d8f-1a2e-43b4-9f8c-7f6d2e1a2b9a",
                name: "Transtorno de Ansiedade Generalizada"
            },
            {
                id: "1f2e3d4c-5b6a-4d5e-8f9a-0c1b2a3d4e5f",
                name: "Depressão Maior"
            },
            {
                id: "8b9a8b7c-6d5e-4f3a-2b1c-9a8b7c6d5e4f",
                name: "Síndrome do Pânico"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "d9c8b7a6-5e4f-3a2b-1c9d-8e7f6a5b4c3d",
                name: "Mestrado em Psicologia Clínica"
            },
            {
                id: "e3c2b1a9-8d7c-6f5e-4a3b-2c1d9e8f7a6b",
                name: "Especialização em Terapia Cognitivo-Comportamental"
            }
        ]
    },
    {
        id: "c5f8d3a2-4b1e-3c9d-5a8f-7b6e9c0d1f2e",
        firstName: "Gabriel",
        lastName: "Monteiro",
        nickName: "Gabriel Monteiro",
        bio: "Ajudo meus pacientes a enfrentarem desafios emocionais e a encontrar equilíbrio na id.",
        avatarUrl: "https://thispersondoesnotexist.com",
        gender: "MALE",
        sessionPrice: 100,
        crp: "06/170123",
        specialization: "Psicologia do comportamento",
        montlyPrice: 900,
        professionalContact: [
            {
                id: "b8a9c7d6-e5f4-3b2a-1d9c-8e7f6a5b4c3d",
                type: "PHONE",
                value: "5548999345678"
            },
            {
                id: "a2b3c4d5-e6f7-4a5b-3c2d-1e2f3a4b5c6d",
                type: "EMAIL",
                value: "gabriel.monteiro@psiclinicaequilibrio.com"
            }
        ],
        anamnesis: [
            {
                id: "1d9c8e7f-6a5b-4c3d-2e1f-3a4b5c6d7e8",
                name: "Burnout"
            },
            {
                id: "4b5c6d7e-8f9a-5b4c-3d2e-1f3a4b5c6d7e",
                name: "Transtorno de Ansiedade Social"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "c3d2e1f3-a4b5-c6d7-e8f9-a8b7c6d5e4f3",
                name: "Especialização em Terapia Familiar"
            },
            {
                id: "5b4c3d2e-1f3a-4b5c-6d7e-8f9a8b7c6d5e",
                name: "Formação em Psicanálise"
            }
        ]
    },
    {
        id: "f7e6d5c4-b3a2-1f9e-8d7c-6b5a4c3d2e1f",
        firstName: "Juliana",
        lastName: "Ferreira",
        nickName: "Dra. Juliana",
        bio: "Especializada em psicologia organizacional e do trabalho, promovendo bem-estar no ambiente profissional.",
        avatarUrl: "https://thispersondoesnotexist.com",
        gender: "FEMALE",
        professionalContact: [
            {
                id: "87c6b5a-4c3d-2e1f-9e8d-7c6b5a4c3d2e",
                type: "PHONE",
                value: "554999123456"
            },
            {
                id: "1f9e8d7c-6b5a-4c3d-2e1f-9e8d-7c6b5a4c3d2e",
                type: "EMAIL",
                value: "juliana.ferreira@psicoempresas.com"
            }
        ],
        anamnesis: [
            {
                id: "2e1f9e8d-7c6b-5a4c-3d2e-1f9e-8d7c6b5a4c3d",
                name: "Estresse no Trabalho"
            },
            {
                id: "5a4c3d2e-1f9e-8d7c-6b5a-4c3d-2e1f9e8d7c6b",
                name: "Conflitos Interpessoais"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "9e8d7c6b-5a4c-3d2e-1f9e-8d7c6b5a4c3d",
                name: "Mestrado em Psicologia Organizacional"
            },
            {
                id: "1f9e8d7c-6b5a-4c3d-2e1f-9e8d-7c6b5a4c3d2e",
                name: "Especialização em Coaching"
            }
        ]
    },
    {
        id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q",
        firstName: "Rafael",
        lastName: "Machado",
        nickName: "Rafa Machado",
        bio: "Minha missão é ajudar adolescentes e jovens adultos a superarem desafios emocionais e traumas.",
        avatarUrl: "https://thispersondoesnotexist.com",
        gender: "MALE",
        sessionPrice: 100,
        crp: "06/170123",
        specialization: "Psicologia do comportamento",
        montlyPrice: 900,
        professionalContact: [
            {
                id: "j9k0l1m2-n3o4-p5q6-r7s8-t9u0v1w2x3y4z5",
                type: "PHONE",
                value: "5548999234567"
            },
            {
                id: "k0l1m2n3-o4p5-q6r7-s8t9-u0v1-w2x3-y4z5",
                type: "EMAIL",
                value: "rafael.machado@psijovem.com"
            }
        ],
        anamnesis: [
            {
                id: "l1m2n3o4-p5q6-r7s8-t9u0-v1w2-x3y4-z5a6-b7c8-d9e0",
                name: "Trauma de Infância"
            },
            {
                id: "p5q6r7s8-t9u0-v1w2-x3y4-z5a6-b7c8-d9e0f1",
                name: "Depressão Adolescente"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "q6r7s8t9-u0v1-w2x3-y4z5-a6b7-c8d9-e0f1g2",
                name: "Especialização em Psicologia Clínica Infantil"
            },
            {
                id: "r7s8t9u0-v1w2-x3y4-z5a6-b7c8-d9e0f1g2h3",
                name: "Formação em Terapia Psicanalítica"
            }
        ]
    },
    {
        id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p",
        firstName: "Pedro",
        lastName: "Carvalho",
        nickName: "Dr. Pedro",
        bio: "Especializado em terapia de casal e família, ajudando na construção de relacionametos saudáveis.",
        avatarUrl: "https://thispersondoesnotexist.com",
        gender: "MALE",
        professionalContact: [
            {
                id: "hi9j0k1-l2m3n4o5-p6q7r8s9-t0u1v2w3x4",
                type: "PHONE",
                value: "554999567890"
            },
            {
                id: "y5z6a7b8-c9d0e1f2-g3h4i5j6-k7l8m9n0o1",
                type: "EMAIL",
                value: "pedro.carvalho@psi-relacionametos.com"
            }
        ],
        anamnesis: [
            {
                id: "p2q3r4s5-t6u7v8w9-x0y1z2a3-b4c5d6e7f8",
                name: "Terapia de Casal"
            },
            {
                id: "g9h0i1j2-k3l4m5n6-o7p8q9r0-s1t2u3v4w5",
                name: "Terapia Familiar"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "x6y7z8a9-b0c1d2e3-f4g5h6i7-j8k9l0m1n2",
                name: "Especialização em Psicologia de Família"
            },
            {
                id: "o3p4q5r6-s7t8u9v0-w1x2y3z4-a5b6c7d8e9",
                name: "Formação em Mediação de Conflitos"
            }
        ]
    },
    {
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
                id: "q7r8s9t0-u1v2w3x4-y5z6a7b8-c9d0e1f2",
                type: "PHONE",
                value: "5548999123456"
            },
            {
                id: "g7h8i9j0-k1l2m3n4-o5p6q7r8-s9t0u1v2w3",
                type: "EMAIL",
                value: "camila.oliveira@psicoeducacional.com"
            }
        ],
        anamnesis: [
            {
                id: "x4y5z6a7-b8c9d0e1-f2g3h4i5-j6k7l8m9n0",
                name: "Desenvolvimento Infantil"
            },
            {
                id: "o1p2q3r4-s5t6u7v8-w9x0y1z2-a3b4c5d6e",
                name: "Orientação Vocacional"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "f7g8h9i0-j1k2l3m4-n5o6p7q8-r9s0t1u2v3",
                name: "Mestrado em Psicologia Educacional"
            },
            {
                id: "w4x5y6z7-a8b9c0d1-e2f3g4h5-i6j7k8l9m0",
                name: "Especialização em Psicopedagogia"
            }
        ]
    },
    {
        id: "q8r9s0t1-u2v3w4x5-y6z7a8b9-c0d1e2f3g4h",
        firstName: "Thiago",
        lastName: "Lima",
        nickName: "Dr. Thiago",
        bio: "Com ampla experiência em psicologia do esporte, auxilio atletas a alcançarem seu potencial máximo.",
        avatarUrl: "https://thispersondoesnotexist.com",
        gender: "MALE",
        sessionPrice: 100,
        crp: "06/170123",
        specialization: "Psicologia do comportamento",
        montlyPrice: 900,
        professionalContact: [
            {
                id: "i3j4k5l6-m7n8o9p0-q1r2s3t4-u5v6w7x8",
                type: "PHONE",
                value: "5548999234567"
            },
            {
                id: "y9z0a1b2-c3d4e5f6-g7h8i9j0-k1l2m3n4o5",
                type: "EMAIL",
                value: "thiago.lima@psicoesportiva.com"
            }
        ],
        anamnesis: [
            {
                id: "p6q7r8s9-t0u1v2w3-x4y5z6a7-b8c9d0e1f2",
                name: "Psicologia do Esporte"
            },
            {
                id: "g3h4i5j6-k7l8m9n0-o1p2q3r4-s5t6u7v8",
                name: "Desempenho Psicológico"
            }
        ],
        professionalCarreerTrail: [
            {
                id: "w9x0y1z2-a3b4c5d6-e7f8g9h0-i1j2k3l4m5",
                name: "Especialização em Psicologia do Esporte"
            },
            {
                id: "n6o7p8q9-r0s1t2u3-v4w5x6y7-z8a9b0c1",
                name: "Formação em Coaching Esportivo"
            }
        ]
    }
]