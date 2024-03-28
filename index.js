// Code your solution in this file!

/*Instruction 1: 

function distanceFromHqInBlocks(): Returns the number of blocks from Scuber's headquarters to the pickup location.

*/

let passengerBlock, distanceInBlocks;

const hqBlock = 42;

function distanceFromHqInBlocks(passengerBlock) {

    return  distanceInBlocks = Math.abs (passengerBlock-hqBlock);
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));


/*Instruction 2:

function distanceFromHqInFeet(): Returns the number of feet from Scuber's headquarters to the pickup location.

*/

function distanceFromHqInFeet(passengerBlock) {
   
    distanceFromHqInBlocks(passengerBlock);

    return distanceFromHqInBlocks(passengerBlock)*264;  
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));


/*Instruction 3:

function distanceTravelledInFeet(): Calculates the number of feet a passenger travels given a starting block and an ending block — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.

*/

let distanceInFeet;

function distanceTravelledInFeet(start, destination) {
    
    return distanceInFeet = Math.abs(destination - start)*264;       
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));


/* Instruction 4

function calculatesFarePrice(): Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free.

*/

function calculatesFarePrice(start, destination) {

    let farePrice;

    const distanceInFeet = Math.abs (destination-start)*264;
    
    if (distanceInFeet<=400) {

        return farePrice = 0;

    }else if (distanceInFeet>400 && distanceInFeet<=2000) {

        return farePrice = Math.abs (distanceInFeet-400)*0.02;

    }else if (distanceInFeet>2000 && distanceInFeet<=2500) {

        return farePrice = 25;

    }else {
        
        return "cannot travel that far";
    } 
}


calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));