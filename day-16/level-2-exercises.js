// 1. Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const studentJSON = JSON.stringify(student, ['firstName', 'lastName'], 2);

console.log(studentJSON);