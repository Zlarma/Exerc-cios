let resposta8 = document.getElementById('resposta8')

function calcular8() {
    let peso1 = 589;
    let peso2 = 1973;
    let peso3 = 1.47 * 1000;
    let peso4 = 2.42 * 1000;
    let peso5 = 744;
    
    let media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

    console.log("A média é: ",media)

    resposta8.innerHTML = 'A média é ' + media
    resposta8.style.fontSize ='30px'
}