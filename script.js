let abrirModal = document.getElementById("openM1");
let cerrarModal = document.getElementById("closeM1");

let Modal1 = document.querySelector(".modal1");


abrirModal.addEventListener("click", ()=>{
    Modal1.showModal();

    })

cerrarModal.addEventListener("click", ()=>{
    Modal1.close();
    
})