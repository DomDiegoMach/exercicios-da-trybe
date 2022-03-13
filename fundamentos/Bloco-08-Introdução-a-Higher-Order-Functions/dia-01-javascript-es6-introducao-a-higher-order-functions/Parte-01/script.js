/* Exercício 01
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email 
no formato nome_da_pessoa@trybe.com .
*/
const newEmployees = () => {
    const employees = {
      id1: geradorDeEmpregado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: geradorDeEmpregado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: geradorDeEmpregado('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const geradorDeEmpregado = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return {nomeCompleto, email: `${email}@betrybe.vom`}
  }

// console.log(newEmployees(geradorDeEmpregado));

// Exercício 02
/**
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma 
função que checa se o número apostado é igual ao número sorteado. 
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
 */
const verificador = (apostado,numeroSorteado) => {
//  console.log(`O número sorteado aqui (1) foi ${numeroSorteado()}`);
//  console.log(`O número apostado aqui foi ${apostado}`);
  if(apostado === numeroSorteado()){
     return "Parabens você ganhou" 
   }else{
    return "Tente novamente"
  }
}
const numeroSorteado = () => {
  const sorteado = parseInt((Math.random()*(5 -1)+1).toFixed(0));
//  console.log(`O número sorteado aqui (2) foi ${sorteado}`);
  return (sorteado);  
};
// console.log(`O número sorteado aqui (3) foi ${numeroSorteado()}`);
// console.log(verificador(3 , numeroSorteado));

//Exercício 03
/**
3 - Crie uma HOF que receberá três parâmetros:
O primeiro será um array de respostas corretas (Gabarito);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. 
Para isso essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for "N.A");
Uma resposta incorreta reduz a pontuação final em 0.5 ponto. Ao final, 
a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. 
Utilize os seguintes arrays:.
 */
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparador = (itemCorreto,itemAluno) => {
  if(itemCorreto === itemAluno){
    return 1;
  }if(itemAluno === 'N.A'){
    return 0;
  }
    return -0.5;
};

const contador = (itemCorreto, itemAluno, action) => {
let pontos = 0;
for(let i=0; i<itemCorreto.length; i+=1) {
  const actionReturn = action(itemCorreto[i],itemAluno[i])
  pontos += actionReturn;  
}
return `Resultado final ${pontos}`;
}

console.log(contador(RIGHT_ANSWERS,STUDENT_ANSWERS,comparador));