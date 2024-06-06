// Завдання 1
function findMiddleCharacter() {
    const word = prompt("Please enter a word:");

    if (word === null) {
        alert("Canceled.");
        return;
    }

    const trimmedWord = word.trim();

    if (trimmedWord === "") {
        alert("Invalid value");
        return;
    }

    const length = trimmedWord.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        alert(trimmedWord[middle - 1] + trimmedWord[middle]);
    } else {
        alert(trimmedWord[middle]);
    }
}

findMiddleCharacter();
// Завдання 2
const users = [
    {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    },
];

function getUniqueSkills(users) {
    let allSkills = [];

    
    for (let i = 0; i < users.length; i++) {
        allSkills = allSkills.concat(users[i].skills);
    }

    
    let uniqueSkills = [];


    for (let i = 0; i < allSkills.length; i++) {
        if (uniqueSkills.indexOf(allSkills[i]) === -1) {
            uniqueSkills.push(allSkills[i]);
        }
    }


    return uniqueSkills;
}

function getTotalBalance(users) {
    let totalBalance = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].friends.length === 2 && users[i].age < 30) {
            totalBalance += users[i].balance;
        }
    }

    return totalBalance;
}
// Виводжу завдання з таски в Консолі 
console.log(getUniqueSkills(users)); 
console.log(getTotalBalance(users)); 

// Завдання 3
/*
  spread (розширення) використовується для розгортання елементів  масиву  в інші окремі елементи. 
  rest (залишок) використовується для збирання кількох елементів у один масив або об'єкт.

  Приклади


  SPREAD
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); - Виведе наш масив від 1 до 6

  REST
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); - для першого елементу 
console.log(rest);  - Виведе інші елементи з масиву


*/
// Завдання 4
function createUserList(users) {
   
    const userList = document.getElementById('userList');

    for (let i = 0; i < users.length; i++) {
     
        const listItem = document.createElement('li');
        listItem.textContent = users[i].name
        listItem.onclick = function() {
            alert('Привіт, ' + users[i].name);
        };

        
        userList.appendChild(listItem);
    }
}

createUserList(users);

