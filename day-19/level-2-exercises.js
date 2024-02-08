// 1. Crear una closure que tenga tres funciones internas
function calc(init){
  let num = init || 0;

  return{
    add: function add(num1, num2){
      if (num2){
        return (num += num1 + num2);
      }
      else{
        return (num += num1);
      }
    },
    minus: function minus(num1, num2){
      if (num2){
        return (num = num - num1 - num2);
      }
      else{
        return (num -= num1);
      }
    },
    multiply: function multiply(num1, num2){
      if (num2){
        return (num = num * num1 * num2);
      }
      else{
        return (num *= num1);
      }
    },
  };
}

const calculator = calc(5);

calculator.add(1,1);
calculator.minus(25);
calculator.multiply(10,3);