const Item = require('../../models/item');

module.exports = {
    getAll,
    create
}

ajcairel

async function getAll(req, res) {
    const items = await Item.find({
        user: req.user._id
    })
    res.json(items);
}

async function create(req, res) {
    console.log(req.body);
    req.body.user = req.user._id;
    const item = Item.create(req.body);
    res.json(item);

 main
}