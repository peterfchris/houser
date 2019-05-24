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
    addProperty: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zipcode}
        db.add_property()
        .then((newProperty) => {
            res.status(200).send(newProperty)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    }
}