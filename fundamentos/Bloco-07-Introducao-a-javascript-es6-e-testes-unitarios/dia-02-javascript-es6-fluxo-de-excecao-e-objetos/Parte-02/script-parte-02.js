const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  /**Exercício 01 - Resolvido!
Agora você vai fazer alguns exercícios de fixação.
Complete a função customerInfo() para que seu retorno seja similar a: 
"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
*/ 
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery['deliveryPerson']}, entrega para ${order.name}, telefone: ${order
        .phoneNumber}, Endereço: Rua ${order.address.street}, Número ${order.address.number}, Apto ${order.address.apartment}`);
}
  
  customerInfo(order);
  
/* Exercício 02 - Resolvido!
Complete a função orderModifier() para que seu retorno seja similar a: 
"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
*/

  const orderModifier = (order) => {
      const novoNome = order.name = 'Luiz Silva';
      const novoValor = order.payment = '50';
      const sabor1 = Object.keys(order.order.pizza);
      // const sabor2 = order.order.pizza.pepperoni;
      const bebida = order.order.drinks.coke.type;
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${novoNome}, o total do seu pedido de ${sabor1[0]}, ${sabor1[1]} e ${bebida} é R$ ${novoValor}`);
  
  }
  
  (orderModifier(order));
