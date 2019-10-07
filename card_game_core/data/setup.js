'use-strict'; 

const dc = require('./data-context'); 


module.exports.setup = async() => {
    try {
        await dc.init(); 
        let equip = await dc.generateEquipment(25); 
        console.log(JSON.stringify(equip, null, 4))

    }catch(error) {
        console.log(`setup | run | error : ${error}`);
    }
}

(async () => {
    try {
        await this.setup(); 
    }catch(error) {
        console.log(`setup | error: ${error}`);
    }
})();
