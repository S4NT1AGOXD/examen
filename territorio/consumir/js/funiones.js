const url = 'http://localhost:2345/api/hurtos'
const listarDatos = async() => {
    let respuesta = ''
    let body = document.getElementById('contenido')
    //url: Es la url de la api.
    //Al deslpegarla en el servidor colocar la api del servidor
        fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(function(data) {
        let listaHurtos = data.huertos //Capturar el array devuelto por la api
        datos = 
        listaUsuarios.map(function(hurto) {//Recorrer el array
            respuesta += `<tr><td>${hurto.direccion}</td>`+
            `<td>${hurto.latitud}</td>`+
            `<td>${hurto.longitud}</td>`+
            `<td>${hurto.descripcion}</td>`+
            `<td>${hurto.fecha}</td>`+
            `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(usuario)})' >Editar</a> 
            <a class="waves-effect waves-light btn modal-danger deep-orange darken-4" href='#' onclick='eliminar("${usuario._id}")'>Eliminar</a></td>`+
            `</tr>`
            body.innerHTML = respuesta
        })
    })

}

const registrars = async()=>{
    let _direcion = document.getElementById('direcion').value
    let _latitud = document.getElementById('latitud').value
    let _longitud = document.getElementById('longitud').value
    let _descripcion = document.getElementById('descripcion').value
    let _fecha = document.getElementById('fecha').value
     if((_pass.length>0 && _confirmPass.length>0) && (_pass == _confirmPass)){
        let usuario = {
            nombre:_nombre,
            password:_pass,
            rol:_rol,
            estado:_estado
        }

        fetch(url,  {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(usuario),//Convertir el objeto _usuario  a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(json => {
            //alert(json.msg)//Mensaje que retorna la API
            console.log(json)
            if(json.msg){
                Swal.fire(
                    json.msg,
                    '',
                    'success'
                )
            }
        })
    }
    else{
        //alert('El password y la confirmación del password no coinciden. Favor corregir.')
        Swal.fire(
            'El password y la confirmación del password no coinciden. Favor corregir.',
            '',
            'error'
          )
    }
}
