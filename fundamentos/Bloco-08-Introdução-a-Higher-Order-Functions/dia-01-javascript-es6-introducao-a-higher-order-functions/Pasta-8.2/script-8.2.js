/*
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
*/

/**
Exercício - Para fixar
1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
   */
// - Solução - emailListInData.forEach(showEmailList);

/*
// Exercício 1  - Para fixar
1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (divisiveis) => ((divisiveis % 3) === 0) && ((divisiveis % 5) === 0);
const ehdivisivel = numbers.find(findDivisibleBy3And5);
console.log(ehdivisivel);
*/

// Exercício 2  - Para fixar
/**
2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => names.find((name) => name.length === 5);
  // Adicione seu código aqui:
console.log(findNameWithFiveLetters());
*/

// Exercício 3 - Para Fixar 
// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
/* 
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) { 
      return musicas.find((musica) => musica.id === id);
    // Adicione seu código aqui
  }
  
  console.log(findMusic('31031685'))
*/

  // Exercício 04
  /**
Array.some e Array.every
Para fixar
1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, 
retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((nomeAtual) => nomeAtual === name);
  //Adicione seu código aqui
}

console.log(hasName(names,'Bruna'));

/*
Exercício - Para Fixar
2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a 
mínima e caso contrário false , use every ;

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
      return arr.every((person) => person.age >= minimumAge);
    //Adicione seu código aqui
  }
  
  console.log(verifyAges(people, 16));
*/

/**
  Exercício 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((personA,personB) => personB.age - personA.age);
  // Adicione se código aqui
  
  console.log(people);
*/

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

/*
  Exercício 01 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
                 Dica: use a função find .
*/

/*
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1890).author.name;
}
console.log(authorBornIn1947());
*/

/**
  Exercício 02 - Retorne o nome do livro de menor nome.
                 Dica: use a função forEach .
 */

/*
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
  if (!nameBook || book.name.length < nameBook.length) {
  nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName());
*/

/**
Exercício 03 - Encontre o primeiro livro cujo nome possui 26 caracteres.
 */

/*
function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook());
*/

/**
Exercício 04 - Ordene os livros por data de lançamento em ordem decrescente.
 */


function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc());


/**
Exercício 05 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
 */
function everyoneWasBornOnSecXX() {
  return books.every((book) => (
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  ));
}
console.log(everyoneWasBornOnSecXX());

/**
Exercício 06 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
*/
function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1970 && book.releaseYear <= 1979);
}
console.log(someBookWasReleaseOnThe80s());

/**
Exercício 07 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, 
e false , caso contrário.
*/
function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());