module.exports = {
    getDoggos:(req, res) => {
        const db = req.app.get('db')
        db.get_doggos().then(doggos => {
            res.status(200).send(doggos)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err, "couldnt find doggos")
        })
    }

}