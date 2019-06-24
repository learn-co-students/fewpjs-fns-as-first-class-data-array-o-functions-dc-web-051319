//code here
function wakeDog(dogName,dogBreed){
    var wake = `Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake;
};

function leashDog(dogName,dogBreed) {
    var leash = `Leash ${dogName} the ${dogBreed}`;
    console.log();
    return leash;
};

function walkToPark(dogName,dogBreed) {
    var park = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(park);
    return park;
};

function throwFrisbee(dogName,dogBreed) {
    var play = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(play);
    return play;
};

function walkHome(dogName,dogBreed) {
    var home = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(home);
    return home;
};

function unleashDog(dogName,dogBreed) {
    var unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
};

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName,dogBreed) {
    return routine.map(fn => fn(dogName,dogBreed));
};

