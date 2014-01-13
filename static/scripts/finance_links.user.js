// ==UserScript==
// @name           	Finance Links
// @include       	http://finance.google.com/*
// @include 		http://caps.fool.com/*
// @include 		http://investing.schwab.com/*
// @include 		http://schwab.wallst.com/*
// @include 		http://thestreet.com/*
// @include     http://moneycentral.msn.com/*
// ==/UserScript==
(function(){

	// div that links to various sites will go in
	var div = document.createElement("DIV");
	div.style.padding = "10px";
	div.style.border = "2px solid #000";
	div.style.background = "#ff9";
	div.style.position = "absolute";
  	div.style.textAlign = "center";
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
	var yahooUrl = "http://messages.finance.yahoo.com/mb/";
	var msnUrl = "http://moneycentral.msn.com/investor/invsub/results/compare.asp?Page=TenYearSummary&Symbol="
	var stochUrl = "http://finance.yahoo.com/echarts?s=$1#chart5:symbol=$1;range=3m;indicator=volume+stochasticslow+macd;charttype=line;crosshair=on;ohlcvalues=0;logscale=off;source=undefined"
	var businessWeekUrl = "http://investing.businessweek.com/research/stocks/charts/charts.asp?symbol="

	function byClass(tag, class)
	{
		var arr = document.getElementsByTagName(tag);
		for(var i = 0; i < arr.length; i++)
		{
			if(arr[i].className == class) return arr[i];
		}
	}
	
	function $$(tag, className)
	{
		var arr = document.getElementsByTagName(tag);
		var out = new Array();
		for(var i = 0; i < arr.length; i++)
		{
			if(arr[i].className == className) out.push(arr[i]);	
		}
		return out;
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
			
			arr = $$('td','pcol_symbol');
			for(var i = 0; i < arr.length; i++){
				var a = arr[i].getElementsByTagName('a')[0];
				var tick = a.innerHTML;
				if(tick == '') continue;
				if(tick == 'Symbol') continue;
				if(typeof(tick) == undefined) continue;
				var ch = document.createElement("A");
				ch.href = stochUrl.replace(/\$1/g, a.innerHTML);
				ch.innerHTML = 'chart';
				arr[i].appendChild(ch);
			}
				
			break;
		
		case "caps.fool.com":
			ticker = location.pathname.replace(/^.*ticker\/(\w+)\.aspx$/i, "$1");
	
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
			ticker = location.pathname.replace(/^.*\/(\w+)\.html$/i, "$1");
			break;
		case "moneycentral.msn.com":
		  ticker = location.href.replace(/^.*symbol=(us%3a)?(\w+)$/i, "$2");
		  break;
		case "investing.businessweek.com":
		  ticker = location.href.replace(/^.*symbol=(\w+)$/i, '$1')
	}
	
	if(ticker == "") return;

	googleUrl += ticker;
	capsUrl += ticker + ".aspx";
	schwabUrl += ticker;
	streetUrl += ticker + ".html";
	yahooUrl += ticker;
	msnUrl += ticker;
	stochUrl = stochUrl.replace(/\$1/g, ticker);
	businessWeekUrl += ticker;

	div.innerHTML = '<a href="' + googleUrl + '">GOOGLE</a> - ';
	div.innerHTML += '<a href="' + capsUrl + '">CAPS</a> - ';
	div.innerHTML += '<a href="' + streetUrl + '">STREET</a> - ';
	div.innerHTML += '<a href="' + yahooUrl + '">YAHOO</a><br />';
  div.innerHTML += '<a href="' + msnUrl + '">MSN</a> - ';
  div.innerHTML += '<a href="' + stochUrl + '">STOCH</a> - ';
  div.innerHTML += '<a href="' + businessWeekUrl + '">BWEEK</a>'
	document.body.appendChild(div);
	div.appendChild(close);
})();
