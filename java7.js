let resposta6 = document.getElementById('resposta6')

function calcular6(){
    let traj1km = 27;
    let traj1ga = 3.5;
    let traj2km = 39;
    let traj2ga = 6.3;

    let conta = (traj1km + traj2km) / (traj1ga + traj2ga);

    console.log("resposta6: ",conta);

    resposta6.innerHTML = conta.toFixed(3)+"km/gasolina"
    resposta6.style.fontSize ='30px'
}