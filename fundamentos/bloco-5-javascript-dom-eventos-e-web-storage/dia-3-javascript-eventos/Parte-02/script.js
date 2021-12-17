function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.
/* 
Exercício 1
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas 
da tag <ul> com ID "days". 
Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente 
Segunda-feira e Terça-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . 
    Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . 
    Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . 
Ex: <li class="day friday">4</li>
*/

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

/*
Exercício 2
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function btnFeriados (Feriados) {                       // Define nome da função e argumento
  let paiDebotao = document.querySelectorAll('div')[2]; // Determina uma váriavel para comportar o elemento pai
  let btnHoliday = document.createElement('button');    // Determina uma variável ao criar o elemento 'button'
  btnHoliday.innerHTML = 'Feriados';                    // Determina o 'nome' do botão
  btnHoliday.id = 'btn-holiday';                        // define a 'id' do elemento botão
  paiDebotao.appendChild(btnHoliday);                   // inclui o botão como 'filho' do 'pai'
}
btnFeriados ("Feriados");                               // declara a função

/*
Exercício 3
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias 
que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. 
Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
function mostraFeriados (){                                      // Define o nome da função
let clicaBtnHoliday = document.querySelector('#btn-holiday');    // Define uma variável identificando o botão
let todosOsFeriados = document.querySelectorAll('.holiday');     // Define uma variável com toda a classe holiday
let backgroundColor = 'rgb(238,238,238)';                        // Define a cor de fundo padrão
let novaCor = 'red';                                             // Define a cor após clicar o mouse uma vez
clicaBtnHoliday.addEventListener('click', function() {           // Define o método addEventListener: o que fazer ao clicar o botão
  for(let i = 0; i < todosOsFeriados.length; i += 1){            // Estabele o laço por causa do query.SelectorAll
    if (todosOsFeriados[i].style.backgroundColor === novaCor) {  // Condicional Se a cor de cada elemento Holiday for igual a
      todosOsFeriados[i].style.backgroundColor = backgroundColor;// NovaCor então atribui a cor de fundo padrão
    } else {                                                     // Caso contrário
      todosOsFeriados[i].style.backgroundColor = novaCor;        // Atribui a cor de fundo igual a nova cor
    }
  }
})
};
mostraFeriados();                                                // Declara função que muda a cor dos feriados

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/
function sextou(string){                                      // Define a função sextou como parametro string
let paiDobotao = document.querySelector('.buttons-container');// define o pai do botão como sendo a classe 'buttons-container'
let btnSextou = document.createElement('button');             // Cria o elemento botão
btnSextou.id = 'Sexta-feira';                                 // define a id do botão com 'Sexta-feira'
btnSextou.innerHTML = string;                                 // Define o nome do botão
paiDobotao.appendChild(btnSextou);                            // define o botão como filho da classe 'buttons-container'
}
sextou('Sexta-feira');                                        // Declara a variável com parâmetro 'Sexta-feira'

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica 
o texto exibido nos dias que são Sexta-feira. 
É interessante que este botão possua também a lógica inversa. 
Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
function mostraQueSextou(){                                   // Define o nome da função
let clicaBtnSextou = document.querySelector('#Sexta-feira');  //Atribui a uma variável a ação do botão Sextou
let todasAsSextas = document.getElementsByClassName('friday');// Define uma variável com toda a classe friday
let textoDeSexta = 'Sextou!'                                  // Atribui Texto para Sextas-feiras
let sextasDeDez = [4, 11, 18, 25];
clicaBtnSextou.addEventListener('click', function() {       // Define o método addEventListener: o que fazer ao clicar o botão
  for(let i = 0; i < todasAsSextas.length; i += 1){            // Estabele o laço por causa do query.SelectorAll
    if(todasAsSextas[i].innerHTML !== textoDeSexta){
    todasAsSextas[i].innerHTML = textoDeSexta;
  }else {
    todasAsSextas[i].innerHTML = sextasDeDez[i];
  }
  }
})
}
mostraQueSextou();
/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". 
Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, 
quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target.
*/
////////////////////////////////////////Não//ficou//claro\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function mouseEmCima(){                               //Declara função que descreve a ação do 
                                                      //mouse sobre o elemento
let diasAlvo = document.querySelector('#days');       //Declara uma variável para os dias do mês
                                                      //Obs: Só funciona com utilizando
                                                      //document.querySelector PQ ??? 
diasAlvo.addEventListener('mouseover', function(event){ //Usa o método aEL com mouseover
event.target.style.fontSize = '30px';                 //Define o tamanho da fonte com o mouse em cima
event.target.style.fontWeight = '600';                //Define parâmetro da fonte
})};                                                  //Encerra o bloco da função

function mouseFora() {                                //Declara função que descreve a ação do mouse
                                                      //fora do elemento
let diasAlvo = document.querySelector('#days');       //Declara uma variável para os dias do mês
diasAlvo.addEventListener('mouseout', function(event) { //Usa o método aEL com mouseover
event.target.style.fontWeight = '200';                //Define o tamanho da fonte com o mouse em cima
event.target.style.fontSize = '20px';                 //Define parâmetro da fonte
})};                                                  //Encerra o bloco da função
mouseEmCima();                                        //Chama a função
mouseFora();                                          //Chama a função

/*
Exercício 7
Implemente uma função que adiciona uma tarefa personalizada ao calendário. 
(1)A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e 
(2)criar dinamicamente um elemento com a tag <span> contendo a tarefa.
(3) O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/

function novaTarefa(tarefa){                              //Declara função que vai criar a nova tarefa
let nomeDaTarefa = document.createElement('span')         //declara variável que cria elemento 'span'
                                                          //Obs: Revisar sobre o elemento span
let blocoDeTarefas = document.querySelector('.my-tasks'); //Define a variável que será o pai do elemento                                                  
  nomeDaTarefa.innerHTML = tarefa;                        // Define qual será o nome indicado da tarefa
  blocoDeTarefas.appendChild(nomeDaTarefa);               //Estabelece a relação pai/filho do elemento 
  };                                                      //Encerra o bloco de instruções da função
novaTarefa('Cozinhar');

/*
Exercício 8
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de 
tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

/**
Exercício 9
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> 
referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, 
quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , 
ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/