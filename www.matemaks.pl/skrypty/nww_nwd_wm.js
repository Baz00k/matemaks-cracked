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

function wm() {

	var m1 = document.getElementById("m1").value * 1;
	var m2 = document.getElementById("m2").value * 1;
	
	if (czy_liczba(m1) && czy_liczba(m2)) {
		var iloczyn = m1*m2;
		
		while (m1!=m2) { 
			if (m1>m2) m1-=m2; 
			else m2-=m1; 
		} 

		var nww = iloczyn/m1;

		var l1 = document.getElementById("l1").value*1;
		var l2 = document.getElementById("l2").value*1;
		var m1 = document.getElementById("m1").value*1;
		var m2 = document.getElementById("m2").value*1;

		if (czy_liczba(m1) && czy_liczba(l1) && czy_liczba(l2) && czy_liczba(m2)) {
			document.getElementById("l3").innerHTML = (nww*l1)/m1;
			document.getElementById("m3").innerHTML = nww;

			document.getElementById("l4").innerHTML =  (nww*l2)/m2;
			document.getElementById("m4").innerHTML = nww;
			
			document.getElementById("l5").innerHTML = (nww*l1)/m1 + (nww*l2)/m2;
			document.getElementById("m5").innerHTML = nww;
			
			document.getElementById("znak1").innerHTML = "+";
			document.getElementById("znak2").innerHTML = "=";
		}
	}
}

function nww() {

	var n = document.getElementById('liczba1').value*1;
	var m = document.getElementById('liczba2').value*1;
	
	var n2 = n;
	var m2 = m;
	
	if (czy_liczba(n2) && czy_liczba(m2)) {
	
		iloczyn = n2*m2;
		while (n2!=m2) 
		{ 

		if (n2>m2) 
		   n2-=m2; 
		else 
		   m2-=n2; 
		} 

		document.getElementById('wynikNWW').innerHTML = "NWW(" + n + ", " + m + ") = " + iloczyn/n2;
	}
}

function nwd() {
	var n = document.getElementById('liczba1').value*1;
	var m = document.getElementById('liczba2').value*1;
	
	var n0 = document.getElementById('liczba1').value;
	var m0 = document.getElementById('liczba2').value;
	
	if (czy_liczba(n) && czy_liczba(m)) {
		while (n!=m) 
		{ 

		if (m>n) 
		   m-=n; 
		else 
		   n-=m; 
		} 

		document.getElementById('wynikNWD').innerHTML = "NWD(" + n0 + ", " + m0 + ") = " + n;
	}

}

function rozklad_na_czynniki() {

	var n, n0, p, g, s;
	
	n = document.getElementById('liczba_do_rozkladu').value*1;
	n0 = document.getElementById('liczba_do_rozkladu').value;
	
	var war = 0;
	if(isNaN(n) || (n < 2)) {
		document.getElementById('rozkladwynik').innerHTML = "Podałeś złą wartość liczbową!";
	}
	else {
		if (n < 1000000000000000) war = 1;
		if (n >= 1000000000000000) 
		if (confirm('Podałeś dużą liczbę: ' + n + '. Wygenerowanie wyniku może zająć dłuższą chwilę. W tym czasie działanie przeglądarki bedzie zablokowane. Czy chcesz kontynuować?')) war = 1;
	}
	
	if (war) {
		if(isNaN(n) || (n < 2)) {
			document.getElementById('rozkladwynik').innerHTML = "Podałeś złą wartość liczbową!";
		}
		else {
			s = "";
			p = 2;
			g = Math.floor(Math.sqrt(n));
			
			while(p <= g) {
				while(!(n % p)) {
					n = n/p;
					s += p;
					if (n > 1) s += " &sdot; ";
				}
				if(n == 1) break;
				
				if (p > 6) {
					p++;
					while ((p%6 != 1) && (p%6 != 5)) p++;
				}
				else p++;
			}

			if (s == "") document.getElementById('rozkladwynik').innerHTML = "Liczba " + n0 + " jest liczbą pierwszą."; 
			else {
				if(n > 1) s += n;
				document.getElementById('rozkladwynik').innerHTML = n0 + " = " + s;
			}
		}
	}

	

}



