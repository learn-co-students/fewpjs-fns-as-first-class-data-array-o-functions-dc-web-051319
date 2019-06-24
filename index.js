function wakeDog(dogName="Byron", dogBreed="poodle") {

  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName="Byron", dogBreed="poodle") {

  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName="Byron", dogBreed="poodle") {

  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName="Byron", dogBreed="poodle") {

  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName="Byron", dogBreed="poodle") {

  return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName="Byron", dogBreed="poodle") {

  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
return routine.map(function(action) {
     return action(dogName, dogBreed)

  })
}

exerciseDog("Esther", "Dalmation")
