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

// Mostra todas as turmas
app.get("/turmas", getTurma)

// Mostra todas as turmas ativas
app.get("/turmas/ativas", getTurmaAtiva)

// Pegar turmas por id
app.get("/turmas/:id", getTurmaById)

// Cria uma turma
app.post("/turma/create", createTurma)

// Edita modulo
app.put("/turma/modulo/edit/:id", editModulo)

// ====================================================

// Estudante



//======================================================
// Hobbys

app.post("/hobby/create", createHobby)

app.get("/hobbys", getHobbys)

app.post("/hobby/estudante", createEstudanteHobby)

app.post("/estudante/create", createEstudante)

app.get("/estudante", getStudantes)

app.get("/estudante/hobbys/:idEstudante", getEstudanteHobby)

app.put("/estudante/turma", alterarTurma)
