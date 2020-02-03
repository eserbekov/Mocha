// Homework
function sum(a, b){
  return a + b;
}
function mult(a, b){
  return a*b;
}
function dif(a, b){
  return a-b;
}
// Функция склеивания
function concat(x,y){
  if(typeof(x) === 'string' && typeof(y) === 'string'|| typeof(x) === 'number' && typeof(y) === 'string'|| typeof(x) === 'string' && typeof(y) === 'number'){
    return x+y;
  } else return undefined;
}

function isAdult(age){
  if(age >= 18 && age <= 65) return 'Adult';
  else return 'Your age does not fill the bill';
}
// Функция сравнения переменных
function comparison(a,b){
  if(typeof(a) === 'string'||typeof(b) === 'string'){
    a = +a;
    b = +b;
  }
  return (a != b);
}
// Функция возведения в степень числа
function power(num,pow){
  if (num === 0) return undefined;
  return (pow !== 0)? +(Math.pow(num,pow)).toFixed(2) : 1;
}
module.exports = {sum, mult, dif, concat, isAdult, comparison, power};
