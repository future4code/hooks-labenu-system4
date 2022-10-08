import { app } from "./app";
import { createEstudante } from "./endpoints/estudantes/createEstudante";
import { createEstudanteHobby } from "./endpoints/estudantes_hobbys/createEstudanteHobby";
import { createHobby } from "./endpoints/hobbys/createHobby";
import { getHobbys } from "./endpoints/hobbys/getHobbys";
import { createTurma } from "./endpoints/turmas/createTurma";
import { editModulo } from "./endpoints/turmas/editModulo";
import { getTurma } from "./endpoints/turmas/getTurma";
import { getTurmaAtiva } from "./endpoints/turmas/getTurmaAtiva";
import { getTurmaById } from "./endpoints/turmas/getTurmaById";
import {getEstudanteHobby} from "./endpoints/estudantes_hobbys/getHobbyEstudent"
import getStudantes from "./endpoints/estudantes/getStudantes";
import alterarTurma from "./endpoints/estudantes/alterarTurma";

//Turmas

// Cria uma turma
app.post("/turma/create", createTurma)

// Mostra todas as turmas
app.get("/turmas", getTurma)

// Mostra todas as turmas ativas
app.get("/turmas/ativas", getTurmaAtiva)

// Pega turmas por id
app.get("/turmas/:id", getTurmaById)

// Edita modulo da turma
app.put("/turma/modulo/edit/:id", editModulo)

// ====================================================

// Estudante

// Cria novo estudante
app.post("estudante/create", createEstudante)

// Busca todos os estudantes
app.get("/estudante", getStudantes)

// Altera estudante de turma
app.put("/estudante/turma/edit", alterarTurma)

// Busca os hoobys dos estudantes
app.get("/estudante/hobbys/:idEstudante", getEstudanteHobby)

//======================================================

// Hobbys

// Cria novo hobby
app.post("/hobby/create", createHobby)

// Pega todos os hobbys
app.get("/hobbys", getHobbys)

// Cria  hobby para estudante
app.post("/hobby/estudante", createEstudanteHobby)


//======================================================

// 

//======================================================

// 

//======================================================

// 

//======================================================

// 

