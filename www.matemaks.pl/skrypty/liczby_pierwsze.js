function podzielna(a) {
	b = Math.floor(Math.sqrt(a));
	c = false;
	for(i = 2; i <= b; i++) {
		if(a%i == 0){
			c = true;
			break;
		}
	}
	return c;
}

				 
function wypisz_liczby_pierwsze() {	
	

	
	var czas = new Date();
	var czas1 = czas.getTime(); 
	
  var i,k,g,n,lp,p,d,t,s,war;
  var STALA = 100000
 
  n = document.getElementById("liczba_lp").value;  
  if(!isNaN(n)) {
		war = 0;
		if (n < 50000) war = 1;
		if ((n >= 50000) && (n < 100000)) if (confirm('Podałeś dużą liczbę: ' + n + '. Wygenerowanie wyniku może zająć kilka sekund. W tym czasie działanie przeglądarki bedzie zablokowane. Czy chcesz kontynuować?')) war = 1;
		if ((n >= 100000) && (n < 500000)) if (confirm('Podałeś bardzo dużą liczbę: ' + n + '. Wygenerowanie wyniku może zająć kilkanaście sekund. W tym czasie działanie przeglądarki bedzie zablokowane. Czy jesteś pewien, że chcesz kontynuować?')) war = 1;
		if ((n >= 500000) && (n < 1000000)) if (confirm('Podałeś bardzo dużą liczbę: ' + n + '. Wygenerowanie wyniku może zająć kilkadziesiąt sekund. W tym czasie działanie przeglądarki bedzie zablokowane. Czy jesteś pewien, że chcesz kontynuować?')) war = 1;
		if (n >= 1000000) if (confirm('Podałeś bardzo dużą liczbę: ' + n + '. Wygenerowanie wyniku może zająć kilka minut. W tym czasie działanie przeglądarki bedzie zablokowane. Czy jesteś pewien, że chcesz kontynuować?')) war = 1;

		if (war == 1) {
		  {
			s = "<span style='font-size: 14px;'>";
			tlp = new Array(n);
			lp = 0; k  = 1; d  = -1;
			while(lp < n)
			{
			  t = true;
			  if(lp < 2) p = lp + 2;
			  else
			  {
				p = 6 * k + d;
				if(d == 1)
				{
				  d = -1; k++;
				}
				else d = 1;
				g = Math.floor(Math.sqrt(p));
				i = 0;
				while(tlp[i] <= g)
				  if(p % tlp[i++] == 0)
				  {
					t = false;
					break;
				  }
			  }
			  if(t)
			  {
				tlp[lp++] = p;
			  }
			}
			var nr;
			for (i = 0; i < n; i++) {
				nr = i+1;
				if (i == 0) s += "<span title='" + nr + "' style='cursor:crosshair;'>"+tlp[i]+"</span>" + ", ";
				if (i > 0) {		
					if (tlp[i] - tlp[i-1] == 2) s += "<span title='" + nr + "' style='cursor:crosshair; color: #f00;'>"+tlp[i]+"</span>" + ", ";
					else if (i == n-1) s += "<span title='" + nr + "' style='cursor:crosshair;'>"+tlp[i]+"</span>" + ", ";
					else if (i < n-1) if (tlp[i+1] - tlp[i] == 2) s += "<span title='" + nr + "' style='cursor:crosshair; color: #f00;'>"+tlp[i]+"</span>" + ", ";
					else s += "<span title='" + nr + "' style='cursor:crosshair;'>"+tlp[i]+"</span>" + ", ";
				}
				
			}
			document.getElementById("lista_lp").innerHTML = s;
			var czas_po = new Date();
			var czas2 = czas_po.getTime(); 
			var roznica = czas2 - czas1;
			document.getElementById("czas_wyk").innerHTML = "Liczby wygenerowano w " + roznica + " ms.";
		  }	
		}
	}
	else s = "Złe dane wejściowe!";  
} 


function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function usun(blok) {
	var parent = document.getElementById(blok);
    parent.removeChild(child);
}


/*

	var t = new Array();
	var i,w,s;
	var MAX = document.getElementById("liczba_lp").value;
	var t_size = Math.log(

	t[0] = false;
	t[1] = false;
	
	if(isNaN(MAX)) s = "<font color=Red><b>Złe DANE</b></font>";
	else {
		for(i = 2; i <= MAX; i++) t[i] = true;
		for(i = 2; i <= MAX; i++) {
			w = i + i;
			while(w <= MAX) {
				t[w] = false; 
				w += i;
			}
		}
		s = "";
		for(i = 2; i <= MAX; i++) if (t[i] == true) {
			if (t[i-2] == true)  
			s += i + " ";
		}
	}
	
	document.getElementById("data_out").innerHTML = s;


	var j = 1;
	var d = 2;
	var poprzednia = 2;

	
		
	var do_wklejenia = "";
		
	while(j <= MAX){
		b = podzielna(d);	
		if (!b) {
			do_wklejenia += "<span title='"+j+"'>"+d+"</span>";			
			j++;
			if (j <= MAX) do_wklejenia += ", "
		}	
		d++;
	}
	
	do_wklejenia += ".";
		
	document.getElementById('lista_lp').innerHTML = do_wklejenia;
}


/*

while(j <= MAX){
		b = podzielna(d);
		if (!b) {
			if(j%500==1) {
				do_wklejenia += "<table><tr><td valign='top' style='padding:10px'>";
			}
			if(j%100==1) {
				do_wklejenia += "<table>";
				do_wklejenia += "<tr style='font-weight:bold;background:#eeeeee'>";
				do_wklejenia += "<td>L.p.</td><td>Liczba</td></tr>";
			}
			do_wklejenia += "<tr><td>"+j+"</td><td>"+d+"</td></tr>";
			if(j%100==0) {
				do_wklejenia += "</table>";
			}
			if(j%500==100||j%500==200||j%500==300||j%500==400) {
				do_wklejenia += "</td><td valign='top' style='padding:10px'>";
			}
			if(j%500==0) {
				do_wklejenia += "</table></td></tr></table><br/><br/>";
			}
			j++;
		}
		d++;
	}
	
	
*/