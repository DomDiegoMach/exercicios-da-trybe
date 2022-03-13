// Exercício 01
/*
1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. 
O código deve retornar em sequência 2 , 15 e 54 .
Dica: use spread operator .
*/
console.log('Exercício 01');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangle4 = [7, 8];
const rectangles = [rectangle1, rectangle2, rectangle3, rectangle4];

rectangles.forEach((rectangle) => {
  // rectangleArea() // altere a chamada da funcao rectangleArea
  rectangleArea(...rectangle);
  console.log(rectangle[0] * rectangle[1]);
});
console.log('--------------------------------------');


//Exercício 02
console.log('Exercício 02');

/**
2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest .
*/
// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((acc, el) => acc + el), 0);
console.log(sum(Math.ceil((Math.random()+5) *9),5,8,6,4,3));
console.log('--------------------------------------');

// Exercício 03
console.log('Exercício 03');
// Dica: use object destructuring.
const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
  console.log('--------------------------------------');

  // Exercício 04
  /**
4 - Escreva uma função filterPeople que, dada uma lista de pessoas, 
retorna todas as pessoas australianas que nasceram no século 20:
Dica: use object destructuring .
   */
console.log('Exercício 04');
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  const filterPeople = (arr) => arr.filter(({ nationality, bornIn }) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000);
    console.log(filterPeople(people));
    console.log('--------------------------------------');

// Exercício 05
console.log('Exercício 05');
/*
5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. 
Detalhe: você precisa fazer essa função gastando 1 linha só:
Dica: use array destructuring .
*/
const myList = [1, 2, 3];

const swap = ([a, b, c]) => [c, b, a];
console.log(swap(myList));
console.log('--------------------------------------');

// Exercício 06
console.log('Exercício 06');
/*
6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, 
cada carro é modelado como um array. Porém, essa modelagem está baixo nível. 
Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:
Dica: use array destructuring e abbreviation object literal .
*/
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
// escreva toObject abaixo
const carros = ([nome, modelo, ano]) => ({nome, modelo, ano});
console.log(carros(['Palio', 'Fiat', 2019]));
console.log('--------------------------------------');
// Exercício 07
console.log('Exercício 07');
/*
7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também 
a devida unidade de comprimento:
Dica: use object destructuring .
*/
const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  // escreva shipLength abaixo
  const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;
  console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'
  console.log('--------------------------------------');

  // Exercício 08
  console.log('Exercício 08');
// escreva greet abaixo
const greet = (name, greetings = 'Hi') => `${greetings} ${name}`;
console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
console.log('--------------------------------------');

// Exercício 09
console.log('Exercício 09');
/**
9 - Existe um objeto yearSeasons que representam as estações do ano. 
cada estação é uma chave deste objeto, e o valor de cada chave é um array de strings, representando os meses daquela estação. 
A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
Dica : use object destructuring e spread operator.
OBS : As estações do ano aqui descritas têm base nas estações do hemisfério norte.

 */
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
// const inverno = (Object.entries(yearSeasons));
// const { winter } = yearSeasons;
 const { winter: inverno} = yearSeasons; 
// console.log(yearSeasons);
//console.log(winter);
 console.log(inverno);

  const months = ({spring, summer, autumn, winter}) => [...spring,...summer,...autumn,...winter];
  console.log(months(yearSeasons));
  console.log('--------------------------------------');
