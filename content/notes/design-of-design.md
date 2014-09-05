---
title: The Design of Design
tags: [notes, design]
---

[http://www.amazon.com/The-Design-Essays-Computer-Scientist/dp/0201362988/ref=sr_1_1?ie=UTF8&qid=1334238845&sr=8-1](http://www.amazon.com/The-Design-Essays-Computer-Scientist/dp/0201362988/ref=sr_1_1?ie=UTF8&qid=1334238845&sr=8-1)

### Collaboration

Modern design is now done mostly by teams. Most great works were the product of one mind, but two can be a magic number. Complexity and market/time forces caused the shift to teams. But it costs: the partitioning of work, learning cost, and change control are all expensive costs to team design. Conceptual integrity often suffers as well. Design teams where the interface is tightly controlled by one mind, with good taste, is typically best.

### Collaboration Benefits

Determining needs and objectives are great team exercises. Concept exploration and brainstorming. Competition as an alternative to exploration and brainstorming. Design reviews are also good for teams and get a variety of unique points of view. Design reviews are best when they’re multidisciplinary (programmers, db guys, success managers, etc). Use graphical or physical models when reviewing.

### When Collaboration Doesn’t Work

The design process itself is usually best done solo. Otherwise, trying to synchronize all the design considerations and decisions bogs it down and design-by-committee becomes easily apparent. BUT, two-person teams can be magical. Think plumber + helper, husband + wife. The very need to articulate ideas - to state why as well as what - can cause us to perceive our own fallacies and blind spots. Design tools don’t generally help much, because real design always explodes into countless details.

### Telecollaboration

Distributed development of a unified product is work. More work than co-located. To make it work, face-to-face time is crucial. Use Google Hangouts and video chat. A system for resolving change conflicts and differences of opinion is required.

### Rationalism vs. Empiricism

Rational design is where a perfect design is in someone’s head and just needs to come out. This rarely works. Most design is via an iterative, try and see (empirical) process. So the loop of verifying design against goals becomes a common feature.

### User Models - Better Wrong Than Vague

Be explicit with user and user models. The more particular they are, the more occasion they offer for detailed thinking. In a team environment, it’s especially important to be explicit with these models and assumptions. Even for the design of a shovel, it’s important to be explicit on who’s using it and why. If the facts aren’t readily available, guess! An articulated guess beats an unspoken assumption. It’s also easier to criticize something concrete. Also helps to catalog the assumptions and chart which ones matter - some might be critical and need further confirmation.

### Budgeting Resources

Name the scarce resources explicitly and track them as design progresses. This can be things like: page load speed, page size, lines of code, system dependencies, etc. Once you’ve enumerated objectives and constraints, identify explicitly the budgeted resources.

### Constraints are Friends

When you spec something to be designed, describe what properties are needed, not how they’re to be achieved. The hardest part of designing is deciding exactly what to design.

### Aesthetics

Style is the dress of thought. An architecture that is straightforward to use is often called clean. A good architecture is consistent. Orthogonality: don’t link what is independent. Propriety: don’t introduce what is immaterial. Generality: don’t restrict what is inherent (leave space for future development). To achieve good style: study others’ designs and work in their style; make conscious judgements and write opinions about what you like; practice; revise and look for inconsistencies in your style.

### Exemplars of Design

He who seeks to make designs that really work is most apt to come up with new designs of enduring value, as a by-product, as opposed to seeking novel designs.

### How Expert Designers Go Wrong

Success is dangerous for a professional designer. Study failure examples more carefully than you study successes.

### The Divorce of Design

Designers nowadays are more and more removed from their users. In the old days, the Wright bros. flew the airplane they made; Henry Ford drove the car he made. The tech and specialization these days puts designers farther away from the use and end result. Miscommunication abounds.

### Remedies for Design Divorce

Prototype and test. Even just a little is better than none. Close interaction with users and incremental development and delivery. Concurrent engineering: pull devs and designers together and get each involved in each others’ processes. Educate your designers in the real world consequences of their design. The gut instincts they’ll get from this are hard to acquire but very rewarding.

### Design Insights

Design isn’t just to satisfy requirements, but also to uncover them. Good design work elicits them.

### Great Designers

Product processes stifle great designs. Use only the bare minimum to prevent total chaos. Hold off on process long enough to permit great design to occur. Great designs don’t come from great processes. Product process should identify things of material importance and constrain those and only those, as well as have easy and swift exception mechanism and realize that all rules can be broken. Go for conceptual integrity and entrust a chief designer for a product.

### Where Do Great Designers Come From?

The team paradigm is here to stay. Bring back free-form, subjective criticism a la architecture or med schools. Recruit for design brilliance. Look at portfolios of the design work itself. Deliberately assess what makes creativity and innovation happen. Plan formal education experiences: bootcamps, classes, even sabbaticals and continued college. Plan a varied set of work experiences: put designers in various jobs internally and externally and get them close to the battlefront doing a variety of things. Protect them from distraction. Protect them from managers and managing. Study exemplars and precedents and assume the designer was competent.