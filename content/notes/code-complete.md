---
title: Code Complete
tags: [notes, software, design]
---

[http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_1?ie=UTF8&qid=1365715794&sr=8-1&keywords=code+complete](http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_1?ie=UTF8&qid=1365715794&sr=8-1&keywords=code+complete)

## Design

* 70-90% of the development effort on a typical project comes after it's initial release

* in high-quality software, there's a relationship between the conceptual integrity of the architecture and its low-level implementation. This is the point of construction guidelines for variable names, class names, formatting/commenting, etc.

## Architecture

* good architecture makes construction easy. architecture changes are expensive to make during construction or later

* accidental vs. essential difficulties - essential difficulty is problems with the
conception and modeling of the program - the essence of the program, ie. shuttle launch systems. it's hard to model the world and conceive very complex problems

# MANAGING COMPLEXITY IS THE MOST IMPORTANT ASPECT OF PROGRAMMING

## Reduce complexity by:
* keep functions short
* write in domain terms, not machine
* minimize essential complexity: as cut and dry as possible!
* design with ease of maintenance in mind
* loose coupling - fewer moving parts - stratified code layers - separation of concerns
* keep it lean - code is the enemy!
* use standard stuff - nothing exotic (code, libraries, 3rd party things, strange configurations, etc)

Heuristics (rules of thumb/common sense - apply to all problems solving):

* keep business rules out of other code
* hide difficult design and construction areas, to both minimize their impact and make 'em easier to change
* anticipating the change: start with the core and work your way out. the core won't likely change, and the others are things you may or may not have to deal with. if it's likely to change deal with it. if it's unlikely, but easy to deal with, anticipate it. if it's unlikely and hard, cross that bridge later.

## Loose Coupling

* a routine with fewer params is better, a class with fewer public methods is better

* advertise what's going on and who's talking to who - don't hide it

* flexibility: rather than a routine taking a business object, have it take just the vars it needs, so other things might be able to use it too.

* loose coupling - think of how trains connect: one standard thing, all use the same device

# CLASSES AND ROUTINES ARE TOOLS TO REDUCE COMPLEXITY. IF THEY'RE NOT DOING THAT, YOU'RE DOING IT WRONG.

* centralize: there should be One Right Place to make a change

* design for testing: chances are, if you can test it easily, it's written well

## Abstract Data Types

* if a list represents employees, think of it as employees and code as such
* aim for good cohesion as well as abstraction
* abstract class should adhere to the "is a" relationship
* containment: class members should be a "has a" relationship
	* strive for 7+/- members

* design for inheritance, or forbid it (sealed classes in C#)
* no more than 7+/- subclasses in a tree
* inheritance tends toward making things complex - bias against it
* if you must use inheritance, bias towards base classes rather than interfaces

## Member Functions and Data
* minimize the extent to which a class collaborates with other classes

## Classes (reasons to create)
* to reduce complexity
* isolate complexity - keep bugs centralized
* limit effects of changes
* hide global data
* make central points of control
* reuse, but avoid "gold plating" (everything but the kitchen sink classes)

## Routines
* create understandable abstraction: calculatePayments() vs. having to read the code
* functional cohesion: does only one thing
* function names should be long, but not crazy long
* function names should be clear: submitPayment() vs. handleData()
* if the code makes it hard to name a function, you need to refactor the code first
* describe the return value: car.currentColor()
* strong verb followed by an object

## Routine Params
* no more than 7 +/-
* don't return an input param, use a new one for output (pg. 177)
* code that "sets up" for a routine, or "takes down" after, is indicative of poor design

## Exceptions
* throw only for exceptional conditions
* don't use 'em to pass the buck - handle locally if possible
* don't throw 'em in constructors
* throw 'em at the right level of abstraction - don't throw a low-level exception when you can throw a custom, derived one
* no empty catch blocks
* centralized exception reporter - build one
* standardize how your project uses exceptions

Barricade your program: create a validation class or something like it in between the GUI and class library

## Debugging
* don't automatically apply production constraints to dev version
	* just because production does x,y,z, doesn't mean local should
* introduce debugging aids early in a project
* consider having the debug code log for production, and fail hard for dev

## Variables
* keep vars "live" for as short a time as possible
* init vars as close to where they're used as possible
* break groups of related vars & statements into separate routines
* begin with restricted visibility (public/protected/private) and increase only when necessary
* vars should only have one purpose
* bools: don't test for !isComplete, test for isComplete

## Variable Names
* put computed qualifiers at the end of the routine: revenueTotal
* bools should imply true/false: ie done vs. status
* avoid names with similar meanings - if you can switch two vars and wind up with the same basic meaning, you need to rename one (ie: paymentTotal and totalPayment in same routine)

## Data Types
* avoid magic numbers - use named constants
* avoid magic strings: "      	" to represent a space or something like that
* use bools to simplify complicated tests
* enum: in switch statements, test for invalid values (case else)
	- reserve the first entry for an invalid type

## Structures
* use to simplify param lists

## Loops
* black out the guts of a loop - it should still be clear what's happening
* put init code directly before the loop
* make them do one thing

## Quality
* the longer a defect stays in the project, the more expensive it is to fix
* architecture errors are costlier to fix because they result in lots of errors and wasted code
* testing & QA should be woven into the fabric of a project
* the biggest activity is debugging and refactoring

## Testing
* test with bad data & good data
* "if you see hoof prints, think horses, not zebras"
* errors tend to cluster in a few classes & routines

## Refactoring
* if quality is degrading that's a canary in a coal mine that the program is heading in the wrong direction
* don't document bad code, rewrite it
* small changes tend to be more error prone ('cause you think it's little and not big deal)
* only change something for a good reason
* make one change at a time

## Formatting
* first priority of visual layout is to illuminate the logical structure of the code
* just pick a style and stick with it (there's really no performance benefit of one style vs. another)
