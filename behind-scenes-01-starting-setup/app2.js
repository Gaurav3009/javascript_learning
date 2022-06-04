function getName(){
    return prompt('Your Name : ', '');
}

function greet(){
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();

let person = {age : 30};
let anotherPerson = person;
let yetAnotherPerson = { ...person }; // Spread operator to copy the reference variable by value
