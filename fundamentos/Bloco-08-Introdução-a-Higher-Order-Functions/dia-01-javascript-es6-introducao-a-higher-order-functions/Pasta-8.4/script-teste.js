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
  function autores(){
      let autor = [];
      books.filter((book) => autor.push(book.author.name));
      return autor.join(', ');
  }
  console.log(books[4].name);
  console.log(autores());

  function idadeDosAutores(){
      let lancamento = [];
      let nascimento = [];
      let diferenca = [];
      let tamanhos = []
      books.filter((books) => lancamento.push(books.releaseYear));
      books.filter((books) => nascimento.push(books.author.birthYear));
      books.filter((books) => diferenca.push(books.releaseYear - books.author.birthYear));
      books.filter((books) => tamanhos.push(books.name.length));
      console.log(lancamento);
      console.log(nascimento);
      console.log(diferenca);
      console.log(tamanhos);
      const soma =  diferenca.reduce((acc, curr) => ((acc + curr)));
      const result = soma/(diferenca.length);
      return result;
  }
  console.log(idadeDosAutores());

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  console.log(names.split());