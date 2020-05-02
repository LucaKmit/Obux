const userSchema = require('../Models/userModel');

const CPF = require('cpf-check');

const bcrypt = require('bcrypt');

const md5 = require('md5');

module.exports = {
    async getUser(req, res) {
        const { id } = req.params.id;
        
        const user = await userSchema.findOne({ id });

        res.send({ user });
    },

    async createUser(req, res) {
        try {
            const { nome, data_nasc, telefone, email, cpf, senha, cidade, estado } = req.body;

            const salt = bcrypt.genSaltSync(10);
            const encryptedCPF = md5(cpf);

            const user = await userSchema.findOne({ $or: [{ email }, { cpf: encryptedCPF }] }).select('+cpf').exec();

            if(!user) {
                const encyptedPassword = bcrypt.hashSync(senha, salt);

                if(CPF.validate(cpf)) {
                    const created_user = await userSchema.create({ nome, data_nasc, telefone, email, cpf: encryptedCPF, senha:encyptedPassword , cidade, estado }); 
                    return res.json(created_user);
                } else {
                    return res.send('CPF not valid');
                }

            } else {
                return res.send('User already exists');
            }
        } catch (e) {
            console.log(e);
        }

    },

    async login(req, res) {
        const { email, senha } = req.body;

        const user = await userSchema.findOne({ email }).select(['+senha']);

        if(user) {
            if(bcrypt.compareSync(senha, user.senha)) {
                user.senha = undefined;
                return res.send({ user });
            } else {
                return res.status(400).send("Incorrect Email or Password");
            }
        } else {
            return res.send('User does not exists');
        }

    }

}
