// Kalkulator wynagrodzeń v 1.01 
// Dominik Kolasiński

var wynNetto;
var kwotaA;

// Oblicza wynagrodzenie netto
function suma()
{
	var a = document.getElementById("a").value;
	var podatek = 0;
							
	if (a == "")
	{
		document.getElementById("wynik").innerHTML = "Proszę uzupełnić wszystkie pola.";
	}
	else
	{
		a = parseFloat(a);

		var emery = a * 0.0976;
		var rent = a * 0.015;
		var chorob = a * 0.0245;
		var suma1 = emery + rent + chorob;
		var suma2 = a - suma1;
		var zdro = suma2 * 0.09;
								
		if(a > 3010)
		{
			podatek = a * 0.12;
			wynNetto = a - emery - rent - chorob - zdro - podatek;
		}
		else
		{
			podatek;
			wynNetto = a - emery - rent - chorob - zdro;
		}

		document.getElementById("wynik").innerHTML = "Wynagrodzenie brutt: " + a + "<br>" +
		"Składka emerytalna (9,76%): " + emery.toFixed(2) + "<br>" +
		"Składka rentowa (1,50%): " + rent + "<br>" +
		"Składka chorobowa (2.45%): " + chorob + "<br>" +
		"Składki ZUS razem: " + suma1.toFixed(2) + "<br><br>" +
		"Podstawa wymiaru składki zdrowotnej (od tej kwoty oblicza się składkę): " + suma2 + "<br>" +
		"Składka na ubezpiecznie zdrowotne (9%): " + zdro.toFixed(2) + "<br>" +
		"Podatek: " + podatek + "<br>" +
		"Wynagrodzenie netto: " + wynNetto.toFixed(2);
	}
}
	
	
// wylicza kwoty dozwolone do dopracowania przy rencie emeryturze
function sredniaKrajowa()
{
	var bruttoSr = document.getElementById("bruttoSr").value;
	kwotaA = bruttoSr * 0.70;
	
	
	document.getElementById("wynik3").innerHTML = "Do renty możesz dorobić 70% kwoty średniej krajowej brutto" + '<br>' +
							"kwota jaką moższe dorobić to: " + kwotaA + "zł";
}


function przekroczenie()
{
	var wynagrodzenie = wynNetto;
	var suma2 = wynagrodzenie - kwotaA;
	
	if(wynagrodzenie <= kwotaA)
	{
		document.getElementById("wynik2").innerHTML = "Twoje wynagrodzenie mieści się w limicie";
	}
	else
	{
		document.getElementById("wynik2").innerHTML = "Limit przekroczony o: " + suma2.toFixed(2) + "zł";
	}
}

// wylicza kwoty dozwolone do dopracowania przy rencie emeryturze