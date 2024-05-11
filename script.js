let cont_nom = document.getElementById("cont-nom");
let cont_correo = document.getElementById("cont-correo");
let cont_direccion = document.getElementById("cont-direccion");

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

                        //Extraccion de abouts:
                        aboutList = JSON.parse(localStorage.getItem("SobreMi"));
                        for (const about in aboutList) {

                            if (CorreoVerific == aboutList[about].Correo) {

                                //Div donde van a ir los proyectos:
                                let contenedor = document.getElementById("S-1");
                                //Creacion de los contenedores
                                const cont1 = document.createElement("div");
                                cont1.classList.add("S-1");

                                //Guarda los elementos creados en el div creados aqui:
                                cont1.innerHTML = "<b>Descripcion Personal:<b>"+"<br>"+aboutList[about].Descripcion +"<br><br>"+"Nacionalidad:" +"<br>"+ aboutList[about].Nacion +"<br><br>"+"Pais donde vive:"+"<br>"+aboutList[about].Pais;

                                contenedor.appendChild(cont1);
                            }
                        }

                        //Extraccion de skills:
                        skillsList = JSON.parse(localStorage.getItem("skills"));
                        for (const skill in skillsList) {

                            if (CorreoVerific == skillsList[skill].Correo) {

                                //Div donde van a ir los proyectos:
                                let contenedor = document.getElementById("H-1");
                                //Creacion de los contenedores
                                const cont1 = document.createElement("div");
                                cont1.classList.add("H-1");

                                //Guarda los elementos creados en el div creados aqui:
                                cont1.innerHTML = "<b>Habilidad#1:<b>"+"<br>"+skillsList[skill].camp1 +"<br><br>"+"Habilidad#2:" +"<br>"+ skillsList[skill].camp2 +"<br><br>"+"Habilidad#3:"+"<br>"+ skillsList[skill].camp3;

                                contenedor.appendChild(cont1);
                            }
                        }
                        let ocultarBotonRegister = document.getElementById("openM2");
                        let botonSalirSesion = document.getElementById("botonSalir");
                        let ocultarBotonLogin = document.getElementById("openM1");

                        let MostrarBotonAbout = document.getElementById("openM5");
                        let MostrarBotonProyect = document.getElementById("proyectosNav");
                        let MostrarBotonSkils = document.getElementById("openM4");

                        //Muestra y oculta botones del nav:
                        botonSalirSesion.style.display = "inline-block";
                        ocultarBotonRegister.style.display = "none";
                        ocultarBotonLogin.style.display = "none";

                        MostrarBotonAbout.style.display = "inline-block";
                        MostrarBotonSkils.style.display = "inline-block";
                        MostrarBotonProyect.style.display = "inline-block";
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
        
        let proyectList = JSON.parse(localStorage.getItem("Proyectos"));
        let sesionIniciada = JSON.parse(localStorage.getItem("sesionAbierta"));
        
        let AboutList = JSON.parse(localStorage.getItem("SobreMi"));
        let SkillsList = JSON.parse(localStorage.getItem("skills"));
        
        //Recorre los proyectos y los elimina de la pagina
        for (const elemento in proyectList) {
            //Eliminacion de los portafolios de sesion:
            if (sesionIniciada.Correo == proyectList[elemento].Correo) {
                let contenedor = document.getElementById("P-1");
                
                //Verifica si existe contenido en 
                if (contenedor.innerHTML != "") {
                    let contenido = document.querySelector(".P-1");
                    //contenido.style.display = "none";
                
                    contenido.remove();
                }else{
                    continue;
                }
            }    
        }

        //Recorre los about y los elimina de la pagina
        for (const elemento in AboutList) {
            //Eliminacion de los portafolios de sesion:
            console.log("llego aqui 1")
            //problema aquiiii
            if (sesionIniciada.Correo == AboutList[elemento].Correo) {
                console.log("llego aqui2")
                let contenedor = document.getElementById("S-1");
                
                //Verifica si existe contenido en 
                if (contenedor.innerHTML != "") {
                    console.log("lllego aqui3")
                    let contenido = document.querySelector(".S-1");
                    //contenido.style.display = "none";

                    contenido.remove();
                }else{
                    continue;
                }
            }     
        }

        //Recorre las skills y los elimina de la pagina
        for (const elemento in SkillsList) {
            if (sesionIniciada.Correo == SkillsList[elemento].Correo) {
                let contenedor = document.getElementById("H-1");
                
                //Verifica si existe contenido en 
                if (contenedor.innerHTML != "") {
                    let contenido = document.querySelector(".H-1");
                    //contenido.style.display = "none";
                    contenido.remove();
                }else{
                    continue;
                }
            }  
        }
        //Lo elimina de ultimo para que pueda recorrer el for:
        localStorage.removeItem("sesionAbierta");

        //Muestra el boton de registrarse
        let botonSalirSesion = document.getElementById("botonSalir");
        let MostrarBotonRegister = document.getElementById("openM2");
        let MostrarBotonLogin = document.getElementById("openM1");

        let BorraBotonAbout = document.getElementById("openM5");
        let BorraBotonProyect = document.getElementById("proyectosNav");
        let BorraBotonSkils = document.getElementById("openM4");

        MostrarBotonLogin.style.display = "inline-block";
        MostrarBotonRegister.style.display = "inline-block";
        botonSalirSesion.style.display = "none";

        BorraBotonAbout.style.display = "none";
        BorraBotonSkils.style.display = "none";
        BorraBotonProyect.style.display = "none";
        
    }else{
       alert("Aun no haz entrado a una cuenta.");
    }
}

//---------------------------------------------------------------------

let titulo = document.getElementById("porta1");
let descripcion = document.getElementById("porta2");
let año = document.getElementById("porta3");

let proyectList = [];
proyectList = JSON.parse(localStorage.getItem("Proyectos"));//borra esta linea a ver que pasa----------------------------------------------------------

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

let InfoPersonal = [];

function AboutME() {
    
    InfoPersonal = JSON.parse(localStorage.getItem("SobreMi"));

    let descripcion_Personal = document.getElementById("descripPerson");
    let Nacionalidad = document.getElementById("nacion");
    let DondeVive = document.getElementById("pais");

   
    let usuario = JSON.parse(localStorage.getItem("sesionAbierta"));

    
    informacion = {
        Descripcion: descripcion_Personal.value,
        Nacion: Nacionalidad.value,
        Correo : usuario.Correo,
        Pais : DondeVive.value
    };


    InfoPersonal = JSON.parse(localStorage.getItem("SobreMi")) || [];
    InfoPersonal.push(informacion);
    localStorage.setItem("SobreMi", JSON.stringify(InfoPersonal));

     //Div donde van a ir los about:---------------------------------------------------
     let Contenedor= document.getElementById("S-1");

     //Creacion del elemento
     const cont1 = document.createElement("div");
    
     cont1.classList.add("S-1");
     
     //Guarda los elementos creados en el div creados aqui:
     cont1.innerHTML = "<b>Descripcion Personal:<b>"+"<br>"+descripcion_Personal.value +"<br><br>"+"Nacionalidad:" +"<br>"+ Nacionalidad.value +"<br><br>"+"Pais donde vive:"+"<br>"+ DondeVive.value;
    
     //Guarda los divs recientemente creados en el div del html:
     Contenedor.appendChild(cont1);

     alert("Su informacion personal se agrego exitosamente");
}

//-------------------------------------------------------------------------------------------

let skills = [];

function Skills() {

    skills = JSON.parse(localStorage.getItem("skills"));

    let campo1 = document.getElementById("camp1");
    let campo2 = document.getElementById("camp2");
    let campo3 = document.getElementById("camp3");

    let usuario = JSON.parse(localStorage.getItem("sesionAbierta"));

    info ={
        camp1: campo1.value,
        camp2: campo2.value,
        Correo : usuario.Correo,
        camp3 : campo3.value
    };

    skills = JSON.parse(localStorage.getItem("skills")) || [];
    skills.push(info);
    localStorage.setItem("skills", JSON.stringify(skills));

     //Div donde van a ir los about:---------------------------------------------------
     let Contenedor= document.getElementById("H-1");

     //Creacion del elemento
     const cont1 = document.createElement("div");
    
     cont1.classList.add("H-1");
     
     //Guarda los elementos creados en el div creados aqui:
     cont1.innerHTML = "<b>Habilidad#1:<b>"+"<br>"+campo1.value +"<br><br>"+"Habilidad#2:" +"<br>"+ campo2.value +"<br><br>"+"Habilidad#3:"+"<br>"+ campo3.value;
    
     //Guarda los divs recientemente creados en el div del html:
     Contenedor.appendChild(cont1);

     alert("Sus habilidades se agregaron exitosamente");
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


//---------------------------------------------------------------------

// sobre mi modal
let abrirModal4 = document.getElementById("openM4");
let cerrarModal4 = document.getElementById("closeM4");
let Modal4 = document.querySelector(".modal4");


abrirModal4.addEventListener("click", ()=>{
    
    Modal4.showModal();

    })

cerrarModal4.addEventListener("click", ()=>{
    Modal4.close();
    
})

//---------------------------------------------------------------------

// habilidades modal
let abrirModal5 = document.getElementById("openM5");
let cerrarModal5 = document.getElementById("closeM5");
let Modal5 = document.querySelector(".modal5");


abrirModal5.addEventListener("click", ()=>{
    
    Modal5.showModal();

    })

cerrarModal5.addEventListener("click", ()=>{
    Modal5.close();
    
})






