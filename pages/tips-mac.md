<p>I jumped ship from Windows to Mac, so I'm trying to keep track of the tips and tricks I learn as I go. I doubt there's anything groundbreaking here, but if you're a Mac newbie like I am, they might be of some use. <b>I'm on 10.5 Leopard, so they might be different if you have an older version</b>.</p>

<h3>Finder Tips</h3>
<h4>Full Path View in Finder</h4>
<img src="/images/finder-pathview.jpg" /><br />
<p>Open Terminal, and type:</p>
<code>defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES</code><br /><br />
You'll have to restart finder to get it to show:
<p><code>killall Finder</code></p>
<br />
<h3>Terminal Tips</h3>
<h4>Remove .svn dirs</h4>
<p><code>find . -name .svn -print0 | xargs -0 rm -rf</code></p>
<h4>Tell the Computer What to Say - <span style="color:red">Fun Factor of 10</span></h4>
<p><code>say "my monkey's butt is covered in crisco!"</code></p>
<p>My kids think this is hilarious, and I insult them via the Terminal almost daily</p>

<br />

<h3>Keyboard Tips</h3>
<p><code>Command + Tab</code>: cycle through apps you have open</p>
<p><code>Command + ` (tilde key)</code>: cycle through windows in the same app</p>

<p><code>Command + Shift + g</code>: go to a certain folder. Handy for Finder or other programs where you don't want to navigate through a bunch of folders to get where you wanna go.</p>
<p><code>Command + Shift + h</code>: go to the Home folder in Finder or the file browsing window.</p>

<p><code>Command + Space:</code> Open Spotlight, for quick searching and app launching.</p>

<br />

<h3>Speakable Items</h3>
<p>I'm not quite sure if I had to do something special to get this turned on, but if you select a chunk of text and hit <code>Command + F1</code> the computer will read that text to you. I often crank the volume up and have the computer read a web page to me while I fiddle around the house.