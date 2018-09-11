var small = 7.50;
var medium = 9.50;
var large = 12.00;


var totalsmall = prompt("how many small pizz'a do you want?");
document.write("Small pizza's =" + totalsmall);
var smallprice = totalsmall * small;


var totalmedium = prompt("how many medium pizza's do you want?");
document.write("<br><br> Medium pizza's =" + totalmedium);
var mediumprice = totalmedium * medium;


var totallarge = prompt("how many large pizza's do you want?");
document.write("<br><br> Large pizza's = " + totallarge);
var largeprice = totallarge * large;


var total = smallprice + mediumprice + largeprice;

document.write('<br><br>Total price : ' + total);