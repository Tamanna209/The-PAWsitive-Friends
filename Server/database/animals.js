// const { type } = require('@testing-library/user-event/dist/type');
// const mongoose=require('mongoose');

// const AnimalSchema = new mongoose.Schema({
//     animalname:{
//         type:String,
//         required:true
//     },
//     desc:{
//         type:String,
//         required:true
//     }
// });

// const Animals = mongoose.model('animals', AnimalSchema);

// module.exports = Animals;
const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    animalName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer, // Store image data as buffer
        contentType: String, // Store image content type
        
    }
});

const Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;
