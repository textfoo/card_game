'use-strict'; 

const fs = require('fs'); 
const path = require('path'); 
const _path = path.join(__dirname); 
const rand = require('../engine/random'); 

const proper = require('../data/word_lists/proper-nouns.json');
const adjs = require('../data/word_lists/adjectives.json'); 
const equip = require('../data/word_lists/equipment.json');
const spells = require('../data/word_lists/spells.json');
const heros = require('../data/word_lists/heros.json')

let context = {}; 

module.exports.init = () => {
    try { 
        console.log(`data_context | init | path: ${_path}`);
    }catch(error) {
        console.log(`data_context | init | error : ${error}`);
    }
}

module.exports.buildReferenceFile = () => {
    try {
        const randomEquipment = this.generateEquipment(100); 
    }catch(error) {
        console.log(`data_context | buildResource | error : ${error}`);
    }
}

module.exports.generateHeros = (type, number) => {
    try {
        let response = []; 
        console.log(`data_context | generateHeros | type: ${type}, number: ${number}`);
        console.log(JSON.stringify(heros));
        let container = heros.types.filter((x) => {
            return x.type === type;
        });

        console.log(`names ${JSON.stringify(container)}`);
        for(var i =1; i < number; i++){ 
            let cost = Math.ceil(rand.generateRand([1, 8]) * (i / number));
            response.push({
                cost : cost, 
                type : container[0].names[rand.generateRand([0, container[0].names.length - 1])],
                attack : Math.ceil(rand.generateRand([0, cost])),
                armor : Math.floor(rand.generateRand([0, cost / 2])),
                conn : Math.floor(rand.generateRand([1, cost]))
            });
            //console.log(`cost : ${cost} | attack : ${attack} | conn : ${conn} | armor : ${armor} |type : ${type}`);
        }
        return response;
        
    }catch(error) {
        console.log(`data_context | generateHeros | error : ${error}`);
    }
}

module.exports.generateEquipment = (number) => {
    try {
        response = []; 
        console.log(`data_context | generateEquipment | number: ${number}`);
        number = number || 0; 
        for(var i =0; i < number; i++) {
            let stats = this.generateEquipmentStats(i, number); 
            let name = this.generateEquipmentName(stats); 
            response.push({'name' : name, 'stats' : stats}); 
            //console.log(`| value : ${stats.value} | attackBonus: ${stats.attackBonus}, connBonus: ${stats.connBonus}, armorBonus: ${stats.armorBonus}| name: ${name}`);
        }
        return response;
    }catch(error){
        console.log(`data_context | generateEquipment | error : ${error}`);
    }
}

module.exports.generateEquipmentStats = (i, number) => {
    value = Math.ceil(rand.generateRand([1, 8]) * (i / number));
    return { 
        value : value,
        attackBonus :  Math.ceil(rand.generateRand([0, value]) * ((i /number) /rand.generateRand([1, 2]))),
        connBonus : Math.ceil(rand.generateRand([0, value]) * ((i /number) /rand.generateRand([1, 2]))),
        armorBonus : Math.ceil(rand.generateRand([0, value]) * ((i /number) /rand.generateRand([1, 2]))),
    }
}

module.exports.generateEquipmentName = (stats) => {
    let response = '';
    if(stats.value >= 5 || (stats.attackBonus + stats.armorBonus + stats.connBonus) >= 5) {
        response += `${proper.names[rand.generateRand([0, proper.names.length -1])]}'s `;
        response += `${ adjs.list[rand.generateRand([0, adjs.list.length -1])]} `;
    }
    
    if((stats.attackBonus > stats.connBonus) && stats.attackBonus > stats.armorBonus) {
        response += `${equip.weapons[rand.generateRand([0, equip.weapons.length -1])]} `;
        stats.type = 'weapon'; 
    }
    if((stats.armorBonus > stats.attackBonus) && (stats.armorBonus > stats.connBonus)){
        response += `${equip.armor[rand.generateRand([0, equip.armor.length -1])]} `;
        stats.type = 'armor'; 
    }

    if(stats.type === undefined) {
        response += `${equip.trinket[rand.generateRand([0, equip.trinket.length -1])]} `;
        stats.type = 'trinket';
    }
    response = response.trim();
    return response;
}

module.exports.generateDungeons = (number) => {
    try {
        number = number || 0; 
        for(var i =0; i < number; i++) {

        }
    }catch(error) {
        console.log(`data_context | generateDungeons | error : ${error}`);
    }
}