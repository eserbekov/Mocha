// Homework
function sum(a, b){
    return a + b;
}
function mult(a, b){
    return a*b
}
function dif(a, b){
    return a-b
}
module.exports = {sum, mult, dif, concat, isAdult};

function concat(x,y){
    if(typeof(x) === 'string' && typeof(y) === 'string'|| typeof(x) === 'number' && typeof(y) === 'string'|| typeof(x) === 'string' && typeof(y) === 'number'){
        return x+y;
    } else return undefined;
}

function isAdult(age){
    if(age >= 18 && age <= 65) return 'Adult';
    else return 'Your age does not fill the bill';
}