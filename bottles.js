var bottles = 99
while (bottles >= 0) {
    var bottleWord = "bottle";
    if (bottles === 1) {
        bottleWord = "bottles";
    } 
    document.write(bottles + " " + bottleWord + " of beer on the wall"+"<br>");
    document.write(bottles + " " + bottleWord + " of beer,"+"<br>");
    document.write("Take one down, pass it around,"+"<br>");
	bottles--;
    document.write(bottles + " " + bottleWord + " of beer on the wall."+"<br><br>");
}