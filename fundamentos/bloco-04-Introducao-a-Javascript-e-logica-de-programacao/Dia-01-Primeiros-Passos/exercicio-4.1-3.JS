//3 - Exercício - Comparador de três números

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
