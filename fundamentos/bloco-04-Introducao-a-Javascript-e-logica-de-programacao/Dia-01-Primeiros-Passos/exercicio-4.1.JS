// Exercícios do Bloco 4.1

//1 - Exercício - Operações Matemáricas
/*
let a = 10;
let b = 2;

let soma = a+b;
let subtracao = a-b;
let multiplicacao = a*b;
let divisao = a/b;
let resto = a%b;

console.log(`Soma:----------Para (a) igual a ${a} e (b) igual a ${b}, o resultado é: ${soma}`);
console.log(`Subtração:-----Para (a) igual a ${a} e (b) igual a ${b}, o resultado é: ${subtracao}`);
console.log(`Multiplicação:-Para (a) igual a ${a} e (b) igual a ${b}, o resultado é: ${multiplicacao}`);
console.log(`Divisão:-------Para (a) igual a ${a} e (b) igual a ${b}, o resultado é: ${divisao}`);
console.log(`Resto:---------Para (a) igual a ${a} e (b) igual a ${b}, o resultado é: ${resto}`);
*/

//2 - Exercício - Encontrar o maior número
/*
let a = 6;
let b = 8;
if(a>b){
    console.log(`${a} é maior que ${b}`)
}else if(a===b){
    console.log(`${a} é igual a ${b}`)
}else{
    console.log(`${a} é menor que ${b}`)
}
*/

//3 - Exercício - Comparador de três números
/*
let a = 13;
let b = 11;
let c = 13;
let resp = `Entre os valores ${a}, ${b} e ${c};`
if((a>=b)&&(a>=c)){
    console.log(`${resp} o maior valor é: ${a}`);
}else if((b>=a)&&(b>=c)){
    console.log(`${resp} o maior valor é: ${b}`);
}else if((c>=a)&&(c>=b)){
    console.log(`${resp} o maior valor é: ${c}`);
}
*/

//4 - Exercício - Positivo ou Negativo
/*
let a = -5;
if(a>=0){
    console.log(`O número ${a} é positivo`);
}else{
    console.log(`O número ${a} é negativo`);
}
*/

//5 - Exercício - Ângulos de um triângulo
/*
let a = 45;
let b = 45;
let c = 90;
if((a+b+c == 180)&&((a<180)||(b<180)||(c<180))){
    console.log(`Os ângulos ${a}, ${b} e ${c} correspondem aos ângulos internos de um triângulo`);
}else{
    console.log(`${a},${b} e ${c} não correspondem aos ângulos internos de um triângulo`);
}
*/

//6 - Movimentos de uma peça de xadrez
/*
function xadrez(peca){
let aa ="anda apenas uma casa para frente";
let bb ="anda apenas em linha reta por todo o tabuleiro";
let cc ="anda apenas em L";
let dd ="anda apenas nas diagonais ao longo do tabuleiro";
let ee ="anda em linha reta ou nas diagonais ao longo de todo o tabuleiro";
let ff ="anda apenas uma casa em todas as direções";
let pecas = peca.toLowerCase();
if(pecas == "peão"){
    console.log(`O ${pecas} ${aa} `);
}else if(pecas == "torre"){
    console.log(`O ${pecas} ${bb} `);
}else if(pecas == "cavalo"){
    console.log(`O ${pecas} ${cc} `);
}else if(pecas == "bispo"){
    console.log(`O ${pecas} ${dd} `);
}else if(pecas == "rainha"){
    console.log(`A ${pecas} ${ee} `);
}else if(pecas == "rei"){
    console.log(`O ${pecas} ${ff} `);
}else{
    console.log(`${pecas} não é uma peça válida`)
}
//console.log(pecas);
}
(xadrez("Xablau"));
*/

//7 - Exercício - Conversão de Notas
/*
let nota = 84;
    if((nota>100)||(nota<0)){
        console.log("Nota Inválida");
    }else if(nota>=90){
        console.log("Conceito A");
    }else if(nota>=80){
        console.log("Conceito B");
    }else if(nota>=70){
        console.log("Conceito C");
    }else if(nota>=60){
        console.log("Conceito D");
    }else if(nota>=50){
        console.log("Conceito E");
    }else if(nota<50){
        console.log("Conceito F");
    }
*/


//8 - Exercício - Descobrir número par
/*
let a = 8;
let b = 2;
let c = 7;
if((a%2==0)||(b%2==0)||(c%2==0)){
    console.log("true");
}else{
    console.log("false");
}
*/

//9 - Exercício - Descobrir número impar
/*
let a = 4;
let b = 8;
let c = 6;
if((a%2!=0)||(b%2!=0)||(c%2!=0)){
    console.log("True");
}else{
    console.log("False");
}
*/

//10 - Exercício - Lucro de um mil unidades de um produto
/*
let valorVenda = 10;
let valorCusto = 10;
let impostoSobreOCusto = (valorCusto*0.2);
let valorCustoTotal = valorCusto+impostoSobreOCusto;
let lucro = (valorVenda - valorCustoTotal);
if((valorVenda<0)||(valorCusto<0)){
    console.log("Erro:Valor de Venda ou Custo não podem ser negativos");
}else{
    console.log("O lucro da venda de mil unidades é: "+1000*lucro);
}
*/

//11 - Exercício - 
/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o 
IR. 
Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. 
O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo 
a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/
let salarioBruto = 3000;
let aliquotaInss;
let Ir;

if(salarioBruto>=5189.82){
    aliquotaInss = 570.88;
}else if(salarioBruto>=2594.93){
    aliquotaInss = salarioBruto*0.11;
}else if(salarioBruto>=1556.95){
    aliquotaInss = salarioBruto*0.09;
}else if(salarioBruto<1556.95){
    aliquotaInss = salarioBruto*0.08;
}
let salarioBase = salarioBruto-aliquotaInss;

if(salarioBase>=4664.68){
    Ir = (salarioBase*0.275)-869.36;

}else if(salarioBase>=3751.06){
    Ir = (salarioBase*0.225)-636.13;

}else if(salarioBase>=2826.66){
    Ir = (salarioBase*0.150)-354.80;

}else if(salarioBase>=1903.99){
    Ir = (salarioBase*0.075)-142.80;

}else if(salarioBase<1556.99){
    Ir = 0;
}
let salarioLiquido = salarioBase-Ir;
console.log(salarioLiquido);