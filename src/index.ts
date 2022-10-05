import { app } from "./app";
import { createTurma } from "./endpoints/createTurma";
import { getTurma } from "./endpoints/getTurma";


// Get Turma
app.get("/getallturma", getTurma)

// Get Turma Ativa


// Create Turma
app.post("/createturma", createTurma)

