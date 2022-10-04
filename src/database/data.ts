// import { Turma } from "../models/User";
// import { PurchaseDB } from "../models/Purchase";
import { User } from "../models/User";

export const turma: Turma[] = [
    {
        id: Date.now(),
        nome: "Astro Dev Jr",
        modulo: ""
    },
    {
        id: Date.now(),
        nome: "Dev Pleno",
        modulo: 2
    }
]

export const estudante: Estudante[] = [
    {
        id: Date.now(),
        name: "Severino Oliveira",
        email: "severino@gmail.com",
        data_nasc: 29/9/1983
    },
    {
        id: Date.now(),
        name: "Ana Santos",
        email: "ana@gmail.com",
        data_nasc: 19/7/1993    
    }
]

export const hobby: Hobby[] = [
    {
        id: Date.now(),
        name: "Jogadar video game" 
    },
    {
        id: Date.now(),
        name: "Praticar esporte"        
    }
]

export const docente: Docente[] = [
    {
        id: Date.now(),
        name: "Professora Glie" ,
        email: "glie@hotmail.com",
        data_nasc: 3/8/1980
    },
    {
        id: Date.now(),
        name: "Professora Diogines" ,
        email: "diognes@hotmail.com",
        data_nasc: 6/11/1984       
    }
]
