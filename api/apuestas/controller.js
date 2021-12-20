const Apuesta = require("./model");

const listByApostador = async (req, res) =>{
    const {id_apostador} = req.body;
    const eventos = await Event.find(id_apostador);
    res.status(200).json({ eventos })
}

const listByEvento = async (req, res) =>{
    const {id_evento} = req.body;
    const eventos = await Event.find(id_evento);
    res.status(200).json({ eventos })
}

const createApuesta = async (req, res) =>{
    const {id_apostador, id_evento, monto, seleccion, estado} = req.body;
    
    const apuesta = {
        id_apostador, id_evento, monto, seleccion, estado
    }

    const newEvent = new Event(apuesta);
    newEvent.save().then(createdApuesta=>{
        res.status(200).json({createdApuesta});
    })
}

module.exports = {
    listByApostador, listByEvento, createApuesta
}