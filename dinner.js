window.onload = choosePic;
var myPix = new Array("18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg")


function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myImage").src = myPix[randomNum];
}