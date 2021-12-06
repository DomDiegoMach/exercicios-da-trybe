// ----------------------------------------------------------------------------------------------
console.log("Exemplo 02");
    let diasDaSemana = {
        1: 'domingo',
        2: 'segunda',
        3: 'terça',
        4: 'quarta',
        5: 'quinta',
        6: 'sexta',
        7: 'sábado',
      };
      
      //console.log(diasDaSemana.1); // SyntaxError: Unexpected number
      console.log(diasDaSemana['1']); // domingo
      console.table(diasDaSemana);


// ----------------------------------------------------------------------------------------------
console.log("Exemplo 03");
let conta = {
    agencia: '0000',
    banco: {
            cod: '012',
            id: 4,
            nome: 'TrybeBank',
            },
    };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4
  console.table(conta);

// ------------------------------------------------------------------------------------
console.log("Exemplo 04");
let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  console.table(usuario);  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  // --------------------------------------------------------------------------------------------------
  console.log("Exemplo 05");
    let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  console.table(moradores);
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  // ---------------------------------------------------------------------------------------------------
  //Exercício 01
  console.log('-----Exercício 01-----');
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
};
for(let key in player){
    console.log(key);
    }
    console.log(player.name);
    console.table(player);

    console.log("A Jogadora "+ player['name']+ " " + player['lastName'] + " tem " + player['age']+ " anos de idade.");
    console.log("A Jogadora "+ player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

player['bestInTheWorld'] = [2007, 2008, 2009, 2010, 2018];

console.log("A Jogadora "+ player.name + " " + player.lastName + " foi eleita melhor jogadora do mundo por " + player.bestInTheWorld.length + " vezes.");

console.log("A Jogadora possui "+ player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");

console.log(' ');
console.log(' ');
 //Exercício 02
 console.log('-----Exercício Objeto - Parte 02-----');
 console.log('-----                           -----');
 console.log('-----                           -----');
 console.log(' ');
 /*
 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para 
 cada nome, substituindo o xxxxx pelo nome em questão.

 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores 
 desse objeto.
 */ 
 let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let pessoa in names){
      console.log('Olá '+ pessoa + ' ' + names[pessoa]);
  }

  console.log(' ');
  console.log('-----                           -----');
  console.log('-----                           -----');
  console.log(' ');
//  2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores 
// desse objeto.
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car){
      console.log(key + ' ' + car[key]);
  }