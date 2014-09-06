---
title: Joel Spolsky - Smart & Gets Things Done
tags: [notes, spolsky, programming]
---

[http://www.amazon.com/Smart-Gets-Things-Done-Technical/dp/1590598385/ref=sr_1_1?ie=UTF8&qid=1409878239&sr=8-1&keywords=spolsky+smart](http://www.amazon.com/Smart-Gets-Things-Done-Technical/dp/1590598385/ref=sr_1_1?ie=UTF8&qid=1409878239&sr=8-1&keywords=spolsky+smart)

## Ch 1: Hitting the High Notes

The formula:

**Best Working Conditions &rarr; Best Programmers &rarr; Best Software &rarr; Profit!**

Is there really so much variation between programmers? Why not prefer low-cost programmers?

### Cost

Because duplication of software means you can spread the cost of a programmer over all the sales. **Design adds value faster than it adds cost**. Skimp on programmers, and the software will be crappy - and you really won't save that much. It's worth hiring Brad Pitt, even though he's 20 mil, because he *brings it* and that salary can be divided by the millions of tickets.

### Productivity

 [Stanley Eisenstat's been studying it](http://www.joelonsoftware.com/articles/HighNotes.html) for several years. There's a 5:1 - 10:1 difference in programmers. To top it off, 5 mediocre programmers are *worse* than 1 great because of the communication overhead.

Great programmers can hit high notes that others just can't hit, a la Mozart vs Salieri, Apple vs Creative, etc. You can't afford "good enough."


## Ch 2: Finding Great Developers

You can sift through 1000's of resumes and not find one. Why? *They're not on the market*. They get gigs via referrals etc. If they *are* on the market, it ain't for long. Therefore, the resume/recruiter pile, is generally average to shitty programmers.

### Go To The Mountain

Hang where great programmers hang: conferences, hot cities, orgs, open source, websites.

### Internships

If chosen well (be very selective), and done right, internships can blossom (2 year horizon usually) into a great hire.

### Build A Community

Local tech groups, outreach, drink-ups, etc. Hard, and you can't half-step it, but can be very rewarding.

### Employee Referrals

Generally a bad source of hires:

* Dear friends who are weak programmers
* People don't want friends getting rejected by the company
* Referral bonus especially bad. Employees drag up everybody they know, coach them, etc.


## Ch 3: A Field Guide To Developers

### Private offices

See Peopleware [[Amazon]](http://www.amazon.com/Peopleware-Productive-Projects-Teams-Edition/dp/0321934113/ref=sr_1_1?ie=UTF8&qid=1409879935&sr=8-1&keywords=peopleware) [[my notes]](/notes/peopleware). Programmers do best in quiet, uninterrupted space.

### Physical Space

Is your setup ratty and poorly lit? Crappy chairs? Shitty hardware?

### Social Life

Are your programmers hotshots or just typists. Are they treated well and heard? Are the bosses former programmers? Are jerks tolerated?

#### Autonomy

If you're gonna hire the best programmers, why micromanage? Managers are typically pretty far from the problem at hand and not very qualified to make decisions. Treat programmers like experts.

#### Politics

Do personal considerations outweigh technical merits?

### What Am I Working On/For?

Is it interesting? Can they choose? Use cool new tech unnecessarily on pet projects. Is the company interesting to aunt Thelma? Do they make bombs out of baby seals? Money's not usually that big of a carrot. Purpose and a great scene are far more persuasive to great programmers.

## Ch 4: Sorting Resumes

Resumes are a phenomenally weak way to gauge a programmer. Most of the time, they give you *negative* clues to help you weed them out.

1. Be selective about where you advertise, to limit the amount of noise in the resume pile
2. Use them only to screen *out* candidates. Never hire on resume.
3. Sort them using some objective method. Call the best ones first.

### Criteria For Sorting

#### Passion

* Computer experience going back to a very early age
* Extra-curricular: open source, side projects
* They get fired up talking about some aspect of programming.
* Langs they like or use. Ruby back in the day, functional stuff now, Erlang, OCaml, etc.

#### Pickiness

Did they research you? Is the cover letter specific to your company?

#### English

It's more than just typos (although those are indicative of a generally sloppy person). Good English means ability to talk concepts, explain to layfolks, write specs, etc., *as well as communicate in code*.

#### Brains

Math camp? Chess club? Honors societies? Open source luminary?

#### Selectivity

Have they been through some selective process? Ivy League, military, etc. Did *someone, somewhere* decide they were smart enough to get into some sort of club?

#### Hardcore

C, Assembler, OCaml, Emacs - tech that's just harder than Java / Eclipse, VBScript etc.

#### Diversity

Not so much race or sex. More like, were they an electrical engineer? LISP hacker from Estonia?

### If Resumes Suck, Can We Add More Hoops?

You could, but you'd be likely to scare away good programmers as well as weak ones.

### Don't Look For Experience With Particular Tech

Keywords are useless. p 80:

> The reason recruiters do this is because it's easy, it can be computerized, and it's the only ay they know how to judge developers. *For almost all software developent positions, though, it is the worst possible way to hire*

You're looking for *aptitude*, more than 100% depth of certain tech. **Exception**: architect or lead dev need solid experience in the tech you're using, to get organization right and handle hard issues that may come up.

## Ch 5: The Phone Screen

The good thing about 'em is it's hard to form snap visual judgements on people. Three parts:

* Career history and personal info. Drill into:

	* **Tech**: if they say the worked on/with something, dig in. Sole person? Team member? Drill into the tech/lang if at all possible and figure out if they're bluffing.

	* **Politics**: what's the backstory to some of the work? If they "drove" something, dig into that. Who's idea? Who convinced whom? Challenges?

* Technical problem, ie "how do you do a data structure X, or block of code to do Y?"

	* How might you design online Monopoly?
	* Good data structure for a photo editor?
	* Code for elevator panel in high rise?
	* Implement rendering engine of a browser?

Ideal question would be something the interviewee is very familiar with, but never implemented themsleves. You just want a conversation about the meat and potatoes of code, talk tradeoffs, performance. Smart people can generally tell when they're talking to other smart people.

* Let them interview you. If they don't have a clue what you do, watch out. They should be very curious.

## Ch 6: Guerilla Guide to Interviewing

> p. 93: Everybody gives lip service to the idea that people are the most important part of a software project, but nobody is quite sure what you can *do* about it. The very first thing you have to do is to *hire* the right programmers, and that means you have to be able to figure out who the right programmers *are*.

Try to have at least 6 folks interview. If at least 2 people say no, *No Hire*. One's a tad aggressive, although a senior person should probably be able to halt it.

Don't interview a bunch at one time. It's not fair to them, and you need to consider them separately.

You're gonna run the spectrum of totally unqualified to awesome. *The trick is telling the difference between the stars and the maybes*, because you don't want to hire the maybes. EVER.

At the end, be prepared to make a sharp decision about them: Hire or No Hire. There is no other answer. *Never say "hire, but not for my team". That means No Hire. A candidate that would be brilliant for one particular task, but not overall is No Hire.

> p. 95 In software, things change so often and so rapidly that you need peopl ewho can succeed at just about any programming task that you throw at them.

Never say "maybe, I can't tell". That's No Hire. On the fence? No Hire. Mechanically translate all the waffling into "no" and you'll be alright.

Why so hard-nosed? It's much, much better to reject a good candidate than hire a bad one. Bad employees cost tons of money, time and frustration with bugs, demoralization, etc.

> p. 96 But once you're actually interviewing someone, pretend that you've got 900 more people lined up outside the door. Don't lower your standards no matter how hard it seems to find those great candidates.

*Smart People, who don't Get Things Done* tend to drone on about academic things, or show up with a cup of coffee and start a long convo about BS like "Java introspection vs COM libs".

> p 98: *People who Get Things Done but aren't Smart* will tend to do stupid things, seemingly without thinking about them, and somebody else will have to come clean up their mess later. This makes them net *liabilities* to the company because no only do they not contribute, but they soak up other people's time. They are the kind of people who decide to refactor your core algorithms to use the Visitor pattern, which they just read about the night before, and completely misunderstood...

How to detect Smart? The first good sign is not having to explain things over and over. Create a situation where they can show you their smarts. Don't be a blowhard.

Don't be a Quiz Show Interviewer and equate a person with tons of facts for Smart. Trivia is not gonna get you what you want.

Give them open-ended questions and problems.

Before you interview: don't form an opinion of them beforehand. Don't ask around, don't let recruiters fluff them up, etc.

Typical interview flow:

1. Introduction: put them at ease, small talk, lay out the general flow of the interview.
2. Recent work: open-ended, let them talk. Drill in occasionally. Look for passion. Look for them to explain things well (sometimes in Grandma terms). If they can't, GONG - don't hire them because they can't get others to understand their ideas. If it was a team project, look for leadership signs. Ask for examples of GSD where they overcame something.
3. Whiteboard coding: explain that it sucks on whiteboard, but it's just for kicks. They should pass these, you're looking for *speed*.
	1. Func to determine starts with [A-Z]
	2. Func to get area of a circle given radius
	3. Func to add all values in an array
	4. Harder recursion or pointer question. This time you're looking for surprises, bugs, thoroughness, decent understanding of tougher programming ideas.
	5. Are they satisfied with that answer?
	6. Questions? Time to sell the company etc.

### Bad Questions

Obviously race, creed, kids, etc. Avoid brain teasers.

The optimal time to make a Hire/No Hire call is ~15 mins after interview. The more time passes, the more you forget. If you're having a hard time deciding, No Hire.

### Treat Them Like Samurai

> p. 118 Remember: most normal recruiting in our society is structured as if the company has something precious (a job) that the individual wants. But when you're recruiting top developers, the situation is completely inverted. Pay very, very close attention to the details of the entire recruiting, interviewing, and hiring process to make sure there are no accidental parts of the procedure that send any message other than "We're not worthy!" to your star candidates.

If you have to say no to someone, do it quickly and respectfully.

> p. 120 Don't give up. Great people are much, much more valuable than average people. In programming they are three to ten times as productive, while only costing 20% or 30% more. And they hit high notes that nobody else can hit.

## Ch 7: Fixing Crappy Teams

Like a mouthful of bad teeth, usually a painful, costly trip to the dentist is all that will cure it.

### The Wrong Way To Do It: Measurement and Incentives

It's trivial, as programmers, to game the measurement system - whatever it is.

> p. 125 We could go on and on with this dialog for a long time. Managers seem to believe that there is *some* measurement that can be used to gauge productivity, you just have to sort of tweak the rules to avoid gaming the measurement.

People are not chemistry experiments. They're self-aware and can get the measurement to look the way you want it to look.

> p. 125 He shows that whenever you institute a new metric in a knowledge organization, that is, any organization with workers who need to do something more complicated than screwing caps onto toothpaste tubes, at first you see genuine improvement of the thing you want to measure. The programmers do, actually, try to write more code every day. But very soon, what you see is that the workers figure out shortcuts, so the metric goes through the roof, while the actual performance actually declines, because programmers start spending more time optimization for metrics, which comes at the cost of the quality of work that they do.

> More importantly, this is not just because you haven't figured out the perfect metric. *It's the very nature of knowledge work.*

### Different Types of Contributors

Some coders are brilliant debuggers. Some seem dreamy and unproductive, but then come up with really big ideas for the team or org. Some single-handedly keep a team happy and productive.

You'll need to triage a team into:

1. Great programmer
2. Needs specific improvement
3. Hopeless

Firing underperformers doesn't always hurt morale. Poor performers aren't just making *inadequate* contributions, they're making *negative* contributions. They're taking time away from good performers.

### Management Methods

#### Command and Control

Military style. Fear based. Nobody likes it, and management *really* doesn't have the resources to micromanage it effectively. There are too many decisions and too many programmers coding to keep firm tabs on it all. Hit-and-run micromanaging becomes the norm: jack someone up for a day or two, then move on to some other hapless fool. Feels like you're managing, but nothing really got accomplished.

#### Econ 101

Just throw money at it. Bonuses for no bugs, stuff delivered ahead or on time. Quick path to programmers gaming the system. It's also an abdication of management.

#### Identity Management

Get people to identify with the goals you're trying to achieve. Takes a lot of social skills and information sharing. *Eat together*. Give people the info they need to steer the company in the right direction.

## The Joel Test

See [http://www.joelonsoftware.com/articles/fog0000000043.html](http://www.joelonsoftware.com/articles/fog0000000043.html) for more...

> p. 158 What they realized was that the project managers has been so insistent on keeping to the "schedule" that programmers simply rushed through the coding process, writing extremely bad code, because the bug fixing phase was not a part of the formal schedule. There was no attempt to keep the bug count down. Quite the opposite. The story goes that one programmer, who had to write the code to calculate the height of a line of text, simply wrote `return 12;` and waited for the bug report to come in. The schedule was merely a checklist of features waiting to be turned into bugs. In the post-mortem, this was referred to as "infinite defects methodology."

