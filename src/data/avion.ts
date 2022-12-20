
export interface avion{
    idAvion:number;
    nom:string;
    matricule:string;
}

const avions: avion[] = [
    {
        idAvion:1,
        nom:'Avion1',
        matricule:'2022TAD'
    }
]

export const getAvions = () => avions;

export const getMessage = (id: number) => avions.find(a => a.idAvion === id);