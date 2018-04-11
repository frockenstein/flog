---
title: Code Complete
tags: [notes, software, design]
description: Classic opus on slinging code
author: Steve McConnell
---

[http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_1?ie=UTF8&qid=1365715794&sr=8-1&keywords=code+complete](http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_1?ie=UTF8&qid=1365715794&sr=8-1&keywords=code+complete)

## Design

* 70-90% of the development effort on a typical project comes after it's initial release

* In high-quality software, there's a relationship between the conceptual integrity of the architecture and its low-level implementation. This is the point of construction guidelines for variable names, class names, formatting/commenting, etc.

## Architecture

* Good architecture makes construction easy. Architecture changes are expensive to make during construction or later.

* Accidental vs. essential difficulties - essential difficulty is problems with the
conception and modeling of the program - the essence of the program, e.g. shuttle launch systems. It's hard to model the world and conceive very complex problems.

# MANAGING COMPLEXITY IS THE MOST IMPORTANT ASPECT OF PROGRAMMING

## Reduce complexity by:
* Keep functions short
* Write in domain terms, not machine
* Minimize essential complexity: as cut and dry as possible!
* Design with ease of maintenance in mind
* Loose coupling - fewer moving parts - stratified code layers - separation of concerns
* Keep it lean - code is the enemy!
* Use standard stuff - nothing exotic (code, libraries, 3rd party things, strange configurations, etc)

Heuristics (rules of thumb/common sense - apply to all problems solving):

* Keep business rules out of other code
* Hide difficult design and construction areas, to both minimize their impact and make 'em easier to change
* Anticipating the change: start with the core and work your way out. The core won't likely change, and the others are things you may or may not have to deal with. If it's likely to change deal with it. If it's unlikely, but easy to deal with, anticipate it. If it's unlikely and hard, cross that bridge later.

## Loose Coupling

* A routine with fewer params is better, a class with fewer public methods is better

* Advertise what's going on and who's talking to who - don't hide it

* Flexibility: rather than a routine taking a business object, have it take just the vars it needs, so other things might be able to use it too.

* Loose coupling - think of how trains connect: one standard thing, all use the same device

# CLASSES AND ROUTINES ARE TOOLS TO REDUCE COMPLEXITY. IF THEY'RE NOT DOING THAT, YOU'RE DOING IT WRONG.

* Centralize: there should be One Right Place to make a change

* Design for testing: chances are, if you can test it easily, it's written well

## Abstract Data Types

* If a list represents employees, think of it as employees and code as such
* Aim for good cohesion as well as abstraction
* Abstract class should adhere to the "is a" relationship
* Containment: class members should be a "has a" relationship
	* Strive for 7+/- members

* Design for inheritance, or forbid it (sealed classes in C#)
* No more than 7+/- subclasses in a tree
* Inheritance tends toward making things complex - bias against it
* If you must use inheritance, bias towards base classes rather than interfaces

## Member Functions and Data
* Minimize the extent to which a class collaborates with other classes

## Classes (reasons to create)
* To reduce complexity
* Isolate complexity - keep bugs centralized
* Limit effects of changes
* Hide global data
* Make central points of control
* Reuse, but avoid "gold plating" (everything-but-the-kitchen-sink classes)

## Routines
* Create understandable abstraction: calculatePayments() vs. having to read the code
* Functional cohesion: does only one thing
* Function names should be long, but not crazy long
* Function names should be clear: submitPayment() vs. handleData()
* If the code makes it hard to name a function, you need to refactor the code first
* Describe the return value: car.currentColor()
* Strong verb followed by an object

## Routine Params
* No more than 7 +/-
* Don't return an input param, use a new one for output (pg. 177)
* Code that "sets up" for a routine, or "takes down" after, is indicative of poor design

## Exceptions
* Throw only for exceptional conditions
* Don't use 'em to pass the buck - handle locally if possible
* Don't throw 'em in constructors
* Throw 'em at the right level of abstraction - don't throw a low-level exception when you can throw a custom, derived one
* No empty catch blocks
* Centralized exception reporter - build one
* Standardize how your project uses exceptions

Barricade your program: create a validation class or something like it in between the GUI and class library

## Debugging
* Don't automatically apply production constraints to dev version
	* Just because production does x,y,z, doesn't mean local should
* Introduce debugging aids early in a project
* Consider having the debug code log for production, and fail hard for dev

## Variables
* Keep vars "live" for as short a time as possible
* Init vars as close to where they're used as possible
* Break groups of related vars & statements into separate routines
* Begin with restricted visibility (public/protected/private) and increase only when necessary
* Vars should only have one purpose
* Bools: don't test for `!isComplete`, test for `isComplete`. The "not is" construct is wastefully hard to parse in your brain. Spare those cycles!

## Variable Names
* Put computed qualifiers at the end of the routine: revenueTotal
* Bools should imply true/false: ie done vs. status
* Avoid names with similar meanings - if you can switch two vars and wind up with the same basic meaning, you need to rename one (ie: `paymentTotal` and `totalPayment` in same routine)

## Data Types
* Avoid magic numbers - use named constants
* Avoid magic strings: "      	" to represent a space or something like that
* Use bools to simplify complicated tests
* Enum: in switch statements, test for invalid values (case else)
	- Reserve the first entry for an invalid type

## Structures
* Use to simplify param lists

## Loops
* Black out the guts of a loop - it should still be clear what's happening
* Put init code directly before the loop
* Make them do one thing

## Quality
* The longer a defect stays in the project, the more expensive it is to fix
* Architecture errors are costlier to fix because they result in lots of errors and wasted code
* Testing & QA should be woven into the fabric of a project
* Most activity on a project is debugging and refactoring

## Testing
* Test with bad data & good data
* "If you see hoof prints, think horses, not zebras"
* Errors tend to cluster in a few classes & routines

## Refactoring
* If quality is degrading that's a canary in a coal mine that the program is heading in the wrong direction
* Don't document bad code, rewrite it
* Small changes tend to be more error prone ('cause you think it's little and not big deal)
* Only change something for a good reason
* Make one change at a time

## Formatting
* First priority of visual layout is to illuminate the logical structure of the code
* Just pick a style and stick with it (there's really no performance benefit of one style vs. another)
