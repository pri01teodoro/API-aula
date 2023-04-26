const handleNotFound = (req, res) => {
    res.status(404);
    res.send({message: "Endpoint não encontrado!"})
}

export default handleNotFound;