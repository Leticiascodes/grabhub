
const fs = require('fs')

module.exports = (app) => {
  // app.get('/', function (req, resp) {

  //   const request = require('request');
  //   request('http://www.google.com', function (error, response, body) {
  //     console.error('error:', error); // Print the error if one occurred
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     console.log('body:', body); // Print the HTML for the Google homepage.

  //     resp.send(body);
  //   });

  // });

  exemplo0 = {
    "id": "b6bbf809-11f6-422a-831e-bae06a8e999a",
    "reference": "3068122212559999",
    "shortReference": "9999",
    "createdAt": "2019-08-28T14:35:03.27Z",
    "scheduled": false,
    "type": "DELIVERY",
    "merchant": {
      "id": "96122c28-0c99-41d4-8498-b6a361555999",
      "shortId": "99999",
      "name": "Teste",
      "address": {
        "formattedAddress": "AV DOS TESTE",
        "country": "BR",
        "state": "SP",
        "city": "TESTE",
        "neighborhood": "TESTE",
        "streetName": "AV DOS TESTE",
        "streetNumber": "999",
        "postalCode": "06020010"
      }
    },
    "payments": [
      {
        "name": "MASTERCARD •••• 9999",
        "code": "MC",
        "value": 2.99,
        "prepaid": true,
        "transaction": "99999999999999999",
        "issuer": "MASTERCARD •••• 9999",
        "authorizationCode": "99999"
      }
    ],
    "customer": {
      "id": "9999999999",
      "name": "Teste ",
      "taxPayerIdentificationNumber": "999999999",
      "phone": "0800 007 0110 ID: 29584168",
      "ordersCountOnRestaurant": 2
    },
    "items": [
      {
        "id": "53d33ead-1903-4496-82fc-6cdbc0f4803e",
        "name": "Item teste",
        "quantity": 5,
        "price": 1.2,
        "subItemsPrice": 0,
        "totalPrice": 1.2,
        "discount": 0.0,
        "addition": 0.0,
        "externalCode": "9985"
      },
      {
        "id": "26f56551-3e7e-44a4-9009-fdfba0ab0519",
        "name": "10 itens por 4,99",
        "quantity": 1,
        "price": 12.64,
        "subItemsPrice": 0.0,
        "totalPrice": 12.64,
        "discount": 0.0,
        "addition": 0.0,
        "externalCode": "19999",
        "subItems": [
          {
            "id": "ea7232a3-a99c-4d6b-a232-6fd57fe9fb18",
            "name": "Calabresa",
            "quantity": 6,
            "price": 0.0,
            "totalPrice": 0.0,
            "discount": 0.0,
            "addition": 0.0,
            "externalCode": "54875"
          },
          {
            "id": "56c5997a-e3b4-4efa-985e-58be4f8120ea",
            "name": "Carne",
            "quantity": 2,
            "price": 0.0,
            "totalPrice": 0.0,
            "discount": 0.0,
            "addition": 0.0,
            "externalCode": "8879879"
          },
          {
            "id": "216a97cd-8a3e-40f2-ad4e-a8147150f53b",
            "name": "Frango",
            "quantity": 2,
            "price": 0.0,
            "totalPrice": 0.0,
            "discount": 0.0,
            "addition": 0.0,
            "externalCode": "7874"
          }
        ]
      }
    ],
    "subTotal": 18.64,
    "totalPrice": 25.54,
    "deliveryFee": 6.9,
    "deliveryAddress": {
      "formattedAddress": "Av. dos Testes, 100",
      "country": "BR",
      "state": "SP",
      "city": "Teste",
      "coordinates": {
        "latitude": -23.541622,
        "longitude": -46.766754
      },
      "neighborhood": "Vila Teste",
      "streetName": "Av. dos Testes",
      "streetNumber": "100",
      "postalCode": "06020012",
      "complement": "Ifood"
    },
    "deliveryDateTime": "2019-08-28T15:10:03.27Z",
    "preparationStartDateTime": "2019-08-28T14:35:03.27Z",
    "preparationTimeInSeconds": 2096,
    "isTest": true,
    "benefits": [
      {
        "value": 8.00,
        "sponsorshipValues": {
          "IFOOD": 0,
          "MERCHANT": 8.00
        },
        "target": "CART"
      },
      {
        "value": 7.65,
        "sponsorshipValues": {
          "IFOOD": 7.65,
          "MERCHANT": 0.00
        },
        "target": "ITEM"
      },
      {
        "value": 6.90,
        "sponsorshipValues": {
          "IFOOD": 6.90,
          "MERCHANT": 0
        },
        "target": "DELIVERY_FEE"
      }
    ]
  }

  exemplo1 = {
    "id": "ff80808161091d9601610adffc211dbf",   //Id de referencia interno
    "reference": "5101428012317050",    // Id de referencia do pedido
    "shortReference": "3409",   //Extranet Id
    "createdAt": "2018-01-18T20:05:06.177Z",    //Timestamp do pedido
    "type": "DELIVERY", //Tipo do pedido("DELIVERY" ou "TOGO")
    "merchant": {   //Dados do restaurante
      "id": "10487",  //Identificador unico do restaurante⁎
      "name": "Modelo Area",  //Nome do restaurante
      "phones": [ //Telefone do restaurante
        "(11) 12345679"
      ],
      "address": {    //Endereço
        "formattedAddress": "R Teste",  //Endereço formatado
        "country": "BR",    //Pais
        "state": "AC",  //Estado
        "city": "BUJARI",   //Cidade
        "neighborhood": "OUTROS",   //Bairro
        "streetName": "R Teste",    //Endereço (Tipo logradouro + Logradouro)
        "streetNumber": "100",  //Numero
        "postalCode": "12345678"    //CEP
      }
    },
    "payments": [   //Forma de pagamento⁎⁎
      {
        "name": "VISA", //Nome da forma de pagamento
        "code": "VIS",  //Codigo da forma de pagamento⁎⁎⁎
        "value": 28,    //Valor pago na forma
        "prepaid": true,    //Pedido pago ("true" ou "false")
        "issuer": "VISA"    //Bandeira
      },
      {
        "name": "Voucher",  //Nome da forma de pagamento
        "code": "VOUCHER",  //Codigo da forma de pagamento⁎⁎⁎
        "value": 8, //Valor pago na forma
        "prepaid": true,    //Pediod pago ("true" ou "false")
        "collector": "IFood",   //Recebedor da forma
        "issuer": "Voucher" //Bandeira
      }
    ],
    "customer": {   //Dados do cliente
      "id": "1751813",    //Id do cliente
      "name": "Teste ifood",  //Nome do cliente
      "taxPayerIdentificationNumber": "01234567890",  //CPF/CNPJ do cliente 
      "phone": "11 - 12345678",  //Telefone do cliente
      "email": "TESTECOMERCIAL@IFOOD.COM.BR"  //Email do cliente
    },
    "items": [  //Itens do pedido
      {
        "name": "X-salada", //Nome do item
        "quantity": 1,  //Quantidade
        "price": 8, //Preço
        "subItemsPrice": 3, //Preço dos subitens
        "totalPrice": 11,   //Preço total
        "discount": 0,  //Desconto
        "addition": 0,  //Adição
        "externalCode": "8",    //Código do e-PDV
        "subItems": [
          {
            "name": "Bacon",    //Nome do item
            "quantity": 1,  //Quantidade
            "price": 3, //Preço
            "totalPrice": 3,    //Preço total
            "discount": 0,  //Desconto
            "addition": 0,  //Adição
            "externalCode": "13"    //Código do e-PDV
          }
        ]
      },
      {
        "name": "Refrigerante lata",    //Nome do item
        "quantity": 1,  //Quantidade
        "price": 0, //Preço
        "subItemsPrice": 5, //Preço dos subitens
        "totalPrice": 5,    //Preço total
        "discount": 0,  //Desconto
        "addition": 0,  //Adição
        "subItems": [
          {
            "name": "Coca Cola",    //Nome do item
            "quantity": 1,  //Quantidade
            "price": 5, //Preço
            "totalPrice": 5,    //Preço total
            "discount": 0,  //Desconto
            "addition": 0,  //Adição
            "externalCode": "18"    //Código e-PDV
          }
        ]
      },
      {
        "name": "Pastel de carne",  //Nome do item
        "quantity": 1,  //Quantidade
        "price": 12,    //Preço
        "subItemsPrice": 0, //Preço dos subitens
        "totalPrice": 12,   //Preço total
        "discount": 0,  //Desconto
        "addition": 0,  //Adição
        "externalCode": "6",    //Código do e-PDV
        "observations": "BEM CAPRICHADO!"   //Observação do item
      }
    ],
    "subTotal": 28, //Total do pedido(Sem taxa de entrega)
    "totalPrice": 36,   //Total do pedido(Com taxa de entrega)
    "deliveryFee": 8,   //Taxa de entrega
    "deliveryAddress": {    //Endereço do cliente
      "formattedAddress": "R TESTE, 100", //Endereço completo de entrega
      "country": "BR",    //Pais
      "state": "AC",  //Estado
      "city": "BUJARI",   //Cidade
      "coordinates": {    //Coordenadas do endereço
        "latitude": -9.824359,
        "longitude": -67.950572
      },
      "neighborhood": "OUTROS",   //Bairro
      "streetName": "R TESTE",    //Endereço(Tipo logradouro + Logradouro)
      "streetNumber": "100",  //Numero
      "postalCode": "12345678",   //CEP
      "reference": "teste",   //Referencia
      "complement": "casa x"  //Complemento do endereço
    },
    "deliveryDateTime": "2018-01-18T20:35:06.177Z",  //Timestamp do pedido
    "preparationTimeInSeconds": 2099 // Tempo de preparo do pedido em segundos, o tempo é padrão de 35 minutos
  };

  exemplo2 = {
    "id": "ff8080816325fbbe01632770edda09fe",
    "reference": "1618620938441010",
    "shortReference": "8957",
    "createdAt": "2018-05-03T19:18:21.517Z",
    "type": "DELIVERY",
    "merchant": {
      "id": "137086",
      "name": "MODELO AREA 3",
      "address": {
        "formattedAddress": "R Teste",
        "country": "BR",
        "state": "AC",
        "city": "BUJARI",
        "neighborhood": "OUTROS",
        "streetName": "R Teste",
        "streetNumber": "100",
        "postalCode": "12345678"
      }
    },
    "payments": [
      {
        "name": "DINHEIRO",
        "code": "DIN",
        "value": 29.5,
        "prepaid": false,
        "changeFor": 100
      }
    ],
    "customer": {
      "id": "1751813",
      "name": "Teste - ifood",
      "taxPayerIdentificationNumber": "12345678901",
      "phone": "11 - 12345678",
      "email": "TESTECOMERCIAL@IFOOD.COM.BR",
      "ordersCountOnRestaurant": 10
    },
    "items": [
      {
        "name": "Pastel de queijo",
        "quantity": 1,
        "price": 5,
        "subItemsPrice": 0,
        "totalPrice": 5,
        "discount": 0,
        "addition": 0,
        "externalCode": "1"
      },
      {
        "name": "Pastel de palmito",
        "quantity": 1,
        "price": 5,
        "subItemsPrice": 0,
        "totalPrice": 5,
        "discount": 0,
        "addition": 0,
        "externalCode": "2"
      },
      {
        "name": "X-burguer bacon",
        "quantity": 1,
        "price": 8,
        "subItemsPrice": 1.5,
        "totalPrice": 9.5,
        "discount": 0,
        "addition": 0,
        "externalCode": "7",
        "subItems": [
          {
            "name": "Alface",
            "quantity": 1,
            "price": 1.5,
            "totalPrice": 1.5,
            "discount": 0,
            "addition": 0,
            "externalCode": "13"
          }
        ]
      }
    ],
    "subTotal": 19.5,
    "totalPrice": 29.5,
    "deliveryFee": 10,
    "deliveryAddress": {
      "formattedAddress": "R TESTE, 100",
      "country": "BR",
      "state": "AC",
      "city": "BUJARI",
      "coordinates": {
        "latitude": -9.824966,
        "longitude": -67.949965
      },
      "neighborhood": "OUTROS",
      "streetName": "R TESTE",
      "streetNumber": "100",
      "postalCode": "12345678",
      "reference": "teste"
    },
    "deliveryDateTime": "2018-05-03T19:38:21.517Z",
    "preparationTimeInSeconds": 2099
  };

  exemplo3 = {
    "id": "ff8080816325fd8d016327739b6e6c02",
    "reference": "1118021938198010",
    "shortReference": "9246",
    "createdAt": "2018-05-03T19:21:17.478Z",
    "type": "DELIVERY",
    "merchant": {
      "id": "137086",
      "name": "MODELO AREA 3",
      "address": {
        "formattedAddress": "R Teste",
        "country": "BR",
        "state": "AC",
        "city": "BUJARI",
        "neighborhood": "OUTROS",
        "streetName": "R Teste",
        "streetNumber": "100",
        "postalCode": "12345678"
      }
    },
    "payments": [
      {
        "name": "VISA",
        "code": "VIS",
        "value": 65.98,
        "prepaid": true,
        "issuer": "VISA"
      }
    ],
    "customer": {
      "id": "1751813",
      "name": "Teste - ifood",
      "phone": "11 - 12345678",
      "email": "TESTECOMERCIAL@IFOOD.COM.BR",
      "ordersCountOnRestaurant": 10
    },
    "items": [
      {
        "name": "GRANDE 3 SABORES",
        "quantity": 1,
        "price": 0,
        "subItemsPrice": 55.98,
        "totalPrice": 55.98,
        "discount": 0,
        "addition": 0,
        "externalCode": "25",
        "subItems": [
          {
            "name": "MASSA TRADICIONAL",
            "quantity": 1,
            "price": 6,
            "totalPrice": 6,
            "discount": 0,
            "addition": 0,
            "externalCode": "1000"
          },
          {
            "name": "1/3 3 QUEIJOS",
            "quantity": 1,
            "price": 16.66,
            "totalPrice": 16.66,
            "discount": 0,
            "addition": 0,
            "externalCode": "30"
          },
          {
            "name": "1/3 MUSSARELA",
            "quantity": 1,
            "price": 10,
            "totalPrice": 16.66,
            "discount": 0,
            "addition": 6.66,
            "externalCode": "32"
          },
          {
            "name": "1/3 PALMITO",
            "quantity": 1,
            "price": 14,
            "totalPrice": 16.66,
            "discount": 0,
            "addition": 2.66,
            "externalCode": "33"
          }
        ]
      }
    ],
    "subTotal": 55.98,
    "totalPrice": 65.98,
    "deliveryFee": 10,
    "deliveryAddress": {
      "formattedAddress": "R TESTE, 100",
      "country": "BR",
      "state": "AC",
      "city": "BUJARI",
      "coordinates": {
        "latitude": -9.824966,
        "longitude": -67.949965
      },
      "neighborhood": "OUTROS",
      "streetName": "R TESTE",
      "streetNumber": "100",
      "postalCode": "12345678",
      "reference": "teste"
    },
    "deliveryDateTime": "2018-05-03T19:41:17.478Z",
    "preparationTimeInSeconds": 2099
  };

  exemplo4 = {
    "id": "ff8080816325fbbe0163277558bc0ad7",
    "reference": "2718221938434020",
    "shortReference": "9418",
    "createdAt": "2018-05-03T19:23:11.597Z",
    "type": "DELIVERY",
    "merchant": {
      "id": "137086",
      "name": "MODELO AREA 3",
      "address": {
        "formattedAddress": "R Teste",
        "country": "BR",
        "state": "AC",
        "city": "BUJARI",
        "neighborhood": "OUTROS",
        "streetName": "R Teste",
        "streetNumber": "100",
        "postalCode": "12345678"
      }
    },
    "payments": [
      {
        "name": "VISA",
        "code": "VIS",
        "value": 56,
        "prepaid": true,
        "issuer": "VISA"
      },
      {
        "name": "Voucher",
        "code": "VOUCHER",
        "value": 10,
        "prepaid": true,
        "collector": "IFood",
        "issuer": "Voucher"
      }
    ],
    "customer": {
      "id": "1751813",
      "name": "Teste - ifood",
      "phone": "11 - 12345678",
      "email": "TESTECOMERCIAL@IFOOD.COM.BR",
      "ordersCountOnRestaurant": 10
    },
    "items": [
      {
        "name": "GRANDE",
        "quantity": 1,
        "price": 0,
        "subItemsPrice": 56,
        "totalPrice": 56,
        "discount": 0,
        "addition": 0,
        "externalCode": "25",
        "subItems": [
          {
            "name": "BORDA DE CATURPIRY",
            "quantity": 1,
            "price": 6,
            "totalPrice": 6,
            "discount": 0,
            "addition": 0,
            "externalCode": "2000"
          },
          {
            "name": "3 QUEIJOS",
            "quantity": 1,
            "price": 50,
            "totalPrice": 50,
            "discount": 0,
            "addition": 0,
            "externalCode": "30"
          }
        ]
      }
    ],
    "subTotal": 56,
    "totalPrice": 66,
    "deliveryFee": 10,
    "deliveryAddress": {
      "formattedAddress": "R TESTE, 100",
      "country": "BR",
      "state": "AC",
      "city": "BUJARI",
      "coordinates": {
        "latitude": -9.824966,
        "longitude": -67.949965
      },
      "neighborhood": "OUTROS",
      "streetName": "R TESTE",
      "streetNumber": "100",
      "postalCode": "12345678",
      "reference": "teste"
    },
    "deliveryDateTime": "2018-05-03T19:43:11.597Z",
    "preparationTimeInSeconds": 2099
  };

  exemplo5 = {
    "id": "ff8080816325fbbe016327768b3e0b16",
    "reference": "5918421938111050",
    "shortReference": "9547",
    "createdAt": "2018-05-03T19:24:29.919Z",
    "type": "DELIVERY",
    "merchant": {
      "id": "137086",
      "name": "MODELO AREA 3",
      "address": {
        "formattedAddress": "R Teste",
        "country": "BR",
        "state": "AC",
        "city": "BUJARI",
        "neighborhood": "OUTROS",
        "streetName": "R Teste",
        "streetNumber": "100",
        "postalCode": "12345678"
      }
    },
    "payments": [
      {
        "name": "CRÉDITO - DINERS (MÁQUINA)",
        "code": "DNREST",
        "value": 50,
        "prepaid": false,
      }
    ],
    "customer": {
      "id": "1751813",
      "name": "Teste - ifood",
      "phone": "11 - 12345678",
      "email": "TESTECOMERCIAL@IFOOD.COM.BR",
      "ordersCountOnRestaurant": 10
    },
    "items": [
      {
        "name": "Refrigerante 2 litros",
        "quantity": 1,
        "price": 10,
        "subItemsPrice": 0,
        "totalPrice": 10,
        "discount": 0,
        "addition": 0,
        "externalCode": "17",
        "subItems": [
          {
            "name": "Coca Cola",
            "quantity": 1,
            "price": 0,
            "totalPrice": 0,
            "discount": 0,
            "addition": 0,
            "externalCode": "20"
          }
        ]
      },
      {
        "name": "Marmitex do dia",
        "quantity": 1,
        "price": 15,
        "subItemsPrice": 0,
        "totalPrice": 15,
        "discount": 0,
        "addition": 0,
        "externalCode": "21",
        "subItems": [
          {
            "name": "Bife grelhado",
            "quantity": 1,
            "price": 0,
            "totalPrice": 0,
            "discount": 0,
            "addition": 0,
            "externalCode": "23"
          },
          {
            "name": "Sim, por favor",
            "quantity": 1,
            "price": 0,
            "totalPrice": 0,
            "discount": 0,
            "addition": 0
          }
        ]
      },
      {
        "name": "Pastel de carne",
        "quantity": 3,
        "price": 5,
        "subItemsPrice": 0,
        "totalPrice": 5,
        "discount": 0,
        "addition": 0,
        "externalCode": "6"
      }
    ],
    "subTotal": 40,
    "totalPrice": 50,
    "deliveryFee": 10,
    "deliveryAddress": {
      "formattedAddress": "R TESTE, 100",
      "country": "BR",
      "state": "AC",
      "city": "BUJARI",
      "coordinates": {
        "latitude": -9.824966,
        "longitude": -67.949965
      },
      "neighborhood": "OUTROS",
      "streetName": "R TESTE",
      "streetNumber": "100",
      "postalCode": "12345678",
      "reference": "teste"
    },
    "deliveryDateTime": "2018-05-03T19:44:29.919Z",
    "preparationTimeInSeconds": 2099
  };

  iFoodListOrders = [];

  app.get('/polling', function (req, resp) {
    
    let pollingList = [];

    this.iFoodListOrders = [this.exemplo0, this.exemplo1, this.exemplo2, this.exemplo3, this.exemplo4, this.exemplo5];

    this.iFoodListOrders.forEach(item => {

      pollingList.push({
        "code": "PLACED",
        "correlationId": item.id,
        "createdAt": item.createdAt,
        "id": item.reference
      });

    });

    resp.send(pollingList);
  });

  app.get('/orderWithDetail', function (req, resp) {
    
    this.iFoodListOrders = [this.exemplo0, this.exemplo1, this.exemplo2, this.exemplo3, this.exemplo4, this.exemplo5];

    resp.send(this.iFoodListOrders);
  });

  // order
  app.get('/order/:id', function (req, resp) {

    const id = req.params.id;
    
    this.iFoodListOrders = [this.exemplo0, this.exemplo1, this.exemplo2, this.exemplo3, this.exemplo4, this.exemplo5];

    resp.send(this.iFoodListOrders.find(item => item.id === id));
  });

  // order/integration
  app.get('/orderIntegration/:id', function (req, resp) {
    resp.send(req.params.id);
  });

 
   // order/confirmation
  app.get('/orderConfirmation/:id', function (req, res) {
    resp.send(req.params.id);
  })

   // order/integration
  app.get('/orderDisplach/:id', function (req, res) {
    resp.send(req.params.id);
  })

  // order/rejection
  app.get('/orderRejection/:id', function (req, res) {
    resp.send(req.params.id);
  })
  
  // order/canceletion
  app.get('/orderCancelation/:id', function (req, res) {
    resp.send(req.params.id);
  })


};