const manhattanBlockInFeet = 264;

function distanceFromHqInBlocks(blocks) {
    let result = blocks - 42;

    // If street number is less than 42, then converts resulting number to positive integer
    if (result < 0) {
        result = result * -1;
    }
    return result;
}

function distanceFromHqInFeet(blocks) {
    let distanceInBlocks = distanceFromHqInBlocks(blocks);
    let distanceInFeet = distanceInBlocks * manhattanBlockInFeet;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    let blocksTravelled = destination - start;

    // If blocks traveled is less than 0, then converts resulting number to positive integer
    if (blocksTravelled < 0) {
        blocksTravelled = blocksTravelled * -1;
    }

    let feetTravelled = blocksTravelled * manhattanBlockInFeet;
    return feetTravelled
}

function calculatesFarePrice(start, destination) {
    let totalFeet = distanceTravelledInFeet(start, destination);
    let farePrice;

    if (totalFeet < 400) {
        farePrice = 0;
    } else if (totalFeet > 400 && totalFeet < 2000) {
        let nonFreeFeet = totalFeet - 400;
        farePrice = nonFreeFeet * 0.02;
    } else if (totalFeet > 2000 && totalFeet <= 2500) {
        farePrice = 25;
    } else if (totalFeet > 2500) {
        farePrice = 'cannot travel that far';
    }

    return farePrice;
}