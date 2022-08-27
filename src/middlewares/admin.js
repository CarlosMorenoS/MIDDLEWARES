module.exports = [
    function(req,res,next){

        let nombre = req.query.name

        switch (nombre) {
            case "Ada":
            case "Greta":
            case "Vim":
            case "Tim":
                    res.send("Hola admin " + nombre)
                break;
            default:
                    res.send("no tenes los privilegios para ingresar")
                break;
        }
        next()
    }
]
