/* 
1.1 JavaScript básica

// Tudo que vem após barras normais duplas é um comentário em linguagem natural

Var x;                                              // Declara uma variável

// JavaScript aceita vários tipos de valores
x = 1;                                              // Números.
x = 0.01;                                           // Apenas um tipo Number para inteiros e reais.
x = "hello world";                                  // Strings de texto entre aspas.
x = 'JavaScript';                                   // Apóstrofos também delimitam strings.
x = true;                                           // Valores booleanos.
x = false;                                          // O outro valor booleano.
x = null;                                           // Null é um valor especial que significa "nenhum valor".
x = undefined;                                      // undefined é como null.

O tipo de dados mais importante de  JavaScript é o objeto.
Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
*/

var book = {                                        // Objetos são colocados entre chaves.
    topic: "JavaScript",                            // A propriedade "topic" tem o valor "javaScript".
    fat: true                                       // A propriedade "fat" tem o valor true.
};                                                  // A chave marca o fim do objeto.

// Acesse as propriedades de um objeto com . ou []:
book.topic                                          // => "JavaScript"
book["fat"]                                         // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan";                           // Crie novas propriedades por meio de atribuição.
book.contents = {};                                 // {} é um objeto vazio sem qualquer propriedade.

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7];                          // Um array de 4 valores, delimitados com [ e ].