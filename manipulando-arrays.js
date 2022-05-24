/* LISTA DE PLANETA DO SISTEMA SOLAR NA ORDEM
Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno
*/

const planetas = ['Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano']

/* 
    Array com os planetas sem o primeiro e o último planeta na ordem.
    (no intuito de adicionar com unshift e push)
    sem o primeiro "Mercúrio" e sem o ultimo "Netuno" 
*/

console.log(planetas)

// adicionando o primeiro "Mercúrio"
planetas.unshift('Mercúrio')
console.log(planetas)


// adicionando o último "Netuno"
planetas.push('Netuno')
console.log(planetas)


/* acrescentando "Netuno" duas vezes 
para remover o ultimo planeta com .pop()*/

planetas.push('Netuno') // adicionando ao final novamente
planetas.pop() // removendo o último elemento
console.log(planetas)


/* acrescentando "Mercúrio" duas vezes
 para remover com .shift()
 console.log(planetas)
*/

planetas.unshift("Mercúrio") // adicionando no início novamente
planetas.shift() // removendo o primeiro elemento
console.log(planetas)


/* agora irei deixar apenas meus favoritos(netuno e urano) usando 
.slice()    */

console.log(planetas.slice(6))


/* todos os elementos apareceram no console */