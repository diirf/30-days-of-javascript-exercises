// 1. Sobrescribir el método que se crea en la clase Animal
class Dog extends Animal{
    getBark() {
        return `woof, woof`;
    }

    getCompleteInfo(){
        return `I'm ${this.name}, I'm ${this.age} years old, I have ${this.legs} legs,  I'm ${this.color} color and I love to do ${this.getBark()}}.`
    }
}

const dog = new Dog('Tekila', 12, 'white', 'short');

console.log(dog);
console.log(dog.getBark());
console.log(dog.getCompleteInfo());