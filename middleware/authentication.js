const { Mago, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const {jwt_secret} = require('../config/config.json')['development']

const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const mago = await Mago.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where: {
                [Op.and]: [
                    { MagoId: mago.id },
                    { token: token }
                ]
            }
        });
        if (!tokenFound) {
            res.status(401).send({ message: 'No estas autorizado' });
        }
        req.mago = mago;
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}

module.exports = { authentication }