const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopy = document.getElementById("botonCopy");
function cambio(){

  var inputText = document.getElementById("texto").value;

  if(inputText === ""){
      document.getElementById("respuesta").style.display = "none";
      document.getElementById("textoEncriptado").style.display = "block";
  } else {
      document.getElementById("textoEncriptado").style.display = "none";
      document.getElementById("respuesta").style.display = "block";
  }
}
//encriptar
  
  function Encriptar(){
    var valorA = document.getElementById('texto').value;
    var r=validar();
    if(r==true){
      cambio();
      var valorA = document.getElementById('texto').value;
      valorA=valorA.replace(/e/g, 'enter')
      valorA=valorA.replace(/i/g, 'imes')
      valorA=valorA.replace(/a/g, 'ai')
      valorA=valorA.replace(/o/g, 'ober')
      valorA=valorA.replace(/u/g, 'ufat');
      document.getElementById("respuesta").innerHTML = valorA;
    }
    else {
      alert('Solo letras minúsculas y sin acentos');
      document.getElementById("respuesta").innerHTML = "";
    }
    
  }

//desencriptar
function Desencriptar(){
  var valorB = document.getElementById('texto').value;
  var r=validar();
  if(r==true){
    cambio();
    var valorB = document.getElementById('texto').value;
    valorB=valorB.replace(/enter/g, 'e')
    valorB=valorB.replace(/imes/g, 'i')
    valorB=valorB.replace(/ai/g, 'a')
    valorB=valorB.replace(/ober/g, 'o')
    valorB=valorB.replace(/ufat/g, 'u');
    document.getElementById("respuesta").innerHTML = valorB;
  }
  else {
    alert('Solo letras minúsculas y sin acentos');
    document.getElementById("respuesta").innerHTML = "";
  }
}
// validar
botonEncriptar.addEventListener("click", validar);
botonDesencriptar.addEventListener("click", validar);
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;

function validar() {
  var validado = true;
  var inputText = document.getElementById('texto').value;
    if (inputText.match(letras) != null) {
        validado=false;
    }
  return validado;
}
//copiar
function copiarAlPortapapeles() {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("respuesta").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
