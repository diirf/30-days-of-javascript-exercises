// 1. Cambiar el array de habilidades a JSON usando JSON.stringify()
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
const skillsJSON = JSON.stringify(skills, undefined, 4);

console.log(skillsJSON);

// 2. Stringify la variable de la edad
let age = 250;
const ageJSON = JSON.stringify(age, undefined, 4);

console.log(ageJSON);

// 3. Stringify la variable isMarried
let isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried, undefined, 4);

console.log(isMarriedJSON);

// 4. Stringify el objeto estudiante
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const studentJSON = JSON.stringify(student, undefined, 2);

console.log(studentJSON);