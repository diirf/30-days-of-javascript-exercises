// 1. Crear una closure que tenga una función interna
function sum(num1, num2){
    const total = num1 + num2;
  
    function multiply(quantity){
      if (quantity > 0){
        return total * quantity;
      }
    }
  
    return multiply;
  }
  
  const closure = sum(1,1);

  closure(1);
  closure(3);