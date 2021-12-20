const validateCreateUser =(req, res, next) =>{
    const {nombre, apellido, celular, pais, email, password, tipo} = req.body;
    if(!nombre || !apellido || !celular || !pais || !email ||!password ||!tipo){
        res.status(400).json({error: "Hay uno o más campos vacíos"});
    }else{
        next();
    }
}

const validateCreateEvent =(req, res, next) =>{
    const {local, visitante, fecha, hora, estado, resultado, apuestas} = req.body;
    if(!local || !visitante || !fecha || !hora){
        res.status(400).json({error: "Hay uno o más campos vacíos"});
    }else{
        next();
    }
}

module.exports = {
     validateCreateUser,
     validateCreateEvent
}