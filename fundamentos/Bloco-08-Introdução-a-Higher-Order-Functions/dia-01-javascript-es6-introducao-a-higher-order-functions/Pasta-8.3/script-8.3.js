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
/**
1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
*/
const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  /*
  function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
console.log(formatedBookNames());
*/

/*
const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];
*/

/**
2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , 
com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando
 o livro foi lançado.
 */

 /*
function nameAndAge() {
  return books.map((books) => (
    { 
      age: (books.releaseYear - books.author.birthYear),
      author: books.author.name,
    })).sort((a, b) => a.age - b.age);
  }
console.log(nameAndAge());
*/

/**
3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
 */
/*
function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((books) => ((books.genre === 'Fantasia' || books.genre === 'Ficção Científica')));
}
console.log(fantasyOrScienceFiction());
*/

/**
4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
*/
/*
function oldBooksOrdered() {
  // escreva seu código aqui
  const dataAtual = new Date().getFullYear(); 
  return books.filter( (books) => ((dataAtual - books.releaseYear) > 60)).
               sort((booksA, booksB) => booksA.releaseYear - booksB.releaseYear);
}
console.log(oldBooksOrdered());
console.log(new Date().getFullYear());
*/

/**
5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
 */
/*
function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const generos = ['Fantasia', 'Ficção Científica'];
  return books.filter((books) => generos.includes(books.genre)).map((books) => books.author.name).sort();
  // return books.filter((books) => books.genre === 'Fantasia' || books.genre === 'Ficção Científica');
}
console.log(fantasyOrScienceFictionAuthors());
*/

/**
6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
 */
/*
function oldBooks() {
  // escreva seu código aqui
  const today = new Date().getFullYear();
  console.log(today);
  return books.filter((books) => (today - books.releaseYear) > 60).map((books) => books.name);
}
console.log(oldBooks());
*/

/**
7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).
 */
function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.filter((books) => (books.author.name[1]=== '.') && (books.author.name[4] === '.') && (books.author.name[7] === '.'))
  .map((books) => books.name).toString();
}
console.log(authorWith3DotsOnName());
/**
{
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    }
 */