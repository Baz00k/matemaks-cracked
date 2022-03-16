function czy_liczba(dane) {
	if ((isNaN(dane)) || (dane == "")) {
		window.alert("Została wpisana błędna wartość liczbowa!");
		return false;
	}
	else return true;
}

function czy_liczba2(dane) {

	if (dane == '0') return true;

	if ((isNaN(dane)) || (dane == "")) {
		window.alert("Została wpisana błędna wartość liczbowa!");
		return false;
	}
	else return true;
}

function kwadratowe1() {
	
	var a = document.getElementById('a').value*1;
	var b = document.getElementById('b').value*1;
	var c = document.getElementById('c').value*1;
	
	if (b == "") b = 0;
	if (c == "") c = 0;
	
	if (czy_liczba(a) && czy_liczba2(b) && czy_liczba2(c)) {
		var delta = b*b-4*a*c;
		document.getElementById('delta').innerHTML = delta;
	//	document.getElementById('tag-id').innerHTML = '<ol><li>html data</li></ol>';
		if (delta > 0) {
			var x1 = (-b - Math.sqrt(delta))/(2*a);
			var x2 = (-b + Math.sqrt(delta))/(2*a);
			document.getElementById('x1').innerHTML = x1;
			document.getElementById('x2').innerHTML = x2;
		}
		else if (delta == 0) {
			var x0 = (-b)/(2*a);
			document.getElementById('x1').innerHTML = x0;	
			document.getElementById('x2').innerHTML = "Nie ma drugiego rozwiązania";
		}
		else {
			document.getElementById('x1').innerHTML = "Nie istnieje rozwiązanie";
			document.getElementById('x2').innerHTML = "Nie istnieje rozwiązanie";
		}
	}

}






