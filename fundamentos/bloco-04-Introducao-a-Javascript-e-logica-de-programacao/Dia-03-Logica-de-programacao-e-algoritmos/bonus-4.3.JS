/*
// Exercicio - 1
// 1 - Agora vamos trabalhar com algumas formas geométricas! 
// Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito 
//de asteriscos de lado de tamanho n.
let n = 3;
let asterisco = ""
for(let i=0; i<n; i++){
    asterisco = `${asterisco}*`;
}
for(let i=0; i<n; i++){
console.log(asterisco);
}
*/

/*
// Exercicio - 2
// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 
//5 asteriscos de base.
let n = 5;
let asterisco = ""
for(let i=0; i<n; i++){
    asterisco = `${asterisco}*`;
    console.log(asterisco);
}
*/

// Exercicio - 3
// Agora inverta o lado do triângulo. Por exemplo:
let n=5;
array = [];
for(i=0;i<n;i++){
    for(i=0;i<n;i++){
        if(n-i>1){
            array.push("0");
        }else{
            array.push("1");
        }console.log(array);
}
console.log(array);
}
