var man=prompt("Ingresa tu nombre: ")
var woman=prompt("Ingresa el nombre de la chica: ")
var percent=Math.floor((Math.random()*100)+1)

if(percent===100){
    document.write("Porcentaje de amor "+man+" x "+woman+" es: "+percent+"% <br>Ustedes son el amor de su vida!!!")
}else if(percent>50){
    document.write("Porcentaje de amor "+man+" x "+woman+" es: "+percent+"%<br>Su amor es bueno!")
}else{
    document.write("Porcentaje de amor "+man+" x "+woman+" es: "+percent+"%<br>No hay amor")
}


