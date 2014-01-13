// ==UserScript==
// @name           Basecamp Time Helpers
// @namespace      Slipangle
// @description    Tallies up time for a project, shows total per day on time view
// @include        http://*.projectpath.com/*
// ==/UserScript==

// todos: 
// call function from link in greasemonkey

(function(){
	unsafeWindow.startTimer = function(link)
	{
		alert('start timer from ' + link.id);
	}
	
	function byClass(tag, class){
		var arr = document.getElementsByTagName(tag);
		var output = [];
		for(var i = 0; i < arr.length; i++){
			var classes = arr[i].className.split(' ');
			for(var j = 0; j < classes.length; j++){
				if(classes[j] == class) output.push(arr[i]);
			}
		}
		return output;
	}

	function byId(elementId){
		return document.getElementById(elementId);
	}
	
	function $$(tag, type, regex){
        var output = [];
        var arr = document.getElementsByTagName(tag);
        for (var i=0; i < arr.length; i++) {
            switch(type){
                case 'id':
                    if(arr[i].id.match(regex)) output.push(arr[i]);
                    break;
                case 'class':
                    if(arr[i].className.match(regex)) output.push(arr[i]);
                    break;
            }
        }
        return output;
    }
    
    if(location.href.match(/^http:\/\/\w+\.projectpath\.com\/projects\/\d+\/time.*$/i))
    {
        var entries = $$('tr','id',/entry_\d+/);
        var thisDate = '';
        var thisTime = 0;
        for (var i=0; i < entries.length; i++) {
            var date = entries[i].childNodes[1].childNodes[0].innerHTML;
            var time = entries[i].childNodes[5].innerHTML;

            if(isNaN(time)) continue;
            
            if(thisDate == '')
            {
                thisDate = date;
                thisTime += parseFloat(time);
                continue;
            }
            else if(thisDate == date)
            {
                thisTime += parseFloat(time);
            }
            else {
                entries[i-1].childNodes[1].innerHTML += ' <b>TOTAL: ' + thisTime + '</b>';
                thisTime = 0 + parseFloat(time);
                thisDate = date;
            }
        };
    }
	
	
	if(location.href.indexOf('todos') > 0)
	{
		var items = $$('div', 'id', /^item_\d+$/);
		for(var i = 0; i < items.length; i++)
		{
			var itemId = items[i].id.replace(/^item_(\d+)$/, "$1");
			var content = byId('item_' + itemId + '_content');
			content.innerHTML += '<a href="#" onclick="startTimer(this); return false">start</a>';
		}
		
		var div = document.createElement("DIV");
		div.style.padding = "10px";
		div.style.border = "1px solid #aaa";
		div.style.background = "#ff9";
		div.style.width = "235px";
		div.style.textAlign = "center";
		div.style.position = "absolute";
		div.style.top = "157px";
		div.style.left = "575px";
		div.style.zIndex = 100;
		
		var close = document.createElement("DIV");
		close.style.fontSize = "11px";
		close.style.marginTop = "5px";
		close.innerHTML = '<a href="#" onclick="this.parentNode.parentNode.style.display=\'none\'">[close]</a>';
	
		var todos = byClass('span', 'content');
		var hours = 0;
		for(var i = 0; i < todos.length; i++){
			// find all todos with [2.5] somewhere
			var pattern = /^.*\[([0-9\.]+)\].*$/;
			var html = todos[i].innerHTML;
			if(html.match(pattern)){
				var est = html.replace(pattern, '$1');
				if(isNaN(parseFloat(est))){
					alert('isNaN: ' + est);
					break;
				}
				hours += parseFloat(est);
			}
		}
		
		if(hours == 0) return;
		
		// calc hours to days, and add to div
		var hoursPerDay = 6;
		var daysPerMonth = 20;
		var rounding = 10;
		var days = hours/hoursPerDay;
		var roundedDays = Math.round(days*rounding)/rounding;
		var months = roundedDays / daysPerMonth;
		var roundedMonths = Math.round(months * rounding)/rounding;
		var rate = 100.00;
		var cost = hours * rate;
		
		div.innerHTML = hours + " hours<br />";
		div.innerHTML += roundedDays + " days, " + roundedMonths + " months<br />";
		div.innerHTML += "Cost: $" + cost;
		
		document.body.appendChild(div);
		div.appendChild(close);
	}
})();
