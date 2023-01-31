function encriptar(){
    textoOriginal = document.getElementById("entrada").value;
    
    if (textoOriginal == ""){
        alert ("Debe introducir un texto");
    }
    else {
        let te = textoOriginal.toLowerCase();
        for (let i = 0; i <= textoOriginal.length; i++){
            hayVocal = false;
            if (te.charAt(i) == "a") {
                hayVocal = true;
                temporal = "ai"
            }
            if (te.charAt(i) == "e") {
                hayVocal = true;
                temporal = "enter"
            }
            if (te.charAt(i) == "i") {
                hayVocal = true;
                temporal = "imes"
            }
            if (te.charAt(i) == "o") {
                hayVocal = true;
                temporal = "ober"
            }
            if (te.charAt(i) == "u") {
                hayVocal = true;
                temporal = "ufat"
            }

            if (hayVocal == true) {
                textoEncriptado +=  temporal;
            } else {
                textoEncriptado += te.charAt(i);
            }
                
           

        }
        limpiarSalida();
        console.log(textoEncriptado);
        document.getElementById("entrada").value = "";
        textoEncriptado = "";
    }
    
    

}

function limpiarSalida() {
    document.getElementById("salida").style.backgroundImage = "none";
    document.querySelector(".mensaje").style.display = "none";
    document.querySelector(".mensaje2").style.display = "none";
    document.getElementById("btnCopiar").style.display = "block";
    
    document.getElementById("salida").value = textoEncriptado;

    document.getElementById("entrada").readOnly = true;

    document.getElementById("btnEncriptar").disabled = true;
    document.getElementById("btnDesencriptar").disabled = false;
    document.getElementById("btnCopiar").disabled = false;


   
}


function desencriptar() {
    console.log(textoOriginal);
    document.getElementById("entrada").value = textoOriginal;
    document.getElementById("salida").value = "";

    document.getElementById("btnEncriptar").disabled = false;
    document.getElementById("btnDesencriptar").disabled = true;
    document.getElementById("btnCopiar").disabled = false;

    document.getElementById("entrada").readOnly = false;

    document.getElementById("btnCopiar").innerHTML = "Copiar";
    

    
}

function copiarPortapapeles() {
    var texto = document.getElementById("salida").value;
    var aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("btnCopiar").innerHTML = "Texto Copiado";


}

let textoOriginal;
let textoEncriptado ="";
let temporal = "";
let hayVocal;
