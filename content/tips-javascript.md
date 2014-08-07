---
date: 2008-11-04 12:51:11.620632
title: 
tags:
---
<p>Neat trick for <code>for</code> loops that sets the iterated variable for you:</p>
<pre class="code">
for (var i = 0, o; o = all[i]; i++) {
  if(o.href === "bleh")...
}
</pre>

<p>Same as above, but speed up large loops by not getting the length attribute every time:</p>
<pre class="code">
for(var i = 0, len = arr.length; obj = arr[i], i < len; i++){
    if(obj.href === 'bleh')...
}
</pre>

<p>Namespacing and singleton:
<pre class="code">
// create a namespace
if(typeof(Yourmom) == 'undefined') Yourmom = {};

// now your singletons can be namespaced
Yourmom.bleh = {
  init: function(){
    // do some stuff
  }
};
</pre></p>

<p>Equality: if you really wanna check that 2 things are equal, both in value and in type, use the "threequal". <a href="http://www.youtube.com/watch?v=hQVTIJBZook&eurl=http%3A%2F%2Fgoogle-code-updates.blogspot.com%2F2009%2F03%2Fdoug-crockford-javascript-good-parts.html&feature=player_embedded">Check out Douglas Crockford's "Javascript: The Good Parts"</a> for more.</p>
<pre class="code">
var a = "something";
var b = "something"
if(a === b) // a & b are equal in value and type
</pre>

<p>Add load event gracefully:</p>
<pre class="code">
Yourmom.addLoadEvent = function(f) {
  var old = window.onload
  if (typeof old != 'function') window.onload = f
  else { window.onload = function() { old(); f() }}
}

Yourmom.addLoadEvent(Yourmom.bleh.init)
</pre>

