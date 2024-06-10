let resposta9 = document.getElementById('resposta9')

function calcular9(){
let camisaP = Number(document.getElementById('camisaP').value)
let camisaM = Number(document.getElementById('camisaM').value)
let camisaG = Number(document.getElementById('camisaG').value)

const precoP = 17;
const precoM = 19;
const precoG = 22;

let totalP = camisaP * precoP
let totalM = camisaM * precoM
let totalG = camisaG * precoG

console.log('O valor total da camisa pequena é ',totalP)
console.log('O valor total da camisa média é ',totalM)
console.log('O valor total da camisa grande é ',totalG)

let total = totalP + totalM + totalG

resposta9.innerHTML = 'O total é ' + total.toFixed(2)
}