const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const choreSchema = new Schema({
    chore: String,
    status: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('Chore', choreSchema);