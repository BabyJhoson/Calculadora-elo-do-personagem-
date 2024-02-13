// Ás variavéis e a função da minha Calculadora
let vitoria = 45
let derrota = 10
function calculadora(a, b) {
 return a - b;
}
// variavel do resultado
let resultado = calculadora(vitoria,derrota)
// else if da colocação do elo do heroi com a messagem no final
if (resultado <= 10) {
    nivel = "Ferro";
} else if (resultado <= 20) {
    nivel = "Bronze";
} else if (resultado <= 30) {
    nivel = "Prata";
} else if (resultado <= 50) {
    nivel = "Ouro";
} else if (resultado <= 80) {
    nivel = "Diamante";
} else if (resultado <= 90) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}
console.log("O Herói tem saldo de " + resultado + " vitorias e está no nível " + nivel)
