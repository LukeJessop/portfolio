const getMessage = (req, res) => {
    res.status(200).send("you accessed my api")
}

module.exports = getMessage