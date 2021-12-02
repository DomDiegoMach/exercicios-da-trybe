/*
// Exercício 1
// O fatorial é representado pelo sinal !
// Crie um algoritmo que retorne o fatorial de 10.
let fatorial = 1;
for(let i=10;i>0;i--){
    fatorial = fatorial*i;
}
console.log(fatorial);
*/

/*
// Exercício 2
//Inverter Palavras
let palavra = "trybe";
let invertida = "";
for(let i=0;i<palavra.length;i++){
    invertida = invertida+palavra[((palavra.length)-1)-i];
}
console.log(invertida);
*/

/*
// Exercício 3
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0].length;
let menor = maior;
for(let i=0;i<array.length;i++){
    if(maior < array[i].length){
        maior = array[i].length;
        console.log(`A maior palavra é ${array[i]} possui ${array[i].length} letras.`);
    }
}
for(let i=0;i<array.length;i++){
    if(menor > array[i].length){
        menor = array[i].length;
        console.log(`A menor palavra é ${array[i]} possui ${array[i].length} letras.`);
    }
}
*/


// Exercício 4
// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
//    Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let vetor = [];
let vetor2 = [];
div=0;
for(i=15;i>0;i--){
    for(i2=15;i2>0;i2--){
        if((i%i2==0)&&((i/i2)>=1)){
            console.log(`${i} por ${i2} é igual a `);
            div = div +1;
            console.log(div);
            vetor.push(i);                        
        }
        }
    }
console.log(vetor);
for(let i=0;i<vetor.length;i++){
    if((vetor[i]%2)!=0){
        vetor2.push(vetor[i]);
    }
}
console.log(vetor2);
