'use-strict'; 

const dc = require('./data-context'); 


module.exports.setup = () => {
    try {
         dc.init(); 
        let p_one =  this.generateDeck('holy'); 
        let p_two = this.generateDeck('natural');

    }catch(error) {
        console.log(`setup | run | error : ${error}`);
    }
}

module.exports.generateDeck = (heroType) => {
    try {
        //let equipment =  dc.generateEquipment(50); 
        let heros = dc.generateHeros(heroType, 20);

        // console.log(`equipment :`);
        // equipment.forEach((x) => {
        //     console.log(`${x.stats.value} | ${x.stats.attackBonus} | ${x.stats.connBonus} | ${x.stats.armorBonus} | ${x.stats.type}`)
        // });

        console.log(`heros :`);
        heros.forEach((x) => {
            console.log(`${x.cost} | ${x.attack} | ${x.conn} | ${x.armor} | ${x.type}`)
        });

    }catch(error) {
        console.log(`setup | generateDeck | error : ${error}`);
    }
}

(() => {
    try {
        this.setup(); 
    }catch(error) {
        console.log(`setup | error: ${error}`);
    }
})();
