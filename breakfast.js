window.onload = choosePic;
var myPix = new Array("1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg")


function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myImage").src = myPix[randomNum];
}