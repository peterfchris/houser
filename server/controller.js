module.exports = {
    properties: (req, res) => {
        const db = req.app.get('db')
        db.get_all_properties()
        .then((properties) => {
            res.status(200).send(properties)
        }) 
        .catch(error => {
            res.status(500).send(error)
        })
    },
    addProperty: (req, res, next) => {
        const db = req.app.get('db')
        const {property_name, address, city, state, zipcode} = req.body
        db.add_property([property_name, address, city, state, zipcode])
        .then(() => {
            res.sendStatus(200)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    },
    deleteProperty: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_property(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send(err)
        })
    }
}