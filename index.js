
function wakeDog(dogName="Error",dogBreed="MissingBreed"){
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return (`Wake ${dogName} the ${dogBreed}`);
}


function leashDog(dogName="Error",dogBreed="MissingBreed"){
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return (`Leash ${dogName} the ${dogBreed}`);
}


function walkToPark(dogName="Error",dogBreed="MissingBreed"){
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return(`Walk to the park with ${dogName} the ${dogBreed}`);
}



function throwFrisbee(dogName="Error",dogBreed="MissingBreed"){
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}


function walkHome(dogName="Error",dogBreed="MissingBreed"){
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return(`Walk home with ${dogName} the ${dogBreed}`);
}



function unleashDog(dogName="Error",dogBreed="MissingBreed"){
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];



function exerciseDog(dogName="Error",dogBreed="MissingBreed"){
    return routine.map(x => x(dogName,dogBreed));
}