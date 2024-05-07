//Esto es del locage storage
function RegistrarUsuario(){
    console.log("jajajajaaj");
    let nombre = document.getElementById("nombre");
    let Correo = document.getElementById("register1");
    let Contraseña = document.getElementById("register2");

    const persona ={
        Nombre: nombre.value,
        Correo: Correo.value,
        Contraseña : Contraseña.value
    };
    
   //Esto añade los elementos al storage, la llave de los elementos son el correo asignado a los inputs
   //LAS LLAVES SON EL CORREO
   localStorage.setItem((Correo.value), JSON.stringify( persona ));

   

   //Esto imprime a fomato lista
   //console.log(JSON.parse(localStorage.getItem('llave7',)));// asi accedemos al tercer elemento del array del localstorage



   //Imprime el valor de la llave, en este caso el del valor de "Correo".
   //let llave = JSON.parse(localStorage.getItem('llave7'));
   //console.log(llave.Correo);
}





//Condicionales
function Login() {
    //El correo es la llave

    let CorreoVerific = document.getElementById("login1").value;
    let ContraVerific = document.getElementById("login2").value;

    if ( localStorage.getItem(CorreoVerific)) {


        let llave = JSON.parse(localStorage.getItem(CorreoVerific));
        console.log(llave.Contraseña);

        if (localStorage.getItem(CorreoVerific, /*encontra la manera de verificar la contraseña*/ )) {

            //let llave = JSON.parse(localStorage.getItem(CorreoVerific));
            console.log("Estos son sus Datos personales:");
            console.log(llave.Correo);
            console.log(llave.Contraseña);
            console.log(llave.Nombre);

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





/*locage storage

const signForm = document.getElementById("#signupForm");
signForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("register1").value;
    const contra = document.getElementById("register2").value;

    const Users = JSON.parse(localStorage.getItem("#")) || [];
    const isUserRegistred = Users.find(user => user.corre === correo);
    if (isUserRegistred) {
        return alert("El usuario ya esta registrado!");
        
    }
    Users.push({nombre: nombre, correo: correo, contra: contra})
    localStorage.setItem("users", JSON.stringify(Users))
})*/

//Feedback adrian


