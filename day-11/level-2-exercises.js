// 1. Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración
const users = [
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTML"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
];

for (const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age);
}

// 2. Encuentra las personas que tienen menos de dos habilidades
for (const {name, scores, skills, age} of users){
    if (skills.length < 2){
        console.log(name, scores, skills, age);
    }
}