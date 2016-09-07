---
title: Managing Programmers
tags: [notes, software, design, management]
description: My take  interesting bits of this presentation
author: Douglas Crockford
---

# [Managing Programmers](https://www.youtube.com/watch?v=NPlMcUxFOlY)

What to call them?

* Computer programmer
* Computer scientist
* Software Engineer
* Software Developer
* Coder
* Hacker

## Understanding Programmers

* They're difficult to manage because it's creative (musicians, artists, etc). It may be the **most** creative of creative arts: stuff comes into existence by typing it. And then people use this stuff. Not really true of writing, painting, sculpture, music.
* They're not like the other kids, and if you try to manage them like that, it'll fail
* In order to understand programmers better, read Dilbert or XKCD
* Programmers will cite XKCD the way Christians cite Bible verses

### Metrics

* "If you can't measure it, you can't manage it" is false. One of the problems with metrics is focusing on achieving a number rather than a complicated system, you can meet the numbers and destroy the operation or the software.

#### Ineffective Metrics

* Lines of code - often the best thing you can do is to delete code
* Introduction of bugs - punishing = bugs not reported
* Fixing of bugs

#### Effective Metrics

* Actual # of defects in the code
* Total remaining effort to completion
* We don't have a clue how to achieve those numbers so it's still fumbling in the dark.

## Programming Is Not Manufacturing

* Manufacturing says "we're gonna do the same thing over and over again" and measure the quality and efficiency, but in every software project we're doing it for the first time.
* 10x programmer - seems like it's true but we have no way to measure it. Suppose it's hypothetically true, are you gonna pay that person 10x as much? "Salaries are determined by the ability to negotiate salary" :)
* Someone who just goes to meetings and looks busy isn't even a 1x programmer. They're a negative.
* The "Tazmanian Devil" programmer looks good to managers because they're so busy and touch so many things, but they cause so much chaos they're a -10x programmer.
* It's very hard to tell the difference between the good and bad programmers.
* Programming is **discovery**, not manufacturing.
* Estimating is hard because the question is essentially "how long will it take you to find something?"
* No requirements doc survives contact with reality

## Processes

### Waterfall

* Requirements > Design > Implementation > Verifiction > Maintenance
* There are things that won't be learned until we get to implementation or maintenance that requirements needs to know, and it's not clear what the iteration factor is and how long it'll take. Assuming every phase knows what it needs to know is **crazy**.

### Agile

* One team doing all the stuff at the same time, in smaller increments
* Small leaps are easier, but overall visibility of where we're actually going is hard, and it's easy to take small steps off the cliff.
* Because of the lack of architectural foresight you get less and less done over time as the codebase gets gunkier.

### Directed Anarchy

* Give programmers very clear requirements, and authority and autonomy to accomplish it and get out of their way.
* Read the source code of your reports and check up on who's doing good code, who's doing bad code.
* Code should be highly readable - linters, style guides, etc.

## Hiring

* Code reading - candidate comes in and reads their code. How do they take criticism? Come in with a portfolio like an artist.

## The Five Natural Enemies of Programmers

### Enemy # 1 - Complexity

* Humans are bad at managing complexity. Much of programming is managing complexity, and that's really hard. Most of us aren't given training on how to do this.
* Knowledge and experience are the **only** things that work.
* Things that don't work: looking busy, having a good attitude, hard work, commitment, passion
* You want to have continuing education

### Enemy # 2 - Imperfection

* Computer programs must be perfect. Humans are bad at perfect, and the more complex systems get, the harder perfect gets. We don't even have a way to tell perfect if it was there.
* Software can change from an asset to a major liability, even with zero modifications. High traffic, etc can cause software to crash.
* The math-y way of doing proofs was tried but didn't work.
* Testing is the closest we can get, and it's good to the extent that we need to test well, but it's not all we need and there are problems we can't find that we need to be aware of.
* QA is often transferring responsibility for quality away from the programming teams. Bad idea. Much more efficient to not make the bugs in the first place - standards, automated tools, etc.
* Software entomology - when bugs happen, study them and do what can be done to make them not happen again.

### Enemy # 3 - Time

* Economics of software: our intuitions about how programs spend their time is usually wrong.
    * Register: very fast
    * Memory: damn fast
    * Storage: pretty damn fast
    * Network: slow
* Programmers often sweat the lower levels when in reality the most time is spent at the network layer. Most optimization time is wasted at the expense of bigger problems.
* Premature optimization is often the source of this wasted time, and the code is usually cruftier and has long-term costs. Check-ins claiming to improve perf need to come with measurements and the improvement has to be **significant**.
* Programmers spend most of their time debugging, not typing. Shaving keystrokes is a fool's errand.
* Decision making - easy to get stalled here. The only thing worse than making the wrong choice is getting suspending into making no choice.
* Scheduling - it's a process of discovery: "we don't know how long it's gonna take to sail to the New World". The quality of estimation goes way down as the unknowns go up.

### Enemy # 4 - Mismanagement

* Progammers hate it when forces cause them to make bad programs
* "What would you do if you won the lottery?" Many programmers say "write programs".
* Managers generally have a sense of urgency, but software will take __some time__ to make, and it will take that time. If you try to make it take less time it often takes more time.
* Most things you try to do to make development go faster, makes it go slower.
* Adding staff at the beginning is the only way that route works. Mid-stream or when a project is late, will make things slower.
* Require intermediate milestones
* Extending the workday is often a morale and productivity killer
* Panic mode, all-hands-on-deck will especially burn out programmers and cruft up the code. **Clearest sign that management is a failure**.
* Most of the above dysfunctions will end up with a gross codebase which will eventually mire you down.

* To avoid all this crap, you need:
    * Talented staff
    * Clear, stable requirements
    * Minimal distractions
    * Focus on quality
    * Sufficient time
    * Empathize with customers (do a tour in Support, etc.)

* If you do a big refactor or rewrite, **only** cover old territory. This way you know all the ins and outs and have done all the discovery. This can often get you a nice codebase and free you up for the future. Don't fall prey to [second system syndrome](https://en.wikipedia.org/wiki/Second-system_effect)
* Good programmer managers run interference. The company does not understand programmers and you have to not let it happen.

#### The Big Picture

* "We have these requirements and it has to be done in X time" etc. = programmers hearing "this is stupid but we're gonna do it." It's soul-destroying to programmers. Something like "we won't ship crap" would work better. If programmers tell you "it's not ready" you better believe them. They're as sick of it as you are and want it in the can and to move on, but don't wanna ship crap either.

#### Sabotage

* Bad stuff gets into the codebase, quality is poor, in some cases destroys a company
* Security exploits, only getting worse with open-source network coding
* Intentional, without malice
* Intentional, with malice: hack the company from the inside

### Enemy # 5 - Themselves

* Programmers are smarter than they look, but not as smart as they think they are
    * Manager's job is to help close that gap
* Informed ignorance: "what I know is adequate for deciding what's in front of me". Programmers will get very confident that they have enough info to solve a problem. Continuing education is the cure
* Cults and fads
* Teach them to be better people:
    * Lead by example
    * Manners: please, thank you, sorry
    * Argue correctly: keep things factual, logical...
    * Software is for the people

### Office

* Progammers are creatives, not office workers. Offices are hostile environments for programmers. They look like it - type at keyboards and stare at screens, but are not office workers.
* Flow: private offices, free of distraction. Any distration takes you out of it
* Communication: bullpens (typical of startups)
* Worst possible: cubicles. Only thing worse than cubes is open plans
* Ideal:
    * Large project rooms, filled with whiteboards
    * Lots of meeting room, various sizes, round tables
    * Classrooms
    * Library
    * Diner with booths and food

### Rigs

* Professionals should own their own machines
* Don't make bugs