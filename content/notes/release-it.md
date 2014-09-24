---
title: Release It
tags: [notes, software, design]
author: Michael Nygard
---

[http://www.amazon.com/Release-It-Production-Ready-Pragmatic-Programmers/dp/0978739213/ref=sr_1_1?ie=UTF8&qid=1372275489&sr=8-1&keywords=release+it](http://www.amazon.com/Release-It-Production-Ready-Pragmatic-Programmers/dp/0978739213/ref=sr_1_1?ie=UTF8&qid=1372275489&sr=8-1&keywords=release+it)

Bad things start happening to systems via: impulse, stress, strain

Impulse(s) produces stress, stress produces strain, strain makes a system change shape (ram cpu)

The more tightly coupled the architecture, the greater the chance a coding error can propagate. Conversely the less coupled systems act as a shock absorbers, diminishing the effects of this error instead of amplifying them.

Every integration point will fail - be prepared for it

Know when to open up abstractions

Failures propagate quickly: Apply patterns to avert integration points problems
- circuit breaker, timeout, decouple middleware, handshaking

Sessions are the achilles heel of web apps. There's nothing quite as safe as the fork, run, die model of execution

As often happens, adding complexity to solve one problem creates the risk of entirely new failure modes.

The blocked threads antipattern is usually the cost of most failures and lead to chain reactions and cascading failures system-wide

Design out scale issues - unless you're Google, you can't test 'em out

Memory leaks and garbage collection usually appear as high cpu utilization

Consider failing fast for slow responses from services

Degrade gracefully and prepare for some services to die

Fast enough is usually < 250 ms for services that your system depends on

"Nevertheless, someday your little database will grow up. when it hits the teenage years - about two in human years - it will get moody, sullen, and resentful. in the worst case, it will start undermining the whole system (and it will probably complain that nobody understands it, too)"

Every system will eventually end up operating outside of spec

The test harness should leave scars on the system under test

With a system that never goes down, the users will most likely complain that it's slow.

Nothing is as permanent as a temporary fix

Mechanistic metaphors in the enterprise are trouble. They rarely behave with lifespans and predictable failure modes like machines. Biology and ecology are better metaphors.

The most useful criterion for evaluating architectures is: does it make IT better at responding to user's needs?

The cost of releasing software is almost never accounted for in budgeting

Change is the defining characteristic of software. Plan for it, accommodate it.
