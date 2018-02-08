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
	var Pbrons = 5.95;
	var Pzilver = 7.95;
	var Pgoud = 10.95;
	var PgoudJ = Pgoud * 12;
	var PgoudF = Math.round(PgoudJ).toFixed(0);
	var vraag1 = "Om welk pakket gaat het?";
	var vraag2 = "Om hoe lang gaat het?"

	var AV1 = prompt(vraag1);

	if (AV1.toUpperCase() === "BRONS") {
		var AV2 = prompt(vraag2, "1 Maand / 1 Jaar / 5 Jaar")
		berekenWaardes(AV2, Pbrons);

			// if (AV2.toUpperCase() === "1 Maand".toUpperCase()){
			// 	alert("1 Maand kost" + " " + "€" + Pbrons)
			// 	}
			// 	else if (AV2.toUpperCase() === "1 Jaar".toUpperCase()){
			// 		alert("1 Jaar kost:" + " " + "€" + Pbrons * 12);
			// 	}
				
			// 	else if (AV2.toUpperCase() === "5 Jaar".toUpperCase()){
			// 		alert("5 Jaar kost:" + " " + "€" + Pbrons * 60);
			// 	}
	}
	else if (AV1.toUpperCase() === "zilver".toUpperCase()) {
		var AV2 = prompt(vraag2, "1 Maand / 1 Jaar / 5 Jaar")
		berekenWaardes(AV2, Pzilver);
			// if (AV2.toUpperCase() === "1 Maand".toUpperCase()){
			// 	alert("1 Maand kost" + " " + "€" + Pzilver)
			// 	}
			// 	else if (AV2.toUpperCase() === "1 Jaar".toUpperCase()){
			// 		alert("1 Jaar kost:" + " " + "€" + Pzilver * 12);
			// 	}
				
			// 	else if (AV2.toUpperCase() === "5 Jaar".toUpperCase()){
			// 		alert("5 Jaar kost:" + " " + "€" + Pzilver * 60);
			// 	}
	}
	else if (AV1.toUpperCase() === "goud".toUpperCase()) {
		var AV2 = prompt(vraag2, "1 Maand / 1 Jaar / 5 Jaar")
		berekenWaardes(AV2, Pgoud);

			// if (AV2.toUpperCase() === "1 Maand".toUpperCase()){
			// 	alert("1 Maand kost" + " " + "€" + Pgoud)
			// 	}
			// 	else if (AV2.toUpperCase() === "1 Jaar".toUpperCase()){
			// 		alert("1 Jaar kost:" + " " + "€" + PgoudF);
			// 	}
				
			// 	else if (AV2.toUpperCase() === "5 Jaar".toUpperCase()){
			// 		alert("5 Jaar kost:" + " " + "€" + Pgoud * 60);
			//	}
	}

	function berekenWaardes(AV2, pakketWaarde) {
		if (AV2.toUpperCase() === "1 Maand".toUpperCase()){
			alert("1 Maand kost" + " " + "€" + pakketWaarde)
		}
		else if (AV2.toUpperCase() === "1 Jaar".toUpperCase()){
			alert("1 Jaar kost:" + " " + "€" + pakketWaarde);
		}
		else if (AV2.toUpperCase() === "5 Jaar".toUpperCase()){
			alert("5 Jaar kost:" + " " + "€" + pakketWaarde * 60);
		}
	}
}