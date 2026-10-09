const currentYear = new Date().getFullYear();

const findTheOldest = function (people) {
    if (people.length === 0) return {};
    return people.reduce((oldest, person) => age(person) > age(oldest) ? person : oldest);
};

function age(person) {
    if (!("yearOfBirth" in person)) return 0;
    const end = person.yearOfDeath ?? currentYear;
    return end - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
