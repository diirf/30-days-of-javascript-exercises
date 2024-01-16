// 1. Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos
class Animal{
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    getCompleteInfo(){
        return `I'm ${this.name}, I'm ${this.age} years old, I have ${this.legs} legs and I'm ${this.color} color.`
    }
}

// 2. Cree una clase hijo de Perro y Gato a partir de la Clase Animal
class Dog extends Animal{
    getBark() {
        return `woof, woof`;
    }
}

class Cat extends Animal{
    getMeows() {
        return `meows, meows`;
    }
}

const dog = new Dog('Tekila', 12, 'white', 'short');
const cat = new Cat('Cleo', 10, 'gold', 'long');

console.log(dog);
console.log(dog.getBark());
console.log(dog.getCompleteInfo());

console.log(cat);
console.log(cat.getMeows());
console.log(cat.getCompleteInfo());

