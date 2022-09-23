

interface SeedData { 
    entries: SeedEntry[];
}



interface SeedEntry { 
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries : [
        {
            description: 'Pendiente: Id officia labore consectetur do qui tempor amet incididunt Lorem consectetur occaecat.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En Progreso: Id eiusmod qui voluptate quis Lorem veniam laborum nisi do sint do laborum.',
            status: 'in-progress',
            createdAt: Date.now() - 10000000000,

        },
        {
            description: 'Completada: Elit cillum cillum id velit culpa.',
            status: 'finished',
            createdAt: Date.now() - 1000000,
        },
    ],
}