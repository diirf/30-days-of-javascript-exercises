// 1. Crear un objeto llamado personAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción
const personAccount = {
    name: 'Fabrizio',
    lastName: 'Dalla Cia',
    incomes: [
        {description: 'work', amount: 1000},
        {description: 'personal projects', amount: 800},
        {description: 'rent', amount: 500}
    ],
    expenses: [
        {description: 'food', amount: 200},
        {description: 'puppy', amount: 100},
        {description: 'mortgage', amount: 500},
        {description: 'services', amount: 150}
    ],
    totalIncome: '',
    totalExpense: '',
    accountInfo: '',
    addIncome: '',
    addExpense: '',
    accountBalance: '',
}