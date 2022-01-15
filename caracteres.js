var cadena=prompt("Ingrese los caracteres");

var resto=140-cadena.length;

document.write("Has escrito "+cadena.length+" te quedan "+resto+" caracteres disponibles");
var cortado=cadena.slice(0,140);
document.write(cortado);