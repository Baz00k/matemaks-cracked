<!DOCTYPE html><html lang="pl"><head><meta charset="utf-8"><title>Login</title><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Michał Budzyński" /><link rel="Shortcut icon" href="./grafika/matemaks_ikona.ico" /><link rel="stylesheet" type="text/css" href="./mstyle_20201217.css"><script type="text/javascript" src="./skrypty/skrypty_c_20210120.js"></script>
	<meta name="robots" content="noindex">
	<style>
		.span_link {
			font-size:90%;
			color:#663608;
		}
		.span_link:hover {
			cursor:pointer;
			color:#a75a11;
		}
		.panel_podsumowanie {
			min-width: 300px;
			max-width: 700px;
			margin:10px auto 44px;
		}
		.panel_r {
			border:1px solid #333;
		}
		.panel_info {
			border:1px solid #333;
			padding: 5px 20px;
			background:rgb(254,255,232);
			background: linear-gradient(to bottom, rgb(254,255,232) 0%,rgb(236,239,210) 100%);
		}
		.container_noc .panel_info {
			background:rgba(22,22,22,1);
			background: linear-gradient(to bottom, rgb(37,37,37) 0%,rgb(22,22,22) 100%);
		}
		.panel_historia {
			border:1px solid #333;
			padding: 5px 20px;
			text-align:left;
			line-height:23px;
			background:#f8f8f8;
		}
		.container_noc .panel_historia {
			background:#222;
		}
		.panel_tytul {
			font-weight:bold;
			background: rgb(224,220,159);
			background: linear-gradient(to bottom, rgb(224,220,159) 0%,rgb(241,247,192) 42%,rgb(241,247,192) 58%,rgb(224,220,159) 100%);
			padding:3px 5px;
			border-top-left-radius:5px;
			border-top-right-radius:5px;
		}
		.container_noc .panel_tytul  {
			background: rgb(35,35,35);
			background: linear-gradient(to bottom, rgb(35,35,35) 0%,rgb(61,61,61) 50%,rgb(35,35,35) 100%);
		}
		.panel_r:after {
		  content:'';
		  display:block;
		  clear:both;		  
		}
		.panel1 {
			float:left;
			width:50%;
			background: rgb(214,219,191);
			background: linear-gradient(to bottom, rgb(254,255,232) 0%,rgb(214,219,191) 100%);
			padding:2px 5px;	
			text-align:center;
			border-right:1px solid #000;			
			-moz-box-sizing:border-box;
			-webkit-box-sizing:border-box;
			box-sizing:border-box;
		}
		.panel2 {
			float:left;
			width:50%;
			background: rgb(254,255,232);
			background: linear-gradient(to bottom, rgb(254,255,232) 0%,rgb(234,239,211) 100%);
			padding:2px 5px;
			text-align:center;			
			-moz-box-sizing:border-box;
			-webkit-box-sizing:border-box;
			box-sizing:border-box;
		}
		.container_noc .panel1, .container_noc .panel2 {
			background: rgb(73,73,73);
			background: linear-gradient(to bottom, rgb(96,96,96) 0%,rgb(73,73,73) 100%);
		}
		.panel1_ustawienia:hover {
			background: rgb(254,255,232);
		}
		.container_noc .panel1_ustawienia:hover {
			background: rgb(96,96,96);
		}		
		.panel2_mod1 {
			padding:0;
			background:#fff;
		}
		.panel_opis {
			display:none;
			margin: 10px 0 30px;
		}
		.warning {
			background:#F0B2B2;
		}
		.container_noc .warning {
			background:#660000;
		}
		.help_b {
			cursor: pointer;
		}
		.panel_kup_premium {
			background:#FFFFF5;
			opacity: 1;
			box-shadow: 0 0 10px #b3ae87 inset;
			cursor: pointer;			
		}
		.panel_kup_premium div.panel1 {

		}
		.panel_kup_premium div.panel1:hover {

		}
		
		.container_noc .panel_premium div.panel1 {
			background: #333;
			box-shadow: 0 0 10px #777 inset;
		}
		.container_noc .panel_premium div.panel1:hover {
			background:#444;
		}		
		
		.platnosc_dane {
			min-width: 250px;
			max-width: 500px;
			margin:15px 10px;
		}	
		.platnosc_dane:after {
			content:'';
			display:block;
			clear:both;		  
		}
		.platnosc_d1 {
			float:left;
			width:150px;	
			text-align:left;

		}
		.platnosc_d2 {
			float:left;
			width:300px;	
			text-align:left;
			font-weight:bold;

		}
		.platnosc_d2:after {
			content:'';
			display:block;
			clear:both;
			margin-bottom:10px;		  
		}
		
		.pole_wyboru {
			cursor:pointer;
			background:#ccc;
			opacity: 0.3;
		}
		.pole_wyboru:hover {
			background:#eed;
			opacity: 0.7;
		}
		.container_noc .pole_wyboru {
			background:#333;
		}
		.container_noc .pole_wyboru:hover {
			background:#444;
		}
		
		.wybrane_pole {
			background:#FFFFF5;
			opacity: 1;
			box-shadow: 0 0 10px #b3ae87 inset;
		}
	
		.wybrane_pole:hover {
			background:#FFFFF5;
			opacity: 0.9;
		}
		.container_noc .wybrane_pole {
			background:#333;
		}
		.container_noc .wybrane_pole:hover {
			background:#444;
		}
		
		.lewe_pole {
			border-right:1px solid #000;
		}
		.prawe_pole.wybrane_pole {
			box-shadow: 0 0 10px #b3ae87 inset, -1px 0px 0 0 #000;
		}

		.lewe_pole span:before {
			display:inline-block;
			content: "";
			vertical-align:middle;
			margin: -3px 6px 0 0px;
			width:18px;
			height: 18px; 
			background: url(grafika/multi.png) -290px 0px no-repeat;
		}
		.prawe_pole span:before {
			display:inline-block;
			content: "";
			vertical-align:middle;
			margin: -3px 6px 0 0px;
			width:18px;
			height: 18px; 
			background: url(grafika/multi.png) -272px 0px no-repeat;
		}
		.ustawienia_zmiana {
			display:inline-block;
			width: 30px;
			height: 30px;
			vertical-align:middle;			
		}
		.u_zielony {
			background: url(grafika/multi.png) -272px 0px no-repeat;
		}
		.panel_zalety_premium {
			list-style-type: none;
			padding: 4px 10px 4px 35px;
			position: relative;
			text-align:left;
			cursor: pointer;
			border:1px solid #333;
		}
		.panel_zalety_premium:before {
			position: absolute;
			content: "";
			margin: 7px 0 0 -24px;     
			width:17px;
			height: 16px; 
			background: url(grafika/multi.png) -251px 0px no-repeat;
		}
		.panel_faq {
			list-style-type: none;
			padding: 4px 10px ;
			position: relative;
			text-align:left;
			cursor: pointer;
			border:1px solid #333;
		}
		.panel_o_koncie_info {
			background: rgb(254,255,232);
			background: linear-gradient(to bottom, rgb(254,255,232) 0%,rgb(234,239,211) 100%);
		}
		.panel_o_koncie_info:hover {
			background: rgb(234,239,211);
		}
		.container_noc .panel_o_koncie_info {
			background: rgb(56,56,56);
			background: linear-gradient(to bottom, rgb(56,56,56) 0%,rgb(53,53,53) 100%);	
			border:1px solid #555;
		}
		.container_noc .panel_o_koncie_info:hover {
			background: rgb(64,64,64);
		}
		.container_noc #informacje_o_koncie div.panel2 {
			background: rgb(56,56,56);
			background: linear-gradient(to bottom, rgb(56,56,56) 0%,rgb(53,53,53) 100%);	
			border-bottom:1px solid #444;
		}	
		.container_noc #informacje_o_koncie div.panel1 {	
			border-bottom:1px solid #444;
			border-top:0;
		}
		.container_noc #informacje_o_koncie div.panel_r {	
			border:0;
		}
		.panel_dodaj_pakiet {
			background:#FFFFF5;
			box-shadow: 0 0 10px #b3ae87 inset;
			border:1px solid #333;
			cursor: pointer;
			text-align:center;
			padding: 4px 0;		
		}
		.panel_dodaj_pakiet:hover {
			background:#efee99;
			animation:0;
			-moz-animation:0;
			-webkit-animation: 0;
		}
		.container_noc .panel_dodaj_pakiet {
			background:#555;
			box-shadow: 0 0 16px #222 inset;
		}
		.container_noc .panel_dodaj_pakiet:hover {
			background:#777;
			animation:0;
			-moz-animation:0;
			-webkit-animation: 0;
		}
		
		.gradient {
			animation:myfirst 2s;
			-moz-animation:myfirst 2s infinite; /* Firefox */
			-webkit-animation:myfirst 2s infinite; /* Safari and Chrome */
		}
		
		.container_noc .gradient {
			animation:myfirst2 2s;
			-moz-animation:myfirst2 2s infinite; /* Firefox */
			-webkit-animation:myfirst2 2s infinite; /* Safari and Chrome */
		}
		
		@-moz-keyframes myfirst {
			0%   {background:#FFFFF5;}
			50%   {background:#bbf167;}
			100%   {background:#FFFFF5;}
		}

		@-webkit-keyframes myfirst {
			0%   {background:#FFFFF5;}
			50%   {background:#bbf167;}
			100%   {background:#FFFFF5;}
		}
		
		@-moz-keyframes myfirst2 {
			0%   {background:#555;}
			50%   {background:#528306;}
			100%   {background:#555;}
		}

		@-webkit-keyframes myfirst2 {
			0%   {background:#555;}
			50%   {background:#528306;}
			100%   {background:#555;}
		}
		
		
		#dodano_pakiet_info {
			padding: 5px 20px;
			background:#eee;
		}
		.container_noc #dodano_pakiet_info {
			background:#222;
		}
		.bb_brak, .container_noc .bb_brak {
			border-bottom:0px;	
		}
		.bt_brak, .container_noc .bt_brak {
			border-top:0px;	
		}
		.logowanie_blok {
			margin: 20px auto;
			border: 1px solid #3a69d5;
			background: rgb(205,233,255);
			background: linear-gradient(to bottom, rgba(217,234,247,1) 0%,rgba(227,244,255,1) 50%,rgba(212,233,249,1) 100%);
			border-radius: 5px;
		}
		.container_noc .logowanie_blok {
			background:#333;
		}
		.korzysci_rej_blok {
			margin: 20px auto;
			padding: 20px 30px;
			border: 1px solid #A8A8A8;
			background: rgb(215,255,191);
			background: linear-gradient(to bottom, rgb(215,255,191) 0%,rgb(226,255,209) 50%,rgb(206,249,189) 100%);
			border-radius: 5px;
		}
		.container_noc .korzysci_rej_blok {
			background:#333;
		}
		.rejestracja_blok {
			margin: 20px auto;
			border: 1px solid #A8A8A8;
			background: #fafafa;
			background: linear-gradient(to bottom, rgba(225,254,164,1) 0%,rgba(228,247,185,1) 50%,rgba(225,254,164,1) 100%);
			border-radius: 5px;
		}
		.container_noc .rejestracja_blok {
			background:#333;
		}
		.pakiet_dodaj_button, .user_button {
			display:inline-block;
			margin: 15px 15px 15px auto;
			padding:14px 20px;
			background: #fff297;
			box-shadow: 0 0 4px #c4c4c4;
			border: 1px solid #A8A8A8;
			border-radius: 5px;
			cursor:pointer;
			font-family: Times New Roman, Arial, sans-serif;
			text-align:center;
			font-size:120%;
		}
		.pakiet_uruchom_button {
			border: 2px solid #20992E;
			box-shadow: 0 0 16px #c4c4c4;
		}
		.user_button {
			padding:0px 10px;
			font-size:100%;
			background:#f3e2c4;
		}
		.container_noc .pakiet_dodaj_button, .container_noc .user_button {
			background: #efdf67;
		}
		.container_noc .user_button {
			background: #c6a85f;
		}
		.pakiet_dodaj_button:hover{
			background: #ffe953;
			box-shadow: 0 0 8px #b4b4b4;
		}
		.pakiet_dodaj_button:hover{
			box-shadow: 0 0 20px #b4b4b4;
		}
		.user_button:hover {
			background: #ffe5b7;
			box-shadow: 0 0 8px #b4b4b4;
		}

		.container_noc .pakiet_dodaj_button, .container_noc .user_button, .container_noc .pakiet_uruchom_button {
			color:#000;
			box-shadow: 0 0 2px #3c3c3c inset;
			border: 1px solid #111;
		}
		
		.container_noc .user_button:hover {
			
		}
		
		.button_disabled, .container_noc .button_disabled {background:#ddd;opacity:0.5;box-shadow: none;}
		.button_disabled:hover {background:#ddd;box-shadow: none;}
		
		.bold {
			font-weight:bold;

		}
		
		
		
		.pakiet_test_premium {
			width: 70px;
			margin: 10px auto 5px;
			padding: 1px 4px;
			border-radius: 6px;
			vertical-align: middle;
			cursor:pointer;
			text-align:center;
			border-top: 1px solid #8dc92e;
			border-bottom: 1px solid #9fb37e;
			background: rgb(157,213,58);
			background: linear-gradient(to bottom, rgb(189,221,136) 0%,rgb(157,213,58) 100%);
			box-shadow: 0px 1px 3px #aaa;			
			color: #000;
		   }
		.pakiet_test_premium:hover {		
			background: rgb(157,213,58);
			color: #000;
		}
		.ajax_info {
			color:#3f220d;
			margin: 10px 0;
		}
		.container_noc .ajax_info {
			color:#e59d9d;
		}
		.pakiet_3_dni_bonus_info {
			padding: 0 20px;
		}
		
		.wciecie1 {
			padding: 15px 35px;
			margin:0
		}
		.tekstowe {
		  display: inline-block;
		  -webkit-box-sizing: content-box;
		  -moz-box-sizing: content-box;
		  box-sizing: content-box;
		  padding: 2px 5px;
		  border: 1px solid #b7b7b7;
		  -webkit-border-radius: 3px;
		  border-radius: 3px;
		  background: rgb(252,252,252);
		  box-shadow: 0px 1px 2px #ddd inset;
		  text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
		}
		.container_noc .tekstowe {
			background: #111;
			box-shadow: 0px 1px 2px #333 inset;
			text-shadow: 1px 1px 0 rgba(11,11,11,0.66);
			color:#fff;
			border: 1px solid #595656;
		}
		.small {
			line-height:23px;
			padding: 12px 20px;
		}
		.email2 {
			display:none;
		}
		@media all and (max-width: 540px) {
			.equal_height {
				height:60px;
				display: table-cell;
				vertical-align:middle;
			}
		}
		.like_link {
			color:#983111;
			cursor:pointer;
		}
		.like_link:hover {
			color:#ea7400;
		}
		.container_noc .like_link {
			color:#FFE6B2;
		}

		.container_noc .like_link:hover {
			color:#c1650c;
		}
		.hide {
			display:none;
		}
		#informacja_o_mozliwosci_wlaczenia_konta_premium {
			padding:10px 15px;
			text-align:left;
		}
		.arrow_down {
			position:relative;
			padding-right: 25px;
		}
		.arrow_down:after {
			content: "\2193";
			position:absolute;
			top:3px;
			right:10px;
			font-size:130%;
			color:#999;
		}
		.arrow_down:hover:after {
			content: "\2193";			
			color:#111;
		}
		
		.kup_form {
			display:none;
		}
			
		.wybor_pakietow {
			display: block;
			margin: 16px auto;
			text-align: center;
			justify-content: center;
			align-items: center;
		}
		
		.pakiet_wybor {
			display: inline-block;
			width: 105px;
			height: 100px;
			background: #ece6ba;
			box-shadow: 0 0 10px #d4d4d4;
			border:1px solid #aaa;
			border-radius: 20px;
			margin:10px 10px;
			padding:8px 5px 0px;
			text-align:center;
			-webkit-user-select: none; /* Safari 3.1+ */
			-moz-user-select: none; /* Firefox 2+ */
			-ms-user-select: none; /* IE 10+ */
			user-select: none; /* Standard syntax */
			cursor:pointer;
			line-height:24px;
			vertical-align: top;
		}
			
		.container_noc .pakiet_wybor {
			color:#000;
			background:#9f996a;
			box-shadow: 0 0 8px #3c3c3c inset;
			border: 1px solid #111;
		}
		.pakiet_wybor:hover {
			background: #fff297; /*#dbb38d;*/ /*#ceff7e;*/
			box-shadow: 0 0 16px #c4c4c4;
		}		
		.zaznaczony_pakiet {
			background: #fff297;
			box-shadow: 0 0 16px #c4c4c4;
		}
		.container_noc .zaznaczony_pakiet {
			background: #efdf67;
		}

		.panel_z_opis_next{
			cursor:pointer;
		}
		.panel_z_opis_next:hover{
			color:#ea7400;
		}
		.pakiet_dni {
			font-size:140%;
			font-weight:bold;
			margin: 4px auto 14px;
		}
		.pakiet_kwota {
			font-size:120%;
			font-weight:bold;
		}
		.pakiet_dziennie {
			font-size:90%;
		}
		
		.jest_aktywna_promocja .pakiet_wybor {
			height: 105px;
		}
		
		.jest_aktywna_promocja .pakiet_dni {
			margin: 0 auto 5px;
		}
		
		.promocja {
			color: #888;
			position: relative;
			display: inline-block;
		}
		.promocja:after, .promocja:before {
			position: absolute;
			content: "";
			top: 50%;
			left: 0;
			width: 100%;
			height: 1px;
			background: #f00;
		}
		.promocja:before {
			transform: rotate(20deg);
		}
		.promocja:after {
			transform: rotate(-20deg);
		}
		
		@media all and (max-width: 700px) {
			.pakiet_wybor {
				width: 85px;
				height: 85px;
				margin:6px 8px;
				padding:12px 5px 0px;
				line-height:20px;
			}
			.pakiet_dni {
				font-size:124%;
				font-weight:bold;
				margin: 0 auto 10px;
			}
			.pakiet_kwota {
				font-size:106%;
				font-weight:bold;
				margin: 3px auto;
			}
			.pakiet_dziennie {
				font-size:75%;
			}
			.jest_aktywna_promocja .pakiet_wybor {
				height: 95px;
			}
			
			.jest_aktywna_promocja .pakiet_dni {
				margin: 0 auto 3px;
			}
			.promocja {
				font-size:90%;
			}
		}	
		
		.center {
			display: block;
			margin: 0 auto;
			text-align: center;
		}
		.m10{margin-top:10px;margin-bottom:10px}
		.m20{margin-top:20px;margin-bottom:20px}
				
		.opcja_ustawien {
			margin: 10px 10px 16px 0px;
		}
		.opcja_ustawien_info {
			margin-left:49px;
		}
		.aktywne {
			color:#438d30;
			font-weight:bold;
			font-size:110%;
		}
		.nieaktywne {
			color:#ba3c3c;
			font-weight:bold;
		}
		
.lista5 {
	margin:10px 0px;
	padding:0;
}

.lista5 li {
     list-style-type: none;
     padding: 0 0 0 15px;
     position: relative;
	 margin: 6px 0 0;
}

.lista5 li:before {
    position: absolute;
	display: block;
	top:12px;
	left:0px;
	content: "";    
	width:6px;
	height: 6px; 
    background: #dbb989;
	border:1px solid #751;
	border-radius: 4px;
}

.lista6 {
	margin:10px 6px 10px 16px;
	padding:0;
}

.lista6 li {
     list-style-type: none;
     padding: 0 0 0 22px;
     position: relative;
	 margin: 6px 0 0;
}

.lista6 li:before {
	position: absolute;
	display: block;
	top:6px;
	left:0px;
	content: "";    
	width:17px;
	height: 17px; 
	border:0;
    background: url(grafika/multi.png) -251px 0px no-repeat;
}
		
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  vertical-align:middle;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: -3px;
  left: 0;
  right: 0;
  bottom: 3px;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.container_noc .slider {
	background: #5d5d5d;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #58b459;
}

input:focus + .slider {
  box-shadow: 0 0 1px #58b459;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 

.blok_login {
	margin: 0 auto 30px;
}

.blok_login_tytul {
	font-size:130%;
	font-weight:bold;
	margin: 60px auto 10px;
	text-align:center;
	text-decoration:underline;
}

.mt10 {
	margin-top:10px;
}
		
	</style><script type="text/javascript" src="./skrypty/skrypty_login_20190101.js"></script></head><body><div id="container" class="container"	s_tabela="" s_id="" s_pkt="" s_fzmp4="0" p_min="" p_max=""p_cel="" p_procent="" nadtematy="|Login"><div id="top"><a href="index.html"></a></div><div id="menu"><a href="./index.html" id="glowna"><span>Główna</span></a><div id="szkola"><span>Szkoła</span></div><div id="matura"><span>Matura</span></div><div id="studia"><span>Studia</span></div><div id="programy"><span>Programy</span></div><div id="inne"><span>Inne</span></div><a href="./login.php" id="login"><span>Logowanie</span></a></div><div id="menu_wysuwane"></div><div class="middle" >			
		
		<div class="blok_login" id="usuwanie_konta"><div class="blok_login_tytul mt10">Logowanie</div>
		Jeśli jesteś zarejestrowanym użytkownikiem, to możesz zalogować się poniżej:
			<div>
				<span style="display:inline-block; width:60px;">Login:</span><input type="text" class="tekstowe" placeholder="login lub e-mail" style="width:200px;" maxlength="40"  id="nazwa_uz"/>
			</div>
			<div>
				<span style="display:inline-block; width:60px;">Hasło:</span><input type="password" class="tekstowe"  placeholder="hasło" style="width:200px;" maxlength="16" id="haslo" onkeypress="if (event.which == 13 || event.keyCode == 13) u_logowanie()"/>
			</div>
			
			<div id="login_button" class="user_button" onClick="u_logowanie()" onkeypress="if (event.which == 13 || event.keyCode == 13) u_logowanie()">Zaloguj się</div>
				<span class="span_link" style="margin-left:10px;" onClick="$('#zapomniane_haslo').slideToggle(500);">Zapomniane hasło?</span>
				
			<div id="zapomniane_haslo" style="display:none;margin:10px auto">
				<span style="display:inline-block; width:60px;">E-mail:</span><input type="text" class="tekstowe"  placeholder="podaj e-mail" id="email_odzy" style="width:200px;" maxlength="40"/>
				<div id="odzysk_button" style="margin: 10px 0 0 60px" class="user_button" onClick="u_zapomniane_haslo('wynik_logowania')" onkeypress="if (event.which == 13 || event.keyCode == 13) u_zapomniane_haslo('wynik_logowania')">Zresetuj hasło</div>
			</div>
			<div id="wynik_logowania" class="ajax_info"></div>
		Jeśli jeszcze nie posiadasz konta, to zarejestruj się poniżej.
		</div>
		
		
		<div class="blok_login" id="usuwanie_konta"><div class="blok_login_tytul">Rejestracja</div>
			Jeśli chcesz się zarejestrować w&nbsp;serwisie matemaks.pl, to wypełnij formularz: 
			<div>
				<span style="display:inline-block; width:60px;">Login:</span><input type="text" class="tekstowe"  maxlength="16" placeholder="podaj login" style="width:300px;" id="login_r"/>
			</div>
			<div>
				<span style="display:inline-block; width:60px;">E-mail:</span><input type="text" class="tekstowe"  maxlength="40" placeholder="podaj e-mail" style="width:300px;" id="email_r"/>
			</div>
			<div class="email2">
				Jeśli jesteś człowiekiem to zostaw to pole puste:<input type="text" class="tekstowe"  maxlength="40" style="width:300px;" id="email_r2"/>
			</div>
			<div>
				<span style="display:inline-block; width:60px;">Hasło:</span><input type="password" class="tekstowe"  maxlength="16" placeholder="hasło min. 6 znaków" style="width:300px;" id="haslo_r"/>
			</div>
			<div>
				<input type="checkbox" id="regulamin"> Akceptuję <a href="regulamin.html" target="_blank">Regulamin</a>.
			</div>
			
			<div><input type="checkbox" id="dane_osobowe"> Wyrażam zgodę na przetwarzanie danych osobowych podanych w&nbsp;tym formularzu. Więcej informacji o tym jak serwis matemaks.pl przetwarza Twoje dane osobowe znajdziesz na stronie: <a href="informacje-o-twoich-danych-osobowych.html" target="_blank">Informacje o Twoich danych osobowych</a>.</div>
						
			<div id="rejestracja_button" class="user_button" onClick="u_rejestracja()">Utwórz konto</div>
			<div id="wynik_rejestracji"  class="ajax_info"></div>		
		</div>

		<div class="blok_login" id="ustawienia_koncie"><div class="blok_login_tytul">Informacje</div>
			Zalogowani użytkownicy mogą kupić konto premium, które daje następujące korzyści:
			
			<ul class="lista6">
				<li>nieograniczony <b>dostęp do wszystkich materiałów</b> w&nbsp;serwisie matemaks.pl,</li>
				<li>dodatkowy <b>guzik szybkiej odpowiedzi</b> do większości zadań,</li>
				<li>możliwość wygodnego drukowania materiałów.</li>
			</ul>
			
			Zalogowani użytkownicy mogą zmieniać sposób działania strony, korzystając z&nbsp;ustawień: 
			
			<div class="opcja_ustawien">
			<label class="switch"><input type="checkbox" class="ustawienia_zmiana" opcja="tryb_male_przyciski"><span class="slider round"></span></label>
			<span class="">Przyciski premium</span>
			<div class="opcja_ustawien_info">Zmienia przyciski pod zadaniami na mniejsze.</div>
			</div>
			
			<div class="opcja_ustawien">
			<label class="switch"><input type="checkbox" class="ustawienia_zmiana" opcja="nocna_nauka"><span class="slider round"></span></label>
			<span class="">Ciemna skórka</span>
			<div class="opcja_ustawien_info">Zmienia kolorystykę strony na ciemną.</div>
			</div>
			
			<div class="opcja_ustawien">
			<label class="switch"><input type="checkbox" class="ustawienia_zmiana" opcja="poziom_zadania"><span class="slider round"></span></label>
			<span class="">Ukryj poziom zadania</span>
			<div class="opcja_ustawien_info">Ukrywa informację o poziomie zadania, która wyświetla się w&nbsp;prawym górnym rogu zadań.</div>
			</div>
			
			<div class="opcja_ustawien">
			<label class="switch"><input type="checkbox" class="ustawienia_zmiana" opcja="tryb_bez_yt"><span class="slider round"></span></label>
			<span class="">Ukryj guzik YouTube</span>
			<div class="opcja_ustawien_info">Ukrywa guzik "YouTube" w&nbsp;zadaniach.</div>
			</div>
			
			Aby korzystać z&nbsp;powyższych ustawień nie trzeba posiadać konta premium.<br />
			Możesz przetestować ustawienia bez logowania, ale efekt będzie ograniczony do godziny.
					
		</div>	

		<div class="blok_login"><div class="blok_login_tytul">Cennik</div>
			Zalogowani użytkownicy mogą kupić dostęp do wszystkich materiałów edukacyjnych w 
			serwisie matemaks.pl na wybrany okres czasu. Dostępne są następujące możliwości:
			<ul class="lista4">
				<li>na 3 dni za 18 zł,</li>
				<li>na 15 dni za 38 zł,</li>
				<li>na 30 dni za 48 zł,</li>
				<li>na 90 dni za 95 zł,</li>
				<li>na 180 dni za 135 zł,</li>
				<li>na 365 dni za 195 zł.</li>
			</ul>
		</div>

</div><div id="footer" class="footer">&copy; 2010-2020 Matemaks Michał Budzyński | <a href="#top">Na górę strony</a> | <a href="./kontakt.html">Kontakt</a> | <a href="./regulamin.html">Regulamin</a> | <a href="./polityka-prywatnosci.html">Polityka prywatności</a> | <a href="./cennik.html">Cennik</a> | <a href="./index.html">Strona główna</a></div></div><script type="text/x-mathjax-config"> 						
				MathJax.Hub.Config({
					showMathMenu: false,
					showMathMenuMSIE: false,
					messageStyle: "none",
					preRemoveClass: "MathJax_Preview",
					"HTML-CSS": {mtextFontInherit: true},
					jax: ["input/TeX","input/MathML","output/HTML-CSS"],
					extensions: ["tex2jax.js", "mml2jax.js"],
					TeX: {extensions: ["AMSmath.js","AMSsymbols.js"]},
					tex2jax: {
						ignoreClass: "no-mathjax"
					}
				});	

				MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
					MathJax.InputJax.TeX.prefilterHooks.Add(function (data) {							
						if (!data.display) {data.math = "\\displaystyle{"+data.math+" }"};
					});
				});	
  
			</script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js"></script><style>
				.MathJax_Preview{color: #888;text-align:center;}	
				.math_left .MathJax_Display {text-align:left !important;}
			</style><div id="pasek_logowania" class="pasek_logowania"></div></body></html>