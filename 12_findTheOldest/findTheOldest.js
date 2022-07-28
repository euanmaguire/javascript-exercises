const findTheOldest = function(people) {
    let faultIndex;
    for(let i = 0; i < people.length; i++){
        if(people[i].yearOfDeath === undefined){
            people[i].yearOfDeath = 2022;
        }
    }

    const oldest = people.sort((a, b) => {
        let lastGuy = a.yearOfDeath - a.yearOfBirth
        let nextGuy = b.yearOfDeath - b.yearOfBirth
        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
