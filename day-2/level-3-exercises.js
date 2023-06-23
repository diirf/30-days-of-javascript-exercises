// 1. 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'. Cuente el número de palabras amor en esta oración

let sentence = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'
sentence.match(/amor/gi).length

// 2. Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

let sentence2 = 'No puedes terminar una oración con porque porque porque es una conjunción'
sentence2.match(/porque/gi).length

/* 3. Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares):
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"; */

let paragraph = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
paragraph.replace(/[%$@&#]/gi, "")

// 4. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

let paragraph2 = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

let stringSalary = paragraph2.substring(8,12)
let stringBonus = paragraph2.substring(52,58)
let stringCourses = paragraph2.substring(84,90)

salary = parseInt(stringSalary)
bonus = parseInt(stringBonus)
courses = parseInt(stringCourses)

console.log(`The total annual revenues are ${(salary + courses)*12 + bonus}`)
