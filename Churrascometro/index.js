var resultado = document.getElementById('Resultado');
var button = document.getElementById('btn1');

button.addEventListener("click", function(event){
    resultado.textContent = " "    

    var adultos = document.getElementById('Qtd#Adu').value;
    var criancas = document.getElementById('Qtd#Cri').value;
    var duracao = document.getElementById('Qtd#Dur').value;

    let valorCarne = calculaCarne(adultos, criancas, duracao);
    let valorCerveja = calculaCerveja(adultos, duracao);
    let valorBebidas = calculaBebidas(criancas, duracao);

    injetaResultado(valorCarne, valorCerveja, valorBebidas);
})

function calculaCarne(adu, cri, dur){
    let resultadoCarne
    if(dur <= 6){
        resultadoCarne = adu * 400;
        resultadoCarne += cri * 200;

        return resultadoCarne;
    } else {
        resultadoCarne = adu * 650;
        resultadoCarne += cri * 325;
        return resultadoCarne;
    }

}

function calculaCerveja(adu, dur){
    let resultadoCerveja
    if(dur <= 6){
        resultadoCerveja = adu * 1200;
        return resultadoCerveja;
    } else {
        resultadoCerveja = adu * 2000;
        return resultadoCerveja
    }
}

function calculaBebidas(cri, dur){
    let resultadoBebidas
    if(dur <= 6){
        resultadoBebidas = cri * 1000;
        return resultadoBebidas;
    } else {
        resultadoBebidas = cri * 1500;
        return resultadoBebidas;
    }
}

function injetaResultado(vlrCrn, vlrCrvj, vlrBbds){
    array = [vlrCrn, vlrCrvj, vlrBbds]
    array2 = ["carne", "cerveja", "bebidas"]
    for(i = 0; i <= 2; i ++){
        p = document.createElement('p');
        p.textContent = "Recomendado " + array[i] + " de " + array2[i] ;
        resultado.appendChild(p);
    }
}