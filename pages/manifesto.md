 <p>I'm seeing most of these ideas play out in the frameworks that are popping up these days, like Django and Rails, but this is a list I've been keeping for awhile, just to keep my own bearings straight on what a decent web app should be. Although the tech world has a terrible case of amnesia and ADD, most of these things should hold up over time. </p> 
 
 <h4>Dev Cycle - No Matter What Tech</h4> <p> Start small, work to big, test often. The process should be idea, paper/whiteboard, html mockup, working mockup, <i>then</i> graphic design and final tweaks. </p> 
 
 <h4>A Good Framework is Hard to Find</h4> 
 
 <p> <b>The URL is an interface too</b>. Why it took so long for the world to catch on to <code>mod_rewrite</code> is beyond me. URL's should be as meaningful as they can be, without necessarily writing a novel with them. Something like <code>/products/left-handed-screwdrivers</code> is fine. Something like <code>/products/awesome-screwdrivers/1234-screwdrivers-are-great/1234/driver</code> isn't. There's too much unnecessary crap in there. File extensions should die and go straight to hell. URLs should also be used to request data in different formats, ie <code>/books/new.json</code>. This way, as different formats come along, you can roll with it. Didn't I just say extensions should die? HTML is implied, so it's not necessary. JSON and XML are a different story - they're different content types and we need to be explicit about that. <code>ASPX</code> and <code>PHP</code> are meaningful only to the developer and their OS - they have no place in a URL. <b>Stay outta Malibu extensions!</b> </p> 
 
 <p>Now that URL rewriting is becoming more common, the trailing slash becomes a question. Which is better?<br /><br /> <code>http://www.domain.com/blog/smelly-feet</code><br /> or<br /> <code>http://www.domain.com/blog/smelly-feet/</code> 
 
 <p>The trailing slash, besides being one extra character that doesn't need to be there, indicates that this is a folder, with things below it, rather than a resource, or endpoint. <code>/blog/</code> has things underneath it, and should present an index if nothing specific has been requested, but <code>/blog/smelly-feet</code> is the end of the line. No slash, and if requested that way, should be 301-ed to the no-slash version. Likewise, requests to <code>/blog</code> should be 301-ed to <code>/blog/</code>.</p> 
 
 <p>Third-level domains suck most of the time.</p> 
 
 <h4>Presentation and Testing</h4> 
 
 <p> The presentation layer should be as independent from the underlying code as possible, so that objects can be tested and manipulated independently. Straight HTML templates are all that's necessary, and no special monkeying with the elements should be done (ie: the <code>VIEWSTATE</code> crap in .NET). This layer needs to have some mechanism for handling errors - nothing fancy is required: an error code and message will suffice. </p>

<p>A short tangent about testing: I can't say I'm a huge proponent of <a href="http://en.wikipedia.org/wiki/Test-driven_development">TDD</a>, but if it forces your framework and code to be more modular and testable, that's the end goal right? That's flexible, solid code, and that's what we're all aiming for. If that's what TDD gives us, (and the jury's still out for me to some extent), then I'm all for it.</p>
 
 <h4>Objects and Databases</h4> 
 
 <p> Either the DB should reflect the object, or the object the DB. I don't care which (probably the db reflects the object), but I should only have to change the schema in one place, one time. Validation should be automatic according to the schema as well, and allow overriding a default validation or adding a custom one.</p> 
 
 <h4>Config</h4> 
 
 <p> You should be able to have different configs for different environments. Rails really gets this right. It'd be great if you could have exact parallel systems, dev, test, and production, but that's never gonna happen. You should also have control over URL routing, caching, and logging at this level. </p>