const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  /**
   * 
Exercício - 01 - Crie uma função para adicionar o turno da noite na lesson2. 
Resolvido - Ok!
Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

const adicionaTurno = (obj, chave, valor) => {
    obj[chave] = valor;
    console.log('Exercício 01');
    console.log(lesson2);
};
adicionaTurno(lesson2, 'turno', 'noite');
/*

Exercício - 02 - Crie uma função para listar as keys de um objeto. 
Resolvido Ok!
Essa função deve receber um objeto como parâmetro.
*/

const listarKeys = (obj) => {
const chaves = Object.keys(obj);
console.log('Exercício 02');
    for (let i=0; i<chaves.length; i+=1){
        console.log(chaves[i]);
}
}
listarKeys(lesson1);
listarKeys(lesson2);
listarKeys(lesson3);

/*
Exercício 03 - Crie uma função para mostrar o tamanho de um objeto.
Resolvido - Ok!
*/
const tamanhoDoObj = (obj) => {
const tamanho = Object.keys(obj).length;
console.log('Exercício 03');
console.log(tamanho);
}
tamanhoDoObj(lesson1);
tamanhoDoObj(lesson2);
tamanhoDoObj(lesson3);

/*
Exercício 04 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
Resolvido - Ok!
*/
const valoresDoObj = (obj) => {
const valores = Object.values(obj);
    console.log('Exercício 04');
    for (let i=0; i<valores.length; i+=1){
        console.log(valores[i]);
}
};
valoresDoObj(lesson1);
valoresDoObj(lesson2);
valoresDoObj(lesson3);

/*
Exercício 05: Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
Copiar
console.log(allLessons);
*/

const allLessons = Object.assign({},{lesson1, lesson2, lesson3 });
console.log('Exercício 05');
console.log(allLessons);

/*
Exercício 06 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de 
estudantes em todas as aulas.
Resolvido - Mais ou menos.
*/
const totalDeEstudantes = (obj) => {
console.log('Exercício 06');
let total = 0;
const todasAsChaves = Object.keys(obj);
for(index in todasAsChaves){
    console.log(index);
    total +=obj[todasAsChaves[index]].numeroEstudantes;
}
return total; 
console.log(todasAsChaves.length);
};
console.log(totalDeEstudantes(allLessons));

/*
Exercício 07 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
Resolvido - Ok!
*/
const getValueByNumber = (obj ,index) => {
    console.log('Exercício 07');
    console.log(Object.values(obj)[index]);
};
getValueByNumber(lesson3, 1);
/*
Por exemplo:
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'


Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
Copiar
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
*/