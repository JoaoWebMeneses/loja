const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports = class LoginController{
    static async login(req,res){
        const {email, password} = req.body;

        if(!email){
            return res.status(422).json({message: "O email é obrigatório"})
        }
        if(!password){
            return res.status(422).json({message: "A senha é obrigatório"})
        }

        let user = null;
        try {
            user = await User.findOne({email: email})
        } catch(error){
            console.log(error)
            res.send("error", error)
        }

        if (!user){
            return res.status(404).json({message: "Usuario não encontrado"})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            return res.status(404).json({message: "A senha está incorreta"})
        }
        try {
            const secret = process.env.SECRET
            const token = jwt.sign(
                {id: user.id}, secret
            )
            return res.status(200).json({message: "Autenticação realizada com sucesso", token})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Autenticação falhou"})
        }
    }
}