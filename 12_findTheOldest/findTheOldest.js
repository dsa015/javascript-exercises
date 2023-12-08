const findTheOldest = function(args) {
 // må bruke en reduce her
return args.reduce((oldest, currentObj) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth)
    const currentPerson = getAge(currentObj.yearOfDeath, currentObj.yearOfBirth)

    return oldestAge < currentPerson ? currentObj : oldest
})

};
function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;



//Given an array of objects representing 
//people with a birth and death year, return the oldest person.