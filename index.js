// Code your solution in this file!
function distanceFromHqInBlocks(fixedDistance){
    return Math.abs(fixedDistance - 42);
}

function distanceFromHqInFeet(fixedDistance){
    return distanceFromHqInBlocks(fixedDistance) * 264;
}

function distanceTravelledInFeet(start,destination){
    return Math.abs(start-destination)* 264;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);
    const distanceDiscount = distanceTravelledInFeet(start,destination) - 400;
    if (distance <= 400){
        return 0;
    } else if (distance >= 2500 ){
        return 'cannot travel that far';
    } else if (distance<=2000){
        return distanceDiscount * 0.02;
    } else if (distance<2499){
        return 25;
    } else {

    }
}


//calculatesFarePrice: Given the same starting and
// ending block as the previous test (hint hint), 
//return the fare for the customer. 
//The first four hundred feet are free. 
//For a distance between 400 and 2000 feet, 
//the price is 2 cents per foot (not including 400, 
//which are free!). Then Scuber charges a flat fare for a 
//distance over 2000 feet and under 2500 feet. 
//Finally, Scuber does not allow any rides over 2500 feet — 
//the function returns 'cannot travel that far' if a ride over
// 2500 feet is requested.