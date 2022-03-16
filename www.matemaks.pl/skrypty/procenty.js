function czy_liczba(dane) {
	if ((isNaN(dane)) || (dane == "")) {
		window.alert("Została wpisana błędna wartość liczbowa!");
		return false;
	}
	else return true;
}

function ulamek_na_procent() {

	var l1 = document.getElementById("procent1").value;
	l1 = l1.replace(/\,/gi, ".");
	var dziel_i = l1.search("/");
	var p2;
	if (dziel_i == -1) { 
		if(czy_liczba(l1)) p2 = l1 * 100;
	}
	else {
		var l = l1.substring(0, dziel_i);
		var m = l1.substring(dziel_i + 1,  l1.length);
		if ((m != 0) && czy_liczba(l) && czy_liczba(m)) p2 = l/m*100;
	}
	
	document.getElementById('ulamek_na_procent_wynik').innerHTML = "Wynik: " + p2 + "%";
	
}

function procent_na_ulamek() {

	var l1 = document.getElementById("procent2").value;
	l1 = l1.replace(/\,/gi, ".");
	var p2;
	if (czy_liczba(l1)) p2 = (1000*l1)/100000;

	document.getElementById('procent_na_ulamek_wynik').innerHTML = l1 + "% = " + p2;
	
}

function procent_z_liczby() {

	var p1 = document.getElementById("procent3").value;
	var l1 = document.getElementById("procent4").value;
	p1 = p1.replace(/\,/gi, ".");
	l1 = l1.replace(/\,/gi, ".");
	
	var dziel_i = l1.search("/");
	if (dziel_i != -1) {
		var l = l1.substring(0, dziel_i);
		var m = l1.substring(dziel_i + 1,  l1.length);
		if ((m != 0) && czy_liczba(l) && czy_liczba(m)) l1 = l/m;
	}
	
	var u1 = (1000*p1)/100000;
	var wynik;
	if (czy_liczba(p1) && czy_liczba(l1)) wynik = p1 * l1 / 100;

	document.getElementById('procent_z_liczby_wynik').innerHTML = p1 + "% &sdot; " + l1 + " = " + u1 + " &sdot; " + l1 + " = " + wynik;
	
}


function oblicz_liczbe_gdy_dany_jest_procent() {

	var p1 = document.getElementById("procent5").value;
	var l1 = document.getElementById("procent6").value;
	p1 = p1.replace(/\,/gi, ".");
	l1 = l1.replace(/\,/gi, ".");
	
	var dziel_i = l1.search("/");
	if (dziel_i != -1) {
		var l = l1.substring(0, dziel_i);
		var m = l1.substring(dziel_i + 1,  l1.length);
		if ((m != 0) && czy_liczba(l) && czy_liczba(m)) l1 = l/m;
	}
	
	var wynik;
	if (czy_liczba(p1) && czy_liczba(l1)) wynik = (10000*l1)/(100*p1);

	document.getElementById('oblicz_liczbe_gdy_dany_jest_procent_wynik').innerHTML = l1 + " : " + p1 + "% = " + l1 + " : " + (p1*100)/10000 + " = " + wynik;
	
}


function jakim_procentem_jednej_liczby_jest_druga_liczba() {

	var l1 = document.getElementById("procent7").value;
	var l2 = document.getElementById("procent8").value;
	l1 = l1.replace(/\,/gi, ".");
	l2 = l2.replace(/\,/gi, ".");
	
	var dziel_i = l1.search("/");
	if (dziel_i != -1) {
		var l = l1.substring(0, dziel_i);
		var m = l1.substring(dziel_i + 1,  l1.length);
		if ((m != 0) && czy_liczba(l) && czy_liczba(m)) l1 = l/m;
	}
	
	dziel_i = l2.search("/");
	if (dziel_i != -1) {
		var l = l2.substring(0, dziel_i);
		var m = l2.substring(dziel_i + 1,  l2.length);
		if ((m != 0) && czy_liczba(l) && czy_liczba(m)) l2 = l/m;
	}
	
	var wynik;
	if (czy_liczba(l1) && czy_liczba(l2)) wynik = (10000*l2)/(100*l1);

	document.getElementById('jakim_procentem_jednej_liczby_jest_druga_liczba_wynik').innerHTML = l2 + " : " + l1 + " = " + l2/l1 + " = " + l2/l1 + " &sdot; 100% = " + wynik + "%";
	
}
