// 1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const keys = Object.keys(users);
let maxNumbersSkills = 0;
let userWithMaxSkills;

for (let i = 0; i < keys.length; i++){
  const lengthUsersSkills = users[keys[i]].skills.length;
  if (lengthUsersSkills > maxNumbersSkills){
    maxNumbersSkills = lengthUsersSkills;
    userWithMaxSkills = keys[i];
  }
}

console.log(`The user with more skills is ${userWithMaxSkills}, has ${maxNumbersSkills} skills`);

/* 2. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
} */
let usersLogged = 0;
let users50Points = 0;

for (let key in users){
  if (users[key].isLoggedIn){
    usersLogged++;
  }

  if (users[key].points >= 50){
    users50Points++;
  }
}

console.log(`There are ${usersLogged} users logged and ${users50Points} users with 50 or more points`);

// 3. Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
for (let key in users){
  if (users[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node'))
  console.log(`The user ${key} is a MERN developer`);
}

// 4. Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original

// 5. Obtener todas las claves o propiedades del objeto usuarios

// 6. Obtener todos los valores del objeto usuarios

// 7. Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas