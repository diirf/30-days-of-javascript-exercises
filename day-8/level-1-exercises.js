// 1. Crear un objeto vacío llamado dog
const dog = {};

// 2. Imprime el objeto dog en la consola
console.log(dog);

// 3. Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = 'Tekila';
dog.legs = 'four';
dog.color = 'white';
dog.age = 12;
dog.bark = function() {
    return'woof woof';
}

// 4. Obtener name, legs, color, age y el valor de bark del objeto dog
dog.name;
dog['legs'];
dog.color;
dog.age;
dog.bark();

// 5. Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = 'poodle';
dog.getDogInfo = function() {
    return `My dog is ${this.name}, she is a ${this.color} ${this.breed} with ${this.age} years. She loves to do '${this.bark()}'`;
}