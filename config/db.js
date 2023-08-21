const mongoose = require('mongoose');

const connect=async()=>{
    try {
        await mongoose.connect('mongodb+srv://lakumkeval:keval2851@cluster0.codva4g.mongodb.net/?retryWrites=true&w=majority')
console.log('connected to server');

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connect;