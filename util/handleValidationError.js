const handleValidationError = (err, req, res, next) => {

    if (err.name === 'ValidationError') {
        
        const erros = {}; //desestruturação para pegar somente o erro

        for (let field in err.errors){
            erros[field] = err.errors[field].message; //mensagem do erro da validação
        }

        res.status(422);
        res.send({ erros });

    } else {
        next (err);
    }
}

export default handleValidationError;