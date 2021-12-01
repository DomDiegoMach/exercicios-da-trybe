//10 - Exercício - Lucro de um mil unidades de um produto

let valorVenda = 15;
let valorCusto = 10;
let impostoSobreOCusto = (valorCusto*0.2);
let valorCustoTotal = valorCusto+impostoSobreOCusto;
let lucro = (valorVenda - valorCustoTotal);
if((valorVenda<0)||(valorCusto<0)){
    console.log("Erro:Valor de Venda ou Custo não podem ser negativos");
}else{
    console.log("O lucro da venda de mil unidades é: "+1000*lucro);
}

