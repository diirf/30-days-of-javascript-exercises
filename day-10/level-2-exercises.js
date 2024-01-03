// 1. Encontrar a unión b
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b];

const A = new Set(a);
const B = new Set(b);
const C = new Set(c);

console.log(C);

// 2. Encontrar a intersección b
const d = a.filter((number) => B.has(number));
const D = new Set(d);

console.log(D);

//3. Encontrar a con b
const e = a.filter((number) => !B.has(number));
const E = new Set(e);

console.log(E);