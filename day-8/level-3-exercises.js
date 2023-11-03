// 1. Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción
const personAccount = new Object;

personAccount.firstName = 'Indira';
personAccount.lastName = 'Franchi';
personAccount.incomes = {work: 1000,
                         personalProjects: 2000,
                         rent: 800};
personAccount.expenses = {food: 200,
                          puppy: 50,
                          services: 150,
                          mortgage: 600};

personAccount.totalIncome = function (){
  const allValuesIncome = Object.values(personAccount.incomes);
  let totalIncome = 0;

  for (let element of allValuesIncome){
    totalIncome += element;
  }

  return totalIncome;
}

personAccount.totalExpense = function (){
  const allValuesExpense = Object.values(personAccount.expenses);
  let totalExpense = 0;
  
  for (let element of allValuesExpense){
    totalExpense += element;
  }
  return totalExpense;
}

personAccount.accountInfo = function (){
  return `This is ${this.firstName} ${this.lastName}, she earns ${this.totalIncome()} and spends ${this.totalExpense()}`;
}

personAccount.addIncome = function (){
  const newIncomeName = prompt('Enter the name of the new income', 'Example: gifts');
  const newIncomeValue = +(prompt('Enter the value of the new income', 'Example: 100'));

  personAccount.incomes[newIncomeName] = newIncomeValue;
}

personAccount.addExpense = function (){
  const newExpenseName = prompt('Enter the name of the new expense', 'Example: travels');
  const newExpenseValue = +(prompt('Enter the value of the new expense', 'Example: 500'));

  personAccount.expenses[newExpenseName] = newExpenseValue;
}

personAccount.accountBalance = function (){
  const balance = this.totalIncome() - this.totalExpense();

  return balance;
}

/* 2. **** Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. 
    i. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
    ii. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación */
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// i.
function randomId() {
  const randomNumbers = () => Math.round(Math.random() * 9);
  const randomLetters = () => String.fromCharCode(Math.round((Math.random() * 25)+ 97)); 
  let id = '';

  const mixRandomId = () =>{
    const choice = Math.round((Math.random() * 1));
    switch (choice){
      case 0:
        return randomNumbers();
      case 1:
        return randomLetters();
    } 
  }

  for (i = 0; i < 5; i++){
    id += mixRandomId();
  }
  return `${randomLetters() + id}`;
}

let newDate = new Date();

newDate = `${(newDate.getDate()).toString().padStart(2,0)}/${(newDate.getMonth() + 1).toString().padStart(2,0)}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`

function signUp(username, email, password){
  username = (username[0].toUpperCase()) + username.toLowerCase().substr(1);
  email = email.toLowerCase();
  let userExist = false;
  
  for (i = 0; i < users.length; i++){
    if ((username === users[i]['username']) && (email === users[i]['email'])){
      userExist = true;
      console.log('You are already registered');
      break;
    }
  }
    if (!userExist){
      users.push({
        '_id' : randomId(),
        'username' : username,
        'email' : email,
        'password' : password,
        'createdAt' : newDate,
        'isLoggedIn' : false
      });
      console.log('You have successfully sign up')
    }
}

signUp('INDIRA', 'indira@gmail.com', '55585');

// ii.
function signIn(userToLog, passwordUserToLog){
  let logginSuccessful = false;

  for (key in users){
    if ((users[key].username === userToLog) || (users[key].email === userToLog)){
      if (users[key].isLoggedIn){
        logginSuccessful = true;
        console.log(`The user ${users[key].username} is already logged`);
      } 
      else if (users[key].password === passwordUserToLog){
        users[key].isLoggedIn = true;
        logginSuccessful = true;
        console.log(`The user ${users[key].username} is logged`);
      }
      break;
    }      
  }
  if (!logginSuccessful){
    return `Something was wrong, introduce your correct password and username or email`;
  }
}

signIn('Thomas', '123333');

/* 3. El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades. 
  i. Crear una función llamada rateProduct que califique el producto 
  ii. Crear una función llamada averageRating que calcule la valoración media de un producto */
  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];

// i.
function rateProduct(productName, descriptionProduct, userId, rate){
  let productExist = false;

  for (let product of products){
    if ((product.name === productName) && (product.description === descriptionProduct)){
      productExist = true;
      product.ratings.push({
        userId,
        rate,
      });
      console.log(`the product has been rated`);
      break;
    }
  }
  if (!productExist){
    console.log(`Your product can't be rate because doesn't exist`);
  }
}

rateProduct('TV', 'Smart TV:Procaster', 'diirf', 2);

// ii.
function averageRating(productName, descriptionProduct){
  let averageRating;
  let rateOfproduct = 0;
  let productExist = false;

  for (let i = 0; i < products.length; i++){
    if ((products[i].name === productName) && (products[i].description === descriptionProduct)){
      productExist = true;
      if (products[i].ratings.length > 0){
        for (let j = 0; j < products[i].ratings.length; j++){
          rateOfproduct += products[i].ratings[j].rate;
        }
        averageRating = rateOfproduct / (products[i].ratings.length);
        console.log(`The average rating of ${products[i].name} ${products[i].description} is ${averageRating}`);
      }
      else{
        console.log(`The product ${products[i].name} ${products[i].description} doesn't have ratings yet`);
      }
      break;
    }
  }
  if (!productExist){
    console.log(`The product doesn't exist`);
  }
}

averageRating('Laptop', 'MacPro: System Darwin');
averageRating('mobile phone', 'Huawei Honor');

// 4. Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like
function likeProduct(productName, descriptionProduct, user, like=false){
  let productExist = false;
  
  for (let product of products){ 
    if ((product.name === productName) && (product.description === descriptionProduct)){
      productExist = true;
      if (like){
        product.likes.push(user);
        console.log(`Like added`);
      }
      else {
        let likeToEliminate = product.likes.indexOf(user);
        product.likes.splice(likeToEliminate,1);
        console.log(`Like removed`);
      }
    }
  }
  if (!productExist){
    console.log(`Your product doesn't exist`);
  }
}

likeProduct('mobile phone', 'Huawei Honor', 'fjld', true);