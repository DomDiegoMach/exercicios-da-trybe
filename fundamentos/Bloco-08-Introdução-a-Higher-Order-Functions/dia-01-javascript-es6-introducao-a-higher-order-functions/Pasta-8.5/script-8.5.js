// Exercício 01 - Spread Operator
/**
Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. 
Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , 
faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
 */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'maça', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'ameixa', 'limão'];

const fruitSalad_ex1 = ((fruit, additional) => [...fruit, ...additional]);

// Ou ...

const fruitSalad_ex2 = (fruit, additional) => {
  // Esreva sua função aqui
  const somaDeFrutas = [...fruit, ...additional];
  return somaDeFrutas;
};
console.log('--------------------------------------');
console.log(`Exercício 01: - com arrow -  ${fruitSalad_ex1(specialFruit, additionalItens)}`);
console.log(`Exercício 01: - sem arrow - ${fruitSalad_ex2(specialFruit, additionalItens)}`);
console.log('--------------------------------------');
//Exercício 02 Object Destructuring
/**
Object Destructuring
1 - Temos dois objetos, um com informações pessoais de um usuário e outro com informações referentes 
ao cargo deste usuário na empresa trappistEnterprise . Precisamos criar um terceiro objeto, 
que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .
 */
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const userPlusJobs = {
      ...user,
      ...jobInfos,
  };
  console.log('Exercício 02:');
  console.log(typeof userPlusJobs);
  console.log(Array.isArray(userPlusJobs));
  console.log(userPlusJobs);
  console.log('--------------------------------------');
//Exercício 03
/* 2 - Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados do objeto criado anteriormente. 
Para isso, utilize a desestruturação de objetos em conjunto com template literals .
*/
console.log('Exercício 03:');
//Aplicando a desestruturação:
const {name, age, nationality, profession, squad, squadInitials} = userPlusJobs;
console.log(`Hi, my name is ${name}, I have ${age} years old and I am ${nationality}. I work as a ${profession} at the company ${squadInitials}-${squad}`);
console.log('--------------------------------------');
// Exercício 04
/**
Array Destructuring
1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
 */
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
console.log('Exercício 04:');
console.log(saudacoes[1]);
console.log(saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;
console.log (realizaSaudacao(saudacao)); // Olá
console.log('--------------------------------------');
// Exercício 05
/**
 * // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
*/
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
// [comida, animal, bebida] = ['arroz', 'gato', 'água'];

console.log('Exercício 05:');
console.log(comida, animal, bebida); // arroz gato água
console.log('--------------------------------------');
// Exercício 06
/**
3 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. 
Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
 */
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log('Exercício 06:');
console.log(numerosPares); // [6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// [, , , ...numerosPares] = numerosPares;
[, , , ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
console.log('--------------------------------------');
// Exercício 07
console.log('Exercício 07:');
/**
Default Destructuring
Do jeito que está, quando passamos person para a função getNationality o retorno é João is undefined. 
Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian .
 */
const getNationality = ({ firstName, nationality  = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
console.log('--------------------------------------');

//Exercício 08
/**
Object Property Shorthand
Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
 */
console.log('Exercício 08:');
const getPosition = (latitude, longitude) => ({
//      latitude: latitude,
//      longitude: longitude});
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));
  console.log('--------------------------------------');


  // Exercício 09
  /**
Default Parameters
Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. 
Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
   */
console.log('Exercício 09:');
const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number*value;
  };
  
  console.log(multiply(8,2));
