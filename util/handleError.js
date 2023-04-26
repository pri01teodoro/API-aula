const handleError = (err, req, res) => {
    console.log(err);
    
    res.status(500);
    res.send({message: "Ocorreu algum erro no servidor"})
}

export default handleError;