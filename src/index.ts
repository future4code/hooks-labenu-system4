import { app } from "./app";
import { createTurma } from "./endpoints/turmas/createTurma";
import { editModulo } from "./endpoints/turmas/editModulo";
import { getTurma } from "./endpoints/turmas/getTurma";
import { getTurmaAtiva } from "./endpoints/turmas/getTurmaAtiva";
import { getTurmaById } from "./endpoints/turmas/getTurmaById";

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

//
