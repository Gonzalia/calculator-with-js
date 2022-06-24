function sumar(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"]
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
}

function restar(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"]
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
}

function multiplicar(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"]
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);

    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
}

function dividir(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"]
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    let modulo = parseInt(operandoA.value) % parseInt(operandoB.value);

    document.getElementById("resultado").innerHTML = `El resultado con algoritmo de la division es: ${operandoA.value} = ${operandoB.value} * ${Math.trunc(resultado)} + ${modulo}`;
}