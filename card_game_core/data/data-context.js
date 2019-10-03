'use-strict'; 

const fs = require('fs'); 
const path = require('path'); 
const _path = path.join(__dirname, '/data'); 

let context = {}; 

module.exports.init = async() => {
    try { 

    }catch(error) {
        console.log(`data_context | init | error : ${error}`);
    }
}

module.exports.buildReferenceFile = async() => {
    try {

    }catch(error) {
        console.log(`data_context | buildResource | error : ${error}`);
    }
}

module.exports.generateEquipment = async(number) => {
    try {

    }catch(error){
        console.log(`data_context | generateEquipment | error : ${error}`);
    }
}