function botons(){
    document.getElementById("opcion").classList.add("display-none")
    document.getElementById("card1").classList.remove("display-none")
    document.getElementById("prin1").classList.add("display-none")


}
function botonn(){
    alert("Recuerdas que si no compras ahora  te tocara comprar algo en Medellín")
    document.getElementById("opcion").classList.add("display-none")
    document.getElementById("par2").classList.remove("display-none")
    document.getElementById("prin1").classList.add("display-none")
}


function volverI(){
    document.getElementById("prin1").classList.remove("display-none")
    document.getElementById("opcion").classList.remove("display-none")
    document.getElementById("card1").classList.add("display-none")
}
function continuarE(){
    document.getElementById("fact").classList.add("display-none")
    document.getElementById("par2").classList.remove("display-none")
    document.getElementById("prin1").classList.add("display-none")
    
}


var salario = 2500000;
var combo1 = 23000
var combo2 =15000 

function selec(){
        document.getElementById("card1").classList.add("display-none")
        document.getElementById("card1").classList.remove("menu")
        document.getElementById("fact").classList.remove("display-none")

        saldo = salario - combo1; 
        alert("Te caerá mal porque lleva mucho en el stand :(")  
        console.log(saldo)
        document.getElementById("saldo").innerText=`${saldo} `

    }
function selec2(){

        document.getElementById("card1").classList.add("display-none")
        document.getElementById("card1").classList.remove("menu")
        document.getElementById("fact").classList.remove("display-none")
        saldo = salario - combo2;
        alert("muy bien estarás llenito y bien  :)") 
        console.log(saldo)
        document.getElementById("saldo").innerText=`${saldo} `
        document.getElementById("concepto").innerText=`un subway con gaseosa`
        document.getElementById("valor").innerText=`23.000`
    }

    function volverc(){  
        document.getElementById("card1").classList.remove('display-none')
        document.getElementById("fact").classList.add("display-none")
    }

function ajustar(){
    document.getElementById("preg").classList.add("display-none")
    document.getElementById("equip").classList.remove("display-none")
}