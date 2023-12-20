
var allPersons = [];
function guardarUsuario(){
    
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }
    console.log(persona)
    allPersons = [];
    allPersons.push(persona);
    allPersons.forEach(function(person) {
        document.getElementById("registro").innerHTML +=`<tr>
        <td>${person.nombres}  </td>
        <td>${person.apellidos}  </td>
        <td>${person.correo}  </td>
        <td><a href="" class="btn btn-danger btn-sm">Eliminar</a></td>
        </tr>`
        
    });
            
}
function limpiar (){
    document.getElementById("nombres").value="";
    document.getElementById("apellidos").value="";
    document.getElementById("correo").value="";
    }

    correo.onblur = function() {
        if (!correo.value.includes('@')) {
            correo.classList.add('is-invalid');
            error.innerHTML = 'Por favor introduzca un correo válido.'
        }
        };
        


correo.onblur = function() {
    if (!correo.value.includes('@')) { 
        error.innerHTML = 'Por favor introduzca un correo válido.'
        document.getElementById('correo').focus();
        document.getElementById("correo").classList.add('is-invalid')
    
    }
    else{
        this.classList.remove('is-invalid');
        error.innerHTML = "";
    }
    };




nombres.onblur = function(){
    console.log("nombres",nombres)
    if (nombres.value =="") { 
        errornom.innerHTML = 'Por favor introduzca su nombre.'
        document.getElementById('nombres').focus();
        document.getElementById("nombres").classList.add('is-invalid')
    }
    else{
        this.classList.remove('is-invalid');
        errornom.innerHTML = ''
    }
    
    };

apellidos.onblur=function(){
    if(apellidos.value==""){
        errorapell.innerHTML="por favor introduzca su apellido"
        document.getElementById('apellidos').focus();
        document.getElementById("apellidos").classList.add('is-invalid')
    }
    else{
        this.classList.remove('is-invalid');
        errornom.innerHTML = ''
    }

    }

    


