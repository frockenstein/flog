---
date: 2008-11-04 12:51:11.620632
title: 
tags:
---
<p>Since I'm new to Python, I'm using this as a place to jot down tips and neat ways to do things. I doubt anything here will be groundbreaking, but for a newbie, might be of some use. <b>I'm using Python 2.5 - I have no idea if this 
works for previous versions</b>.</p>

<h4>String Concatenation</h4>
<pre class="code">
# rather than this
string s = ""
for x in list:
  s += x

# do this
s = "".join(list)

# if generating bits sequentially, do this
slist = [some_function(x) for x in list]
s = "".join(slist)
</pre>

Formatting & Concatenation
<pre class="code">
# don't do this
html = "<html>" + head + body + footer + "</html>"

# do this
html = "<html>%s %s %s</html>" % (head, body, footer)

# or this using a dictionary
html = "<html>%(head)s %(body)s %(footer)s</html>" % vars()
</pre>

Finding a string
<pre class="code">
# nope
bleh = "hi there!"
if bleh.find("hi") > -1:
  # ...

# yep
if "hi" in bleh:
  ...
</pre>

<h4>Lists</h4>
Similar to the lambda statement:
<pre class="code">
numbers = [1,2,3,4,5]
squares = [number*number for number in numbers]
>>> [1,4,9,16,25] 
</pre>

Filtering:
<pre class="code">
numbers = [1,2,3,4,5]
under_4 = [number for number in numbers if number < 4]
>>> [1,2,3]
</pre>

Filter and Map:
<pre class="code">
numbers = [1,2,3,4,5]
square_under_4 = [number*number for number in numbers if number < 4]
>>> [1,4,9]
</pre>

Getting the index in a for loop
<pre class="code">
list = ['a','b','c','d']
for index, chr in enumerate(list):
  ...
</pre>

See if something's in a list
<pre class="code">
list = [1,2,3,4]
if 1 in list:
  print '%i is in the list' % 1
</pre>

Any and All over lists
<pre class="code">
numbers = [1,2,3,4,5]
if any(number < 4 for number in numbers):
  print 'less than 4: ' + number

if all(number < 10 for number in numbers):
  print 'great success!'
</pre>

<h4>Lambda</h4>
<pre class="code">
squares = map(lambda a: a*a, [1,2,3,4,5])
>>> [1, 4, 9, 16, 25]</pre>

<h4>Meta Stuff</h4>
What methods does <code>str</code> have?
<pre class="code">dir(str)</pre>

What's the <code>str.find()</code> method all about?
<pre class="code">
print getattr(str, 'find').__doc__
</pre>

<h4>Dictionaries</h4>
<pre class="code">
# can do this
d = { 'a': 1, 'b': 2, 'c': 3 }

# can also do this
d = dict(a=1, b=2, c=3)
</pre>

<h4>Truthiness</h4>
<pre class="code">
has_email = True
name = person.email if has_email else 'Anonymous'

# different way, kinda like C ternary statement (a = b ? c : d)
name = has_email and person.email or 'Anonymous'
</pre>

<h4>

<h4>Other Helpful Links</h4>
<ul>
<li><a href="http://www.python.org/doc/essays/list2str.html">GVR: Loop Optimization</a></li>
</ul>