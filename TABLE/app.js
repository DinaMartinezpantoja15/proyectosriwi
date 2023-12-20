
var persons = [
    {
        nombre: "Julian",
        apellidos: "Jimenex",
        correo : "julian@gmail.com"
    },
    {
        nombre: "Andres",
        apellidos: "Martinez",
        correo : "andres@gmail.com"
    },
    {
        nombre: "Carmen",
        apellidos: "Matias",
        correo : "carmen@gmail.com"
    }
];

function actualizar(index) {
    var fila = document.getElementById("fila" + index);
    var inputs = fila.getElementsByTagName("input");
    
    var nuevoNombre = inputs[0].value;
    var nuevoApellido = inputs[1].value;
    var nuevoCorreo = inputs[2].value;
    
    persons[index - 1].nombre = nuevoNombre;
    persons[index - 1].apellidos = nuevoApellido;
    persons[index - 1].correo = nuevoCorreo
    console.log(persons);
}

function eliminar(index) {
    persons.splice(index - 1, 1);
    document.getElementById("fila" + index).remove();
    console.log(persons);
}




const count = persons.push('agregarFila');
console.log('sa',persons)
const agregarFila = () => {
    document.getElementById('table').insertRow(-1).innerHTML = `
    <tr>
        <td>
            <input type="text" class="form-control form-control-sm" value="">
        </td>
        <td>
            <input type="text" class="form-control form-control-sm" value="">
        </td>
        <td>
            <input type="text" class="form-control form-control-sm" value="">
        </td>
        <td>
            <button class="btn btn-success btn-sm" onclick="actualizar()"> Actualizar </button>
            <button class="btn btn-danger btn-sm" onclick="eliminar(${persons.length+1})"> Eliminar </button>
        </td>
    </tr>`
}
//
console.log(count);

/*     <td>
    <button class="btn btn-success btn-sm" onclick="actualizar()"> Actualizar </button>
    <button class="btn btn-danger btn-sm" onclick="eliminar()"> Eliminar </button>
</td>
  } */



