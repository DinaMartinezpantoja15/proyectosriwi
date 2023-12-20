
function operaciones(){
    let operaciones = document.getElementById('operacion').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.getElementById('operacion').value="Seleccionar ";

/*     if(num1!= "" &&  num2!="" && operacion !=""){
        alert(" estas seguro de continuar")
        
    }else{
        alert("por favor llena los campos vacios")
        
        document.getElementById('num1').classList.add('invalid');
        document.getElementById('num2').classList.add('invalid');
        document.getElementById('operacion').classList.add('invalid');
        
    } */
    //
    if (num1 ==""){
        document.getElementById('num1').focus();
        document.getElementById("num1").classList.add('is-invalid')

    }
    else if(num2== ""){
        document.getElementById('num2').focus();
        document.getElementById("num2").classList.add('is-invalid')

    }
    else if (operaciones==""){
        document.getElementById('operacion').focus();
        document.getElementById("operacion").classList.add('is-invalid')
    }


    // operaciones
    if(operaciones == 'suma'){
        resultado= ( parseInt(num1) + parseInt(num2))
    } else if (operaciones == 'resta') {
        resultado= ( parseInt(num1) - parseInt(num2));
    }
    else if (operaciones == 'multi') {
        resultado= ( parseInt(num1) * parseInt(num2));
    }
    else if (operaciones == 'expo') {
        resultado= ( parseInt(num1) ** parseInt(num2));
    }
    else {
        resultado= ( parseFloat(num1) / parseFloat(num2));
    }
    document.getElementById("resultado").innerText = "Tu resultado es :" + resultado
    document.getElementById('num1').value=" ";
    document.getElementById('num2').value=" ";



    var error=document.getElementById('error').value

    num1.onblur= function(){
        if (!num1.value.isInteger()){
        num1.classlist.add('invalid')
        error.innerHTML = "por favor ingrese un valor valido"
    
        }
    }

    num1.onfocus=function(){
        if(this.classlist.contains('invalid')){
            this.classlist.remove('invalid');
            error.innerHTML ="El dato ingresado es valido";
    
        }
    }

}


