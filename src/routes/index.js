const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const atendimentoController = require("../controllers/atendimentoController");
const authController = require("../controllers/authController");
const loginValidator = require("../validators/psicologos/loginValidator");
const idValidator = require("../validators/id/idValidator");
const auth = require("../middlewares/auth");

const routes = express.Router();

routes.get("/paciente/listar", idValidator, pacienteController.listarPaciente);
routes.post("/paciente/cadastrar", auth, pacienteController.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", idValidator, pacienteController.deletarPaciente);
routes.put("/paciente/:id/atualizar", idValidator, pacienteController.atualizarPaciente);


routes.get("/psicologo/listar", psicologoController.listarPsicologo);
routes.post("/psicologo/cadastrar", loginValidator, authController, psicologoController.cadastrarPsicologo);
routes.delete("/psicologo/:id/deletar", idValidator, psicologoController.deletarPsicologo);
routes.put("/psicologo/:id/atualizar", idValidator, psicologoController.atualizarPsicologo);

routes.get("/atendimento/listar", idValidator, atendimentoController.listarAtendimento);
routes.post("/atendimento/cadastrar", auth, atendimentoController.cadastrarAtendimento);
routes.delete("/atendimento/:id/deletar", atendimentoController.deletarAtendimento);
routes.put("/atendimento/:id/atualizar", atendimentoController.atualizarAtendimento);


module.exports = routes;