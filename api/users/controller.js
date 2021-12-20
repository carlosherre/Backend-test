const User = require("./model");

const list = async (req, res) =>{
    const usuarios = await User.find();
    res.status(200).json({usuarios})
}

const createUser = async (req, res) =>{
    const {nombre, apellido, celular, pais, email, password, tipo} = req.body;
    const userFound=await User.find({email})
    if(userFound.length===0){
        const user = {
            nombre, apellido, celular, pais, email, password, tipo
        }

        const newUser = new User(user);
        newUser.save().then(createdUser=>{
            res.status(200).json({createdUser});
        })
    }else{
        res.status(400).json({error: "Ese correo ya existe"});
    }
}

module.exports = {
    list, createUser
}