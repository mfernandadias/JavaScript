//tratando e lançando erros (try, catch, throw)
/*try {
    console.log(nãoExisto);
}   catch(err) {
    console.log('naoExisto não existe.');
    console.log(err);
}*/


function soma(x, y) {
    if(typeof x !== 'number' || 
       typeof y !== 'number'
       ) {
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}
try {
console.log(soma(1, 2));
console.log(soma('1', 2));
} catch(error) {
    //console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}