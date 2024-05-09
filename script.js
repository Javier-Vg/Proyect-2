let cont_nom = document.getElementById("cont-nom");
let cont_correo = document.getElementById("cont-correo");
let cont_direccion = document.getElementById("cont-direccion");
//let nombre = document.getElementById("nombre");
//let nombre = document.getElementById("nombre");
//let nombre = document.getElementById("nombre");
//let nombre = document.getElementById("nombre");
let nombre = document.getElementById("nombre");
let Correo = document.getElementById("register1");
let Contraseña = document.getElementById("register2");
let Direccion = document.getElementById("register3");

let registros = [];
//Esto es del locage storage
function RegistrarUsuario(){

    persona ={
        Nombre: nombre.value,
        Correo: Correo.value,
        Contraseña : Contraseña.value,
        Direccion : Direccion.value
    };

    registros = JSON.parse(localStorage.getItem("registros"));

    if (registros) {

        //El for verifica si ya existe un correo con ese nombre:
        for (let elemento in registros) {
            if (Correo.value == registros[elemento].Correo) {
                return(alert("El correo ya existe!, acceda a su cuenta desde el login."));
            }
        }

        //Si el correo no se repite, agrega el perfil.
        registros = JSON.parse(localStorage.getItem("registros")) || [];
        registros.push(persona);
        localStorage.setItem("registros", JSON.stringify(registros));
        alert("El correo se agrego exitosamente");

    }else{
        registros = JSON.parse(localStorage.getItem("registros")) || [];
        registros.push(persona);
        localStorage.setItem("registros", JSON.stringify(registros)); 
        alert("¡Fuiste el primero en registrarte!");
    }   
}



//Imprime el valor de la llave, en este caso el del valor de "Correo".
//let llave = JSON.parse(localStorage.getItem('llave7'));
//console.log(llave.Correo);



function Login() {
    //El correo es la llave
    let sesionIniciada = JSON.parse(localStorage.getItem("sesionAbierta"));
    let CorreoVerific = document.getElementById("login1").value;
    let ContraVerific = document.getElementById("login2").value;

    let TotalRegistros = JSON.parse(localStorage.getItem("registros"));
    if (TotalRegistros) {
        if (sesionIniciada) {
            alert("Debe de cerrar sesion para ingresar a un nuevo perfil !");
        } else {
            let datos = 3;
            for (let elemento in TotalRegistros) {
                if (CorreoVerific == TotalRegistros[elemento].Correo) {

                    datos = 1;

                    if (ContraVerific == TotalRegistros[elemento].Contraseña) {
                        
                        datos = 2;
                        //Se encuentra el correo y crea una nueva llave en el localeStrg.
                        alert("Redirigiendo a su cuenta...");
                        cont_correo.innerHTML = TotalRegistros[elemento].Correo;
                        cont_nom.innerHTML =TotalRegistros[elemento].Nombre;
                        cont_direccion.innerHTML =TotalRegistros[elemento].Direccion;
                        localStorage.setItem("sesionAbierta", JSON.stringify(TotalRegistros[elemento])); 
                    }
                }
            }
            //Verifica si el correo o la contraseña existian en el localStorage.
            console.log(datos)
            if (datos == 1) {
                alert("Contraseña inválida para el correo proporcionado.");
            }else if ( datos == 2){
                dato = 2;
            }else if(datos == 3){
                alert("No existe ese correo. Registrese...");
            }
        }
    }else{ 
        alert("No existen correos registrados.");
    }   
    
}




function desLogearse() {
    let usuario = localStorage.getItem("sesionAbierta");
    if (usuario) {
        alert("Cerrando sesion...");
        localStorage.removeItem("sesionAbierta");
        cont_correo.innerHTML = "";
        cont_nom.innerHTML = "";
        cont_direccion.innerHTML = "";
        
    }else{
       alert("Aun no haz entrado a una cuenta.")
    }
    
}

let titulo = document.getElementById("porta1");
let descripcion = document.getElementById("porta2");
let año = document.getElementById("porta3");

let usuario = (localStorage.getItem("sesionAbierta"));

let proyectList = [];
proyectList = JSON.parse(localStorage.getItem("Proyectos"));

//Corregir esto------------------------------------------------------------------------
function portafolios() {
    
    let informacion ={
        titulo: titulo.value,
        descripcion: descripcion.value,
        año : año.value,
        usuario :usuario.Correo
    };

    proyectList = JSON.parse(localStorage.getItem("Proyectos")) || [];
    proyectList.push(informacion);
    localStorage.setItem("Proyectos", JSON.stringify(proyectList)); 


}



//Loguearse modal
let abrirModal = document.getElementById("openM1");
let cerrarModal = document.getElementById("closeM1");
let Modal1 = document.querySelector(".modal1");


abrirModal.addEventListener("click", ()=>{
    Modal1.showModal();

    })

cerrarModal.addEventListener("click", ()=>{
    Modal1.close();
    
})


//Regitrarse modal
let abrirModal2 = document.getElementById("openM2");
let cerrarModal2 = document.getElementById("closeM2");
let Modal2 = document.querySelector(".modal2");


abrirModal2.addEventListener("click", ()=>{
    Modal2.showModal();

})

cerrarModal2.addEventListener("click", ()=>{
    Modal2.close();
    
})

// portafolio modal
let abrirModal3 = document.getElementById("openM3");
let cerrarModal3 = document.getElementById("closeM3");
let Modal3 = document.querySelector(".modal3");


abrirModal3.addEventListener("click", ()=>{
    Modal3.showModal();

    })

cerrarModal3.addEventListener("click", ()=>{
    Modal3.close();
    
})





