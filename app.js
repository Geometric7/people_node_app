const fs = require('fs');

genders = ['M', 'F'];
maleNames = ['Mark', 'Anthony', 'Craig', 'Brian', 'Martin', 'Michael', 'Ross', 'Jake', 'George', 'Nick'];
femaleNames = ['Ann', 'Marie', 'Grace', 'Hannah', 'Dorothy', 'Alice', 'Melanie', 'Agnes', 'Monica', 'Janice'];
lastNames = ['Black', 'Martinez', 'Smith', 'Potter', 'Jersey', 'Newlake', 'Blake', 'Goldberg', 'Bourne', 'Stone'];

people = [];

const randChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

for (let counter = 1; counter <= 20; counter ++){
  const gender = randChoice(genders);
  let firstName = '';

  if (gender === 'M') firstName = randChoice(maleNames);
  if (gender === 'F') firstName = randChoice(femaleNames);

  const lastName = randChoice(lastNames);

  const getAge = () => {
    const min = 18;
    const max = 99;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@mail.com`;
  //const email = firstName.toLowerCase() + "." +lastName.toLowerCase + "@mail.com";

  people.push(
    {
      id: counter,
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      age: getAge(),
      email,
    }
  )
};

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
