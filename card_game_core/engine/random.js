'use-strict'; 

/*
    the idea is to encapsulate common random functionality in here
    if we need better random later just modify the dependency
*/

//expect range of two integers
module.exports.generateRand = (range) => {
    try {
        //console.log(`random | generateRand | range : ${range}`);
        if(range.length === 2) {
            return Math.floor(Math.random() * (Math.floor(range[1]) - Math.ceil(range[0]) + 1)) + Math.ceil(range[0]);
        }
        throw `Parameter out of range or not correct type ${range}`; 
    }catch(error) {
        console.log(`random | generateRand | error : ${error}`);
    }
} 


module.exports.generateUniqueSequence = (limit, response) => {
    try {
        limit = limit || 0; 
        if(typeof limit === 'number' && limit > 0) {

        }
        throw `Parameter ${limit} incorrect type or not larger than 0`; 
    }catch(error) {
        console.log(`random | generateUniqueSequence | error : ${error}`);
    }
}