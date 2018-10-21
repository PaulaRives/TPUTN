import { ICurso} from './app/curso-module/icurso';

export const CURSOS: ICurso[] = [
    {
        id: 22,
        titulo: "Angular",
        fechaInicio: 1551657600000,
        fechaFin: 1549238400000,
        asistentes: [
            "Jimena Sanchez",
            "Joaquín Ferreyra",
            "Adolfo Carrasco",
            "Juan Ignacio López",
            "Nadia de Rosa"
        ],
        profesor: [
            "Fernando Arias"
        ],
        laboratorio: 7,
        estado: 0
    },
    {
        id: 24,
        titulo: "Linux",
        fechaInicio: 1549411200000,
        fechaFin: 1551830400000,
        asistentes: [
            "Leandro Pereyra",
            "Daniela Cardozo",
            "Ayelén Montenegro"
        ],
        profesor: [
            "Darío Cuda"
        ],
        laboratorio: 5,
        estado: 0
    },
    {
        id: 30,
        titulo: "React",
        fechaInicio: 1552003200000,
        fechaFin: 1549584000000,
        asistentes: [
            "Nicolas Martinez",
            "Adolfo Buzzo",
            "Nadia de Rosa"
        ],
        profesor: [
            "Ricardo Aiello"
        ],
        laboratorio: 3,
        estado: 0
    }
];
