// 1. Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el apellido, la edad, las habilidades, el país, las claves inscritas y los valores para las claves. Almacena el objeto estudiante en el localStorage de tu navegador
const student = {
    name: 'Giacomo',
    lastName: 'Cannavaro',
    age: 20,
    skills: ['html', 'css', 'js'],
    country: 'Italy'
}

const studentJSON = JSON.stringify(student, undefined, 2);
localStorage.setItem('student', studentJSON);

localStorage;