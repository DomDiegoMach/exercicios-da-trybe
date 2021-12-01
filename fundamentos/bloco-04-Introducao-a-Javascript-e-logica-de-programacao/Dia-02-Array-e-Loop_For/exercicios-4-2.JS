/*
1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função 
console.log() ;

2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
** A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

// 1 - Exercicio
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i++){
    console.log(`O índice ${i} corresponde ao valor ${numbers[i]}`);
}
*/

//2 - Exercício
/*
// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let i=0;i<numbers.length;i++){
    soma = soma + numbers[i];
}
console.log(soma);
*/

//3 - exercício
//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//** A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let i=0;i<numbers.length;i++){
    soma = soma + numbers[i];
}
let media = soma/(numbers.length);
console.log(media);
*/

//4 - exercício
//4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
//"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let i=0;i<numbers.length;i++){
    soma = soma + numbers[i];
}
let media = soma/(numbers.length);
//console.log(media);
if(media>20){
    console.log("Valor maior que 20");
    }else{
        console.log("Valor menor que 20");
    }
*/

/*
//5 - Exercício
// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 200, 35, 27];
let maior = 0;
for (let i = 0; i < numbers.length; i++) {
   if ( numbers[i] > maior ) {
      maior = numbers[i];
   }
}
console.log(maior);
*/

/*
//6 - Exercício
//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [2, 4, 6, 18, 70, 8, 100, 2, 36, 26];
let impares = [];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!=0){
        impares.push(numbers[i]);
    }
}
    if(impares.length==0){
        console.log("Não há números ímpares");
    }else{
        console.log(impares);
    }
*/

/*
//7 - Exercício
//7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
   if ( numbers[i] < menor ) {
      menor = numbers[i];
   }
}
console.log(menor);
*/

/*
// 8 - Exercício
//8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let vetor = [];
for(let i=1;i<=25;i++){
    vetor.push(i);
}
console.log(vetor);
*/

/*
//9 - Exercício
//9 - Utilizando o array criado no exercício anterior 
//imprima o resultado da divisão de cada um dos elementos 
//por 2.
let vetor = [];
for(let i=1;i<=25;i++){
    vetor.push(i/2);
}
console.log(vetor);
*/