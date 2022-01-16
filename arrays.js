var names=["Angela","Ulises","Mary","Pamela"]
var name=prompt("Cual es tu nombre? ")

if (names.includes(name)){
    document.write("Bienvenido: "+name+" !!")
}
document.write("<br>"+names.length+"<br>");
document.write(names[2]+"<br>");
document.write(names.includes("Mary"))