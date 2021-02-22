// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    const address = 42;
    return Math.abs(address - distance);
}
function distanceFromHqInFeet(distance) {
    const address = 42;
    return (264 * Math.abs(address - distance));
}
function distanceTravelledInFeet(distance, destination) {

    return (264 * Math.abs(destination - distance));
}
function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 264){
        return 0;
    }
    else if (feet >= 400 && feet < 2000){
        return ((feet - 400) * 0.02);
    }
    else if (feet > 2000 && feet < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

    
}