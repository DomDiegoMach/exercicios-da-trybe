/*
1 - Dada uma matriz, transforme em um array.
*/
const arrays = [
                    ['1', '2', '3'],
                    [true],
                    [4, 5, 6],
                ];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acumulador , elemento) => acumulador.concat(elemento), []);
}
console.log(flatten());

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
2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
*/
function reduceNames() {
    const names = books.reduce((acc, book, index, array) => {
      // if (index === array.length - 1) return `${acc} ${book.author.name}.`;
      return `${acc} ${book.author.name} `;
    }, '');
//    console.log();
    return names;
  }
console.log(reduceNames());

/**
3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
*/
function averageAge() {
    // escreva seu código aqui
         // console.log(books.length);
        return (books.reduce((acumulador, el, i, array) => acumulador + (el.releaseYear - el.author.birthYear), 0))/books.length;
        // return idades/(books.length);
    }
  console.log(averageAge());

/**
4 - Encontre o livro com o maior nome.
*/
function longestNamedBook() {
    // let size = []
    return books.reduce((acc, el) => { 
        if(el.name.length > acc.name.length){
        return el
        }
        return acc;
    // escreva seu código aqui
  });
}
  console.log(longestNamedBook())