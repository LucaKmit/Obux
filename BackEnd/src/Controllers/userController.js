const userSchema = require('../Models/userModel');

const bcrypt = require('bcrypt');

module.exports = {
    async getUser(req, res) {
        const { id } = req.params.id;
        
        const user = await userSchema.findOne({ id });

        res.send({ user });
    },

    async createUser(req, res) {
        try {
            const { nome, data_nasc, telefone, email, cpf, senha, cidade, estado } = req.body;

            const user = await userSchema.findOne({ cpf, email });

            if(!user) {
                const salt = bcrypt.genSaltSync(10);
                
                const encyptedPassword = bcrypt.hashSync(senha, salt);

                const encyptedCPF = bcrypt.hashSync(cpf, salt);

                const created_user = await userSchema.create({ nome, data_nasc, telefone, email, cpf:encyptedCPF, senha:encyptedPassword , cidade, estado });
                return res.json(created_user);
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
