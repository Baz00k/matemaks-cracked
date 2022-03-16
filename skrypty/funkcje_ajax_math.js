function podziel_pisemnie(wynik_) {

	var program_id = 1;	

	var wynik = document.getElementById(wynik_);
	var dzielna = document.getElementById('dzielna').value;
	var dzielnik = document.getElementById('dzielnik').value;
	
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&dzielna="+dzielna+"&dzielnik="+dzielnik;
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
			wynik.innerHTML = mojeZadanie.responseText;
			wynik = '';
		}
	}
	mojeZadanie.send(params);

}


function oblicz_nwd(wynik_) {

	var program_id = 2;	

	var wynik = document.getElementById(wynik_);
	var liczba1 = document.getElementById('liczba1').value;
	var liczba2 = document.getElementById('liczba2').value;
	
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&liczba1="+liczba1+"&liczba2="+liczba2;
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
			wynik.innerHTML = mojeZadanie.responseText;
			wynik = '';
		}
	}
	mojeZadanie.send(params);

}

function Silnia(wynik_) {

	var program_id = 3;	

	var wynik = document.getElementById(wynik_);
	var silnia_n = document.getElementById('silnia_n').value;
	
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&silnia_n="+silnia_n;
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
			wynik.innerHTML = mojeZadanie.responseText;
			wynik = '';
		}
	}
	mojeZadanie.send(params);

}

function f_kw_wybierz_postac() {
	var typ_index = document.getElementById("postac_funkcji").selectedIndex;
	var typ = document.getElementById("postac_funkcji").options[typ_index].innerHTML;
	
	document.getElementById("1_param").style.display="none";
	document.getElementById("2_param").style.display="none";
	document.getElementById("3_param").style.display="none";
	
	if (typ == 'ogólnej') document.getElementById("1_param").style.display="block";
	if (typ == 'kanonicznej') document.getElementById("2_param").style.display="block";
	if (typ == 'iloczynowej') document.getElementById("3_param").style.display="block";
}


function generuj_analize_f_kw(wynik_) {

	var program_id = 4;	

	var wynik = document.getElementById(wynik_);
	
	var typ_index = document.getElementById("postac_funkcji").selectedIndex;
	var typ = document.getElementById("postac_funkcji").options[typ_index].innerHTML;
	
	var n1 = 0;
	var n2 = 0;
	var n3 = 0;
	
	if (typ == "ogólnej") {
		n1 = document.getElementById('a1').value;
		n2 = document.getElementById('b1').value;
		n3 = document.getElementById('c1').value;
	}
	else if (typ == "kanonicznej") {
		n1 = document.getElementById('a2').value;
		n2 = document.getElementById('p2').value;
		n3 = document.getElementById('q2').value;
	}
	else if (typ == "iloczynowej") {
		n1 = document.getElementById('a3').value;
		n2 = document.getElementById('x13').value;
		n3 = document.getElementById('x23').value;
	}
	
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&typ="+typ+"&n1="+n1+"&n2="+n2+"&n3="+n3;
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
		//	wynik.innerHTML = mojeZadanie.responseText;
			$("#f_kw_wynik").html(mojeZadanie.responseText);
			$("#f_kw_wynik").find("script").each(function(i) {
                    eval($(this).text());
                });
		}
	}
	mojeZadanie.send(params);
}


function generuj_wykres() {
	var program_id = 5;	
	//alert("okno testowe");
	var wzor_funkcji = document.getElementById('wzor_funkcji').value;
	wzor_funkcji = encodeURIComponent(wzor_funkcji);
	
	var dokladnosc = document.getElementById('dokladnosc').value;
	var skala = document.getElementById('skala').value;
		
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&wzor_funkcji="+wzor_funkcji+"&dokladnosc="+dokladnosc+"&skala="+skala;
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
			$("#wykres").html(mojeZadanie.responseText);
			$("#wykres").find("script").each(function(i) {
                    eval($(this).text());
                });
		}
	}
	mojeZadanie.send(params);
}

function generuj_wykres_ustawienia() {
	var program_id = 6;	
	var mojeZadanie2 = pobierzZadanieXMLHTTP();
	
	var wzor_funkcji = document.getElementById('wzor_funkcji').value;
	wzor_funkcji = encodeURIComponent(wzor_funkcji);
			
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&wzor_funkcji="+wzor_funkcji;

	mojeZadanie2.open("POST", adresURL, true);
	
	mojeZadanie2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie2.setRequestHeader("Content-length", params.length);
	mojeZadanie2.setRequestHeader("Connection", "close");
	
	mojeZadanie2.onreadystatechange = function() {
		if (mojeZadanie2.readyState == 4 && mojeZadanie2.status == 200) {
			$("#wykres_ustawienia").html(mojeZadanie2.responseText);			
		}
	}
	mojeZadanie2.send(params);
	
}

function generuj_wykres_plotno() {
	var program_id = 7;	

	var wzor_funkcji = document.getElementById('wzor_funkcji').value;
	wzor_funkcji = encodeURIComponent(wzor_funkcji);
	
	var dokladnosc = 100;
	var skala = 40;
	var wymiar = 600;
	
	if (document.getElementById("dokladnosc") != undefined)
		dokladnosc = document.getElementById('dokladnosc').value;
	
	if (document.getElementById("skala") != undefined)
		skala = document.getElementById('skala').value;
	
	if (document.getElementById("wymiar") != undefined)
		wymiar = document.getElementById('wymiar').value;
		
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&wzor_funkcji="+wzor_funkcji+"&dokladnosc="+dokladnosc+"&skala="+skala+"&wymiar="+wymiar;
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
			$("#wykres").html(mojeZadanie.responseText);
			$("#wykres").find("script").each(function(i) {
                    eval($(this).text());
                });
		}
	}
	mojeZadanie.send(params);
}

function generuj_wykres_funkcji(div_id, wzor_funkcji, dokladnosc, skala, wymiar) {
	var program_id = 8;	
	
//	var dokladnosc = 100;
//	var skala = 40;
//	var wymiar = 600;
		
	var adresURL = 'skrypty/programy_ajax_math.php';		
	var params = "program_id="+program_id+"&wzor_funkcji="+wzor_funkcji+"&dokladnosc="+dokladnosc+"&skala="+skala+"&wymiar="+wymiar+"&div_id="+div_id;
	
	div_id = "#"+div_id;
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
			$(div_id).html(mojeZadanie.responseText);
			$(div_id).find("script").each(function(i) {
                    eval($(this).text());
                });
		}
	}
	mojeZadanie.send(params);
}

function Wyslij_wiadomosc() {
	var program_id = 9;			
	var adresURL = 'skrypty/programy_ajax_math.php';	

	var tresc_wiadomosci = document.getElementById("tresc_wiadomosci").value;
	
	tresc_wiadomosci = encodeURIComponent(tresc_wiadomosci);
	
	var params = "program_id="+program_id+"&tresc_wiadomosci="+tresc_wiadomosci;
	
	
	mojeZadanie.open("POST", adresURL, true);
	
	mojeZadanie.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	mojeZadanie.setRequestHeader("Content-length", params.length);
	mojeZadanie.setRequestHeader("Connection", "close");
	
	mojeZadanie.onreadystatechange = function() {
		if (mojeZadanie.readyState == 4 && mojeZadanie.status == 200) {
			$("#wiadomosc_wynik").html(mojeZadanie.responseText);
		}
	}
	mojeZadanie.send(params);
}
