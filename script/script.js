const imageUn = document.getElementById("image-un");
const imageDeux = document.getElementById("image-deux");

const projetUn = document.getElementById("projet-un");
const projetDeux = document.getElementById("projet-deux");

imageUn.addEventListener("click", ()=> {

    console.log("Hello world !");
    projetUn.style.visibility("visible");
    projetDeux.style.visibility("hidden");
})

imageDeux.addEventListener("click", ()=>{

    projetUn.style.visibility("hidden");
    projetDeux.style.visibility("visible");
})

console.log("Hello world !");