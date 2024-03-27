// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function() {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fares) {
        return fares * multiplier
    }
}

const fareDoubler = function createFareMultiplier(fares) {
    return fares*2
}



const fareTripler = function createFareMultiplier(fares) {
    return fares*3
}

const selectDifferentDrivers = function (drivers,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}