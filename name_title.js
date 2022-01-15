var name=prompt("Ingresa tu nombre");
var primera=name.slice(0,1).toUpperCase();
var resto=name.slice(1,name.length).toLowerCase();

document.write("Hola! "+primera+resto);