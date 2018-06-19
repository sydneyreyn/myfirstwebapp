window.onload = choosePic;
var myPix = new Array("9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg")

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myImage").src = myPix[randomNum];
}