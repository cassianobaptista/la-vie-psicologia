const Psicologos = require('../models/Psicologos')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret').key
const bcrypt = require('bcryptjs')

const authController = {
  async login(req, res) {
    try {
      const { email, senha } = req.body
      const psicologoLogin = await Psicologos.findOne({ where: { email } })

      if (!psicologoLogin || !bcrypt.compareSync(password, psicologoLogin.password)) {
        return res.status(401).json('Credenciais inválidas. Tente novamente.')
      }

      const token = jwt.sign({
        id: psicologoLogin.id,
        nome: psicologoLogin.name,
        email: psicologoLogin.email,
      }, secret.key);

      return res.status(200).json(token)
    } catch (error) {
      console.error(error)
      return res.status(500).json('Erro interno no server!')
    }
  },
}

module.exports = authController;