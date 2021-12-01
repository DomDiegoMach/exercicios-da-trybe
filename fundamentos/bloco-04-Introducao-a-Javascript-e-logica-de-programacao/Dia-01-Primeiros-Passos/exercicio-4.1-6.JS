//6 - Movimentos de uma peça de xadrez

let peca = "Torre";
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
    console.log(`A ${pecas} ${bb} `);
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

