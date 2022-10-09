import { app } from "./app";
import { createEstudante } from "./endpoints/estudantes/createEstudante";
import { createEstudanteHobby } from "./endpoints/estudantes_hobbys/createEstudanteHobby";
import { createHobby } from "./endpoints/hobbys/createHobby";
import { getAllHobbys } from "./endpoints/hobbys/getAllHobbys";
import { createTurma } from "./endpoints/turmas/createTurma";
import { editModulo } from "./endpoints/turmas/editModulo";
import { getTurma } from "./endpoints/turmas/getTurma";
import { getTurmaAtiva } from "./endpoints/turmas/getTurmaAtiva";
import { getTurmaById } from "./endpoints/turmas/getTurmaById";
import {getEstudanteHobby} from "./endpoints/estudantes_hobbys/getHobbyEstudent"
import getStudantes, { getStudanteByName } from "./endpoints/estudantes/getStudanteByName";
import alterarTurma from "./endpoints/estudantes/changeTurma";
import { getAllStudante } from "./endpoints/estudantes/getAllStudante";
import { createDocente } from "./endpoints/docente/createDocente";
import { getAllDocente } from "./endpoints/docente/getAllDocente";

//Turma //////////////////////////////////////////////////////////////

// Cria uma turma
app.post("/turma/create", createTurma)

// Mostra todas as turmas
app.get("/turmas", getTurma)

// Mostra todas as turmas ativas
app.get("/turmas/ativas", getTurmaAtiva)

// Busca turmas por id
app.get("/turmas/:id", getTurmaById)

// Edita modulo da turma
app.put("/turma/modulo/edit/:id", editModulo)

// Estudante /////////////////////////////////////////////////////////

// Cria novo estudante
app.post("estudante/create", createEstudante)

// Busca todos os estudantes
app.get("/estudantes", getAllStudante)

// Busca estudante pelo nome
app.get("/estudante/nome", getStudanteByName)

// Altera estudante de turma
app.put("/estudante/turma/edit", alterarTurma)

// Busca os hoobys dos estudantes
app.get("/estudante/hobbys/:idEstudante", getEstudanteHobby)


// Docente ///////////////////////////////////////////////////////////

// Cria novo docente
app.post("/docente/create", createDocente)

// Pega todos os docentes
app.get("/docentes", getAllDocente)

// Altera docente de turma
app.put("",)

// Hobbys ///////////////////////////////////////////////////////////

// Cria novo hobby
app.post("/hobby/create", createHobby)

// Pega todos os hobbys
app.get("/hobbys", getAllHobbys)

// Cria  hobby para estudante
app.post("/hobby/estudante", createEstudanteHobby)

//////////////////////////////////////////////////////////////////////