'use-strict'; 

const dc = require('./data-context'); 

//startup the event loop
module.exports.setup = async() => {
    try {
        await dc.init(); 
        await dc.generateEquipment(25); 

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
