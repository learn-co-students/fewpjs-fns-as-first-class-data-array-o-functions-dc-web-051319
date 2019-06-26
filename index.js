let log = console.log

let wakeDog = function wakeDog(name, breed) {
    return (`Wake ${name} the ${breed}`);    
}

let leashDog = function leashDog(name, breed) {
    return (`Leash ${name} the ${breed}`);
}

let walkToPark = function walkToPark(name, breed) {
    return (`Walk to the park with ${name} the ${breed}`);
}

let throwFrisbee = function throwFrisbee(name, breed) {
    return (`Throw the frisbee for ${name} the ${breed}`);
}

let walkHome = function walkHome(name, breed) {
    return (`Walk home with ${name} the ${breed}`);
}

let unleashDog = function unleashDog(name, breed) {
    return (`Unleash ${name} the ${breed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed) {
    return routine.map(x => x(name, breed))  
}
