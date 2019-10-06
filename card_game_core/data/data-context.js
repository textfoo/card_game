'use-strict'; 

const fs = require('fs'); 
const path = require('path'); 
const _path = path.join(__dirname); 
const rand = require('../engine/random'); 

const adjs = require('../data/word_lists/adjectives.json'); 
const equip = require('../data/word_lists/equipment.json');
const spells = require('../data/word_lists/spells.json');


let context = {}; 

module.exports.init = async() => {
    try { 
        console.log(`data_context | init | path: ${_path}`);
    }catch(error) {
        console.log(`data_context | init | error : ${error}`);
    }
}

module.exports.buildReferenceFile = async() => {
    try {
        const randomEquipment = await this.generateEquipment(30); 
    }catch(error) {
        console.log(`data_context | buildResource | error : ${error}`);
    }
}

module.exports.generateEquipment = async(number) => {
    try {
        console.log(`data_context | generateEquipment | number: ${number}`);
        number = number || 0; 
        for(var i =0; i < number; i++) {
            let {cost, attackBonus, connBonus, defBonus } = 0; 
            cost = Math.ceil(rand.generateRand([1, 8]) * (i / number));
            attackBonus = Math.ceil(rand.generateRand([0, cost]) * (i /number));
            connBonus = Math.ceil(rand.generateRand([0, cost]) * ((i /number) /2));
            armorBonus = Math.ceil(rand.generateRand([0, cost]) * ((i /number) /2));
            console.log(`| cost : ${cost} | attackBonus: ${attackBonus}, connBonus: ${connBonus}, armorBonus: ${armorBonus} |`);
        }
    }catch(error){
        console.log(`data_context | generateEquipment | error : ${error}`);
    }
}

module.exports.generateDungeons = async(number) => {
    try {
        number = number || 0; 
        for(var i =0; i < number; i++) {

        }
    }catch(error) {
        console.log(`data_context | generateDungeons | error : ${error}`);
    }
}