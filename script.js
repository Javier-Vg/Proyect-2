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

//---------------------------------------------------------------------

function Login() {
   
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

                        //Extraccion de proyectos:
                        proyectList = JSON.parse(localStorage.getItem("Proyectos"));
                        for (const proyecto in proyectList) {

                            if (CorreoVerific == proyectList[proyecto].Correo) {

                                //Div donde van a ir los proyectos:
                                let contenedor = document.getElementById("P-1");
                                //Creacion de los contenedores
                                const cont1 = document.createElement("div");
                                cont1.classList.add("P-1");

                                //Guarda los elementos creados en el div creados aqui:
                                cont1.innerHTML = "Titulo:"+"<br>"+proyectList[proyecto].titulo +"<br><br>"+"Descripcion:" +"<br>"+ proyectList[proyecto].descripcion +"<br><br>"+"Año:"+"<br>"+ proyectList[proyecto].año;

                                contenedor.appendChild(cont1);
                            }
                        }
                        let ocultarBoton = document.getElementById("openM2");
                        ocultarBoton.style.display = "none";
                        break;
                    }
                }
            }
            //Verifica si el correo o la contraseña existian en el localStorage.
            if (datos == 1) {
                alert("Contraseña inválida para el correo proporcionado.");
            }else if ( datos == 2){
                datos = 2;
            }else if(datos == 3){
                alert("No existe ese correo. Registrese...");
            }
            //window.location.reload();
        }
    }else{ 
        alert("No existen correos registrados.");
    }   
}

//---------------------------------------------------------------------

function desLogearse() {
    let usuario = localStorage.getItem("sesionAbierta");
    if (usuario) {
        alert("Cerrando sesion...");
        cont_correo.innerHTML = "";
        cont_nom.innerHTML = "";
        cont_direccion.innerHTML = "";
        

        //Eliminacion de los portafolios de sesion:
        let proyectList = JSON.parse(localStorage.getItem("Proyectos"));
        let sesionIniciada = JSON.parse(localStorage.getItem("sesionAbierta"));
        
        for (const elemento in proyectList) {
            if (sesionIniciada.Correo == proyectList[elemento].Correo) {

                let contenido = document.querySelector(".P-1");
                //contenido.style.display = "none";
                
                //Esto esta dando problemassss
                contenido.remove();
            }   
        }
        //Lo elimina de ultimo para que pueda recorrer el for:
        localStorage.removeItem("sesionAbierta");

        //Muestra el boton de registrarse
        let ocultarBoton = document.getElementById("openM2");
        ocultarBoton.style.display = "inline-block";
        
    }else{
       alert("Aun no haz entrado a una cuenta.");
    }
}

//---------------------------------------------------------------------

let titulo = document.getElementById("porta1");
let descripcion = document.getElementById("porta2");
let año = document.getElementById("porta3");

let proyectList = [];
proyectList = JSON.parse(localStorage.getItem("Proyectos"));

function proyectos() {
    
    let sesionIniciada = JSON.parse(localStorage.getItem("sesionAbierta"));

    let informacion ={
        titulo: titulo.value,
        descripcion: descripcion.value,
        //Error en volver a loguearse.
        Correo : sesionIniciada.Correo,
        año : año.value
        
    };
     proyectList = JSON.parse(localStorage.getItem("Proyectos")) || [];
     proyectList.push(informacion);
     localStorage.setItem("Proyectos", JSON.stringify(proyectList));


     //Div donde van a ir los proyectos:
     let Contenedor= document.getElementById("P-1");

     //Creacion del elemento
     const cont1 = document.createElement("div");
    
     cont1.classList.add("P-1");
     
     //Guarda los elementos creados en el div creados aqui:
     cont1.innerHTML = "<b>Titulo:<b>"+"<br>"+titulo.value +"<br><br>"+"Descripcion:" +"<br>"+ descripcion.value +"<br><br>"+"Año:"+"<br>"+ año.value;
    
     //Guarda los divs recientemente creados en el div del html:
     Contenedor.appendChild(cont1);
    
}

//---------------------------------------------------------------------

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

//---------------------------------------------------------------------

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

//---------------------------------------------------------------------

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





