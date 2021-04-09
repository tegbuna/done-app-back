const Chore = require('../models/chore');


async function index(req, res) {
   try {
       const chores = await Chore.find({});
       res.status(200).json(chores); // send chores as JSON data as an HTTP response
   } catch (error) {
       console.log(error);
       res.status(400).json({ error: 'something went wrong' });
   }
}

async function create(req, res) {
    try {
        const chore = await Chore.create(req.body);
        res.status(201).json(chore);
        // index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

module.exports = {
    index,
    create,
};


