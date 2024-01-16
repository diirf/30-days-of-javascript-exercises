// 1. Intentemos desarrollar un programa que calcule la medida de tendencia central de una muestra (media, mediana, moda) y la medida de variabilidad (rango, variación, desviación estándar). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puedes crear una clase llamada Statistics y crear todas las funciones que hacen cálculos estadísticos como método para la clase Statistics. Comprueba el resultado que aparece a continuación
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics{
    constructor(array){
        this.array = [...array];
    }

    getCount(){
        return this.array.length;
    }

    getAdd(){
        let total = 0;

        for (let element of this.array){
            total += element;
        }

        return total;
    }

    getMinimun(){
        let min = this.array[0];

        this.array.forEach((element) => {
            if (element < min){
                min = element;
            }
        });

        return min;
    }

    getMaximum(){
        const max = this.array.reduce((acc, curr) => curr > acc ? curr : acc, 0);

        return max;
    }

    getRange(){
        const orderedArray = this.array.slice().sort((a, b) => a - b);
        const rangeValue = orderedArray[orderedArray.length - 1] - orderedArray[0];

        return rangeValue;
    }

    getMean(){
        return Math.round(this.getAdd() / this.getCount());
    }

    getMedian(){
        const sortedArray = this.array.slice().sort((a, b) => a - b);
        let middleValue;

        if (this.getCount(sortedArray) % 2 === 0){
            middleValue = (sortedArray[this.getCount() / 2] + sortedArray[(this.getCount() / 2) - 1]) / 2;
        }
        else{
            middleValue = sortedArray[Math.floor(this.getCount() / 2)];
        }

        return middleValue;
    }

    getMode(){
        const frequency = this.array.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
    
            return acc;
        },{});
      
        const frequencyArray = Object.entries(frequency);
    
        frequencyArray.sort((a, b) => b[1] - a[1]);
    
        let modeObject;
    
        if (frequencyArray[0][1] !== frequencyArray[1][1]){
            modeObject = {
            'mode': +frequencyArray[0][0],
            'count': +frequencyArray[0][1]
            };
        }
        else{
            let i = 0;
            const modeArray = [];
    
            while (frequencyArray[i][1] === frequencyArray[i+1][1]){
                modeArray.push(+frequencyArray[i][0]);  
                i++;
                if (i === frequencyArray.length - 1){
                    break;
                }
            }
            modeArray.push(+frequencyArray[i][0]);
    
            modeObject = {
                'mode': modeArray,
                'count': +frequencyArray[0][1]
            };
        }
    
        return modeObject;
    }

    getVariance(){
        const addSqrt = this.array.reduce((acc, curr) => acc + (curr ** 2) ,0);
        
        return +((addSqrt - ((this.getAdd()) ** 2 / this.array.length)) / (this.array.length - 1)).toFixed(2);
    }

    getStd(){
        return +Math.sqrt(this.getVariance()).toFixed(2);
    }

    getFreqDist(){
        const frequency = this.array.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
        
            return acc;
          },{});
        
          const arrayFrequency = Object.entries(frequency);
          
          arrayFrequency.sort((a, b) => b[1] - a[1])
        
          return arrayFrequency.map((element) => [(element[1] / this.array.length) * 100, element[0]]);
    }

    describe(){
        let description = `Count: ${this.getCount()}
        Add: ${this.getAdd()}
        Min: ${this.getMinimun()}
        Max: ${this.getMaximum()}
        Range: ${this.getRange()}
        Mean: ${this.getMean()} 
        Median: ${this.getMedian()}
        Mode: {mode:${this.getMode().mode}, count:${this.getMode().count}}
        Variance: ${this.getVariance()}
        Standard Deviation: ${this.getStd()}
        Frequency Distribution: [`;
  
        this.getFreqDist().forEach((element) => description += `(${element}), `);

        description = description.substring(0,description.length - 2) + ' ]';

        return description;
    }
}

const statistics = new Statistics(ages);

console.log('Count:', statistics.getCount());
console.log('Sum: ', statistics.getAdd());
console.log('Min: ', statistics.getMinimun());
console.log('Max: ', statistics.getMaximum());
console.log('Range: ', statistics.getRange());
console.log('Mean: ', statistics.getMean());
console.log('Median: ',statistics.getMedian());
console.log('Mode: ', statistics.getMode());
console.log('Variance: ',statistics.getVariance());
console.log('Standard Deviation: ', statistics.getStd());
console.log('Frequency Distribution: ', statistics.getFreqDist());

// 2. Crea una clase llamada PersonAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción
class PersonAccount{
    constructor(name, lastName, incomes, expenses){
        this.name = name;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }

    totalIncome(){
        
    }

    totalExpense(){

    }

    accountInfo(){

    }

    addIncome(){

    }

    addExpenses(){

    }

    accountBalance(){
        
    }
}