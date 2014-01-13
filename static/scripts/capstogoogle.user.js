// ==UserScript==
// @name           	Finance Links
// @include       	http://finance.google.com/*
// @include 		http://caps.fool.com/*
// @include 		http://investing.schwab.com/*
// @include 		http://schwab.wallst.com/*
// @include 		http://thestreet.com/*
// ==/UserScript==
(function(){

	// div that links to various sites will go in
	var div = document.createElement("DIV");
	div.style.padding = "10px";
	div.style.border = "2px solid #000";
	div.style.background = "#ff9";
	div.style.position = "absolute";
	div.style.top = "27px";
	div.style.right = "2px";
	div.style.zIndex = 100;
	
	var close = document.createElement("DIV");
	close.style.textAlign = "center";
	close.style.fontSize = "11px";
	close.style.marginTop = "5px";
	close.innerHTML = '<a href="#" onclick="this.parentNode.parentNode.style.display=\'none\'">[close]</a>';
	
	

	// we'll get this depending on the hostname
	var ticker = "";
	// url formats for the different websites - add as needed
	var googleUrl = "http://finance.google.com/finance?q=";
	var capsUrl = "http://caps.fool.com/ticker/";
	var schwabUrl = "https://www.schwab.com/service/csymbolentry?QuotesSecurityName=";
	var streetUrl = "http://www.thestreet.com/quote/";

	function byClass(tag, class)
	{
		var arr = document.getElementsByTagName(tag);
		for(var i = 0; i < arr.length; i++)
		{
			if(arr[i].className == class) return arr[i];
		}
	}

	function byId(elementId)
	{
		return document.getElementById(elementId);
	}
	
	switch(location.hostname.toLowerCase())
	{
		case "finance.google.com":
			var arr = document.getElementsByTagName("A");
			var url = "";
			for(var i = 0; i < arr.length; i++){
				if(arr[i].href.indexOf("addticker") > 0){
					ticker = arr[i].href.replace(/.*addticker=(\w+).*$/,"$1")
				}
			}
			break;
		
		case "caps.fool.com":
			ticker = location.pathname.replace(/^.*\/(\w+)\.aspx$/i, "$1");
	
			// get average p/e
			var financials = byId("financials");
			if(financials)
			{
				var tbl = financials.getElementsByTagName("TABLE")[0];
				var trs = tbl.getElementsByTagName("TR");
				var peAvg = trs[2].childNodes[3].innerHTML;
				var peHigh = trs[3].childNodes[3].innerHTML;
				var peLow = trs[4].childNodes[3].innerHTML;
				if(parseFloat(peHigh))
				{
					var avg = (parseFloat(peHigh) + parseFloat(peLow))/2;
					// if green if average p/e is higher than current
					var backColor = (avg > parseFloat(peAvg)) ? "#3c3" : "red";
					var div2 = document.createElement("div");
					div2.innerHTML = "AVG: " + avg;
					div2.style.position = "absolute";
					div2.style.top = "102px";
					div2.style.left = "600px";
					div2.style.padding = "8px";
					div2.style.backgroundColor = backColor;
					document.body.appendChild(div2);
				}
			}
			break;
			
		case "www.schwab.wallst.com":
			ticker = byClass("SPAN", "header2").innerHTML.split(":")[0];
			break;
			
		case "www.thestreet.com":
			ticker = ticker = location.pathname.replace(/^.*\/(\w+)\.html$/i, "$1");
			break;
	}
	
	if(ticker == "") return;

	googleUrl += ticker;
	capsUrl += ticker + ".aspx";
	schwabUrl += ticker;
	streetUrl += ticker + ".html";

	div.innerHTML = '<a href="' + googleUrl + '">GOOGLE</a> - ';
	div.innerHTML += '<a href="' + capsUrl + '">CAPS</a> - ';
	// not really used: div.innerHTML += '<a href="' + schwabUrl + '">SCHWAB</a>';
	div.innerHTML += '<a href="' + streetUrl + '">STREET</a>';
	document.body.appendChild(div);
	div.appendChild(close);
})();
