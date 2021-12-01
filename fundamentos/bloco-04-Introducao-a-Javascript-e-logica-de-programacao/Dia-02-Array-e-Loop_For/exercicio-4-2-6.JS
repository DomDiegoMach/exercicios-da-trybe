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
