function ajustar(){
    document.getElementById("preg").classList.add("display-none")
    document.getElementById("part6").classList.add("display-none")
    document.getElementById("equip").classList.remove("display-none")
    document.getElementById("prin").classList.add("display-none")
}
function iniciarv() {
    document.getElementById("portada").classList.add("display-none")
    document.getElementById("prin1").classList.remove("display-none")
    document.getElementById("opcion").classList.remove("display-none")



}



let altoPermitido = 55
let largoPermitido = 40
let anchoPermitido = 20

let altoOriginal = 60
let largoOriginal = 40
let anchoOriginal = 20

let factorReduccionAlto = altoPermitido / altoOriginal
let factorReduccionLargo = largoPermitido / largoOriginal
let factorReduccionAncho = anchoPermitido / anchoOriginal

console.log(factorReduccionAlto,factorReduccionLargo,factorReduccionAncho)

console.log(Math.min(factorReduccionAlto,factorReduccionLargo,factorReduccionAncho))

let nuevoAlto = altoOriginal * factorReduccionAlto
let nuevoLargo = largoOriginal * factorReduccionLargo
let nuevoAncho = anchoOriginal * factorReduccionAncho

console.log(nuevoAlto,nuevoLargo,nuevoAncho)

function calcular() {
    let cantiCamiseta = document.getElementById("cantiCamiseta").value
    let totalCamisetas = (cantiCamiseta * 250)
    document.getElementById("totalCamisetas").innerText = totalCamisetas
    if (cantiCamiseta >= 12) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }
    
    let cantiPantalones = document.getElementById("cantiPantalones").value
    let totalPantalones = (cantiPantalones * 600)
    document.getElementById("totalPantalones").innerText = totalPantalones
    if (cantiPantalones >= 8) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }
    let cantiRopaInte = document.getElementById("cantiRopaInte").value
    let totalRopaInte = (cantiRopaInte * 80)
    document.getElementById("totalRopaInte").innerText = totalRopaInte
    if (cantiRopaInte >= 11) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }

    let cantiSandali = document.getElementById("cantiSandali").value
    let totalSandali = (cantiSandali * 600)
    document.getElementById("totalSandali").innerText = totalSandali
    if (cantiSandali >= 2) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }

    let cantiShorts = document.getElementById("cantiShorts").value
    let totalShorts = (cantiShorts * 350)
    document.getElementById("totalShorts").innerText = totalShorts
    if (cantiShorts >= 6) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }

    let cantiPijama = document.getElementById("cantiPijama").value
    let totalPijama = (cantiPijama * 400)
    document.getElementById("totalPijama").innerText = totalPijama
    if (cantiPijama >= 2) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }

    let cantiAtletico = document.getElementById("cantiAtletico").value
    let totalAtletico = (cantiAtletico * 600)
    document.getElementById("totalAtletico").innerText = totalAtletico
    if (cantiAtletico >= 2) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }

    let cantiCamara = document.getElementById("cantiCamara").value
    let totalCamara = (cantiCamara * 850)
    document.getElementById("totalCamara").innerText = totalCamara
    if (cantiCamara >= 2) {
        alert("superaste el limite de la ropa, mira la cantidad")
    }
    
    let totalAReducir = (totalCamisetas + totalPantalones + totalRopaInte +
    totalPijama + totalShorts + totalPijama + totalAtletico + totalCamara)
    document.getElementById("totalAReducir").innerText = totalAReducir
    document.getElementById("actualMaleta").innerText = 12000 - totalAReducir
    if(totalAReducir >2000){
        alert("cuentas con el peso adecuado ya puedes continuar")
    }

}
function volver(){
    document.getElementById("preg").classList.remove("display-none")
    document.getElementById("equip").classList.add("display-none")
}
function continuar(){
    document.getElementById("equip").classList.add("display-none")
    document.getElementById("pag3").classList.remove("display-none")
    
}

function activarWifi() {

    function BinarioADecimal(num) {
            let acc = 0;
            var reverso=num.split("").reverse().join("")
            for (i = 0; i < num.length; i++) {
                acc=acc+reverso[i]*2**i

/*             acc = acc + (num.startsWith("1") ? num[i] * 2 ** i : num[i] * 2 ** i / 2); */
            }
            return acc;
        }
    
      let codigo1 = BinarioADecimal('01110010')
      let codigo2 = BinarioADecimal('01101001'); 
      let codigo3 = BinarioADecimal('01110111'); 
      let codigo4 = BinarioADecimal('01101001'); 

      document.getElementById("binario1").innerText = `Codigo decimal es: ${(codigo1)}`
      document.getElementById("binario2").innerText = `Codigo decimal es: ${(codigo2)}`
      document.getElementById("binario3").innerText = `Codigo decimal es: ${(codigo3)}`
      document.getElementById("binario4").innerText = `Codigo decimal es: ${(codigo4)}`
      document.getElementById("codigoComp").innerText = `Contraseña de WIFi es: ${String.fromCharCode(codigo1)}${String.fromCharCode(codigo2)}${String.fromCharCode(codigo3)}${String.fromCharCode(codigo4)}`
      sueldo = sueldo - 50000
      document.getElementById("saldo3Caso").innerText = `Su saldo actual es de ${sueldo}`

}

function continuarp4(){
    document.getElementById("pag3").classList.add("display-none")
    document.getElementById("pag4").classList.remove("display-none")
    
}


function hablar() {
    let cadena = document.getElementById("textoIngresado").value;

    let hablandoi = cadena.replace(/[aeou]/g,"i");
    document.getElementById("pedirTaxi").innerText = hablandoi;


    
    
}
function continuarp5(){
    document.getElementById("pag4").classList.add("display-none")
    document.getElementById("pag5").classList.remove("display-none")
    
}



function jugar() {

    function maquina(minimo, maximo) {
        let numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo)
        return numero
    }

    let piedra = (document.getElementById("piedra").checked)
    let papel = (document.getElementById("papel").checked)
    let tijera = (document.getElementById("tijera").checked)
    console.log("piedra", piedra)
    console.log("papel", papel)
    console.log("tijera", tijera)
    let opcionMaquina = maquina(0,2)
    console.log("Valor op maq", opcionMaquina)

    if (piedra == piedra) {
        console.log("piedra!!")
        if (opcionMaquina == piedra) {
            alert("Empate!")
            document.getElementById("saldo5Caso").innerText = `Empate sueldo actual es ${sueldo}`
        }
        else if (opcionMaquina == papel) {
            alert("Perdiste :( ", opcionMaquina, papel)
            sueldo = sueldo - 300000
            document.getElementById("saldo5Caso").innerText = `Perdiste su sueldo actual es ${sueldo}`
        }
        else if (opcionMaquina == tijera) {
            alert("Ganaste :) ")
            document.getElementById("saldo5Caso").innerText = `Ganaste sueldo actual es ${sueldo}`
        }
    }else if (papel == papel) {
        if (opcionMaquina == piedra) {
            alert("Ganaste :) ")
        }
        else if (opcionMaquina == papel) {
            alert("Empate!")
        }
        else if (opcionMaquina == tijera) {
            alert("Perdiste :( ")
        }
    }else if (tijera == tijera) {
        if (opcionMaquina == piedra) {
            alert("Perdiste :( ")
        }
        else if (opcionMaquina == tijera) {
            alert("Empate!")
        }
        else if (opcionMaquina == papel) {
            alert("Ganaste :) ")
        }
    }
}