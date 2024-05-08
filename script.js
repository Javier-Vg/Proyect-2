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


   
    let registro = JSON.parse(localStorage.getItem("registros"));
    
    //Hacer un for para recorrer todos los elementos del loclStrage!!!!!!!!!!!!!!!!!!!!
    if (Correo.value != registro[0].Nombre) {
        registros = JSON.parse(localStorage.getItem("registros")) || [];

        registros.push(persona);

        localStorage.setItem("registros", JSON.stringify(registros));
    }else{
        alert("El correo ya existe!");
        
    }
    //console.log(JSON.parse(localStorage.getItem("registros")));
    
}



//Imprime el valor de la llave, en este caso el del valor de "Correo".
//let llave = JSON.parse(localStorage.getItem('llave7'));
//console.log(llave.Correo);



function Login() {
    //El correo es la llave

    let CorreoVerific = document.getElementById("login1").value;
    let ContraVerific = document.getElementById("login2").value;

    if ( localStorage.getItem(CorreoVerific)) {

        let llave = JSON.parse(localStorage.getItem(CorreoVerific));
        
         if (ContraVerific.trim() === llave.Contraseña.trim()) {
              alert("Haz cambiado de perfil a "+llave.Nombre);
              cont_nom.innerHTML = llave.Nombre;
              cont_correo.innerHTML = llave.Correo;
              cont_direccion.innerHTML = llave.Direccion;
              


              //console.log(llave.Correo);
              //console.log(llave.Contraseña);
              //console.log(llave.Nombre);
           
         }else{
             alert("La contraseña es incorrecta");
         }
    }else{
        alert("El correo no existe");
    }
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






