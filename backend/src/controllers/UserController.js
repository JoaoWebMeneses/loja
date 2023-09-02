const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class UserController {
    static async RegisterUser(req,res){
        const {role,name,idade,email,password,confirmPassword} = req.body;
        let image = ""
        if (req.file){
            image = req.file.filename
        }
        if(!name){
            return res.status(422).json({message: "O nome é obrigatório"})
        }
        if(!idade){
            return res.status(422).json({message: "A idade é obrigatória"})
        }
        if(!email){
            return res.status(422).json({message: "O email é obrigatório"})
        }
        if(!password){
            return res.status(422).json({message: "A senha é obrigatória"})
        }
        if(!confirmPassword){
            return res.status(422).json({message: "Confirme sua senha"})
        }
        if(password !== confirmPassword){
            return res.status(422).json({message: "As senhas não coincidem"})
        }
        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(422).json({message: "Já existe um usuário com este email!"})
        }
        const hash = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password,hash)
        if(role === "Vendedor"){
            role === 0
        }
        const user = new User({
            role,name,idade,email,image,password: passwordHash
        })
        if (req.file){
            image = `${req.file.filename}`
        }
        try{
            const imageUrl = `${req.protocol}://${req.get('host')}/src/uploads/${image}`
            user.image = imageUrl
            await user.save()
            res.status(201).json({message: "Usuário criado com sucesso!",user})
        }catch(error){
            res.status(500).json({message: "Erro ao criar o Usuário"})
        }
    }
}