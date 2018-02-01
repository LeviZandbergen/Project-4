var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000);
}

function Rekentool() {
	var Pbrons = "5,95";
	var Pzilver = "7,95";
	var pgoud = "10.95"
	var vraag1 = "Om welk pakket gaat het?"

	prompt(vraag1)
}