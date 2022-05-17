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
primes[0]                                           // => 2: o primeiro elemento (índice 0) do array.
primes.length                                       // => 4: quantidade de elementos no array.
primes[primes.length - 1]                           // => 7: o último elemento do array.
primes[4] = 9;                                      // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;                                     // Ou altera um novo elemento existente por meio de atribuição.
var empty = [];                                     // [] é um array vazio, sem qualquer elemento
empty.length                                        // => 0

// Os arrays e objetos podem conter outros arrays e objetos:
var points = [                                      // Um array com 2 elementos.
    { x: 0, y: 0 },                                 // Cada elemento é um objeto.
    { x: 1, y: 1 }
];
var data = {                                        // Um objeto com 2 propriedades
    trial1: [[1, 2], [3, 4]],                       // O valor de cada propriedade é um array.
    trial2: [[2, 3], [4, 5]],                       // O elemento dos arrays são arrays.
};

// Os operadores atuam sobre os valores (operando) para produzir um novo valor.
// Os operadores aritiméticos são os mais comuns:
3 + 2                                               // => 5: adição
3 - 2                                               // => 1: subtração
3 * 2                                               // => 6: multiplicação
3 / 2                                               // => 1.5: divisão
points[1].x - points[0].x                           // => 1: operandos mais complicados também funcionam
"3" + "2"                                           // => "32": + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0;                                      // Define uma variável
count++;                                            // Incrementa a variável
count--;                                            // Decrementa a variável
count += 2;                                         // Soma 2: o mesmo que count = count + 2
count *= 3;                                         // Multiplica por 3: o mesmo que count = count * 3;
count                                               // => 6: nome de variáveis também são expressões

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiro ou falsos.
var x = 2, y = 3;                                   // Esses sinais = são atribuições e não testes de igualdade.
x == y                                              // => Falso: igualdade
x != y                                              // => Verdadeiro: desigualdade
x < y                                               // => Verdadeiro: menor que 
x <= y                                              // => Verdadeiro: menor ou igual a
x > y                                               // => Falso: maior que
x >= y                                              // => Falso: maior ou igual a
"two" == "three"                                    // => falso: as duas strings são diferentes
"two" >= "three"                                    // => Verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y)                                    // => Verdadeiro: falso é igual a falso

    // Os operadores lógicos combinam ou invertem valores booleanos
    (x == 2) && (y == 3)                            // => Verdadeiro: as duas comparações são verdadeiras. && é E
        (x > 3) || (y < 3)                          // => Falso: nenhuma das comparações é verdadeira. || é OU
!(x == y)                                           // => Verdadeiro: ! inverte um valor booleano

// As funções são blocos de códigos JavaScript parametrizados que podemos chamar.
function plus1(x) {                                 // Define uma função chamada "plus1", com o parâmetro "x"
    return x + 1                                    // Retorna um valor uma unidade maior do que o que foi passado
}                                                   // As funções são incluídas entre chaves

plus1(y)                                            // => 4: y = 3; portanto, essa chamada retorna 3 + 1  

var square = function (x) {                         // As funçoes são valores e podem ser atribuídas a variáveis
    return x * x;                                   // Calcula valor e função
};                                                  // Um ponto e vírgula marca o fim da atribuição

square(plus(y))                                     // => 16: chama duas funções em uma única expressão

// Quando combinamos funções com expressões, obtemos métodos:
// Quando  funções recebem as propriedades de um objeto, as chamamos de métodos.
// Todos os objetos de JavaScript tem métodos:
var a = [];                                         // Cria uma array vazio
a.push(1, 2, 3 );                                   // O método push() adiciona elementos em um array
a.reverse();                                        // Outro método: inverte a ordem dos elementos

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao
