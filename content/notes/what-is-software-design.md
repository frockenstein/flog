---
title: What Is Software Design
tags: [notes, software]
---

What Is Software Design?

(Paraphrase of [http://www.developerdotstar.com/mag/articles/reeves_design.html](http://www.developerdotstar.com/mag/articles/reeves_design.html))

Why are we here?

Software is hard to build, hard to fix and maintain and slow to design and test. How can we make these things easier? How can we design and program at the same time?

Programming is not about building software - it's about designing software.

In physical engineering, design is phase 1, which is a thorough engineering attack that produces a drawing/spec/etc. This output is based on years and sometimes centuries of experience and testing. Things like how much weight a granite column can hold, how much heat a steel beam can take before it buckles, etc.

Software, on the other hand, is a series of files, that's sometimes compiled, sometimes built at runtime to ultimately translate into ones and zeroes that a physical machine can understand. This process of turning source code into something is essentially free. It might take four hours to compile a massive program, but how much time and money does it take to erect a similarly complex building or bridge?

Compared to physical engineering, it's very easy and quick to turn out complex software. This means that software will trend toward complex - not away from it. If anything, computer aids like CAD and CAM are helping hardware become more complex.

Designing software is an exercise in managing complexity, meaning choice of software tools, company organization, and the industry as a whole. Software development tends to be organic and fluid, which makes it difficult and error-prone. In the hardware world, when something is about to be built, its designers are pretty damn sure it'll work. It's been vetted, tested, analyzed, mocked up, and prototyped in all sorts of ways.

Code is design, and debugging is what hardware guys consider engineering. Why isn't software as tested and thought out? Simple - it's easy and cheap to change. A bridge or 747 is not. This is the engineering and economic reality that we have to face and deal with.

Because software engineering is a creative, rinse and repeat sort of process, it's more about how you do that process than anything else. Coding is design; debugging is design; testing is design. Each layer of the code and the system intrudes on another and low-level mistakes can be as costly as high-level ones. This means that all aspects of design should be refined and tested through the cycle.

Experience and refinement is the name of the game.

Sidenote:

Top level design should be done in any format that works, but bear in mind that it all has to be more or less trashed and translated into code. This translation is tough and often costly, so languages and language design are important to programmers and they'll usually adopt whatever language is most expressive.

Agile and similar methodologies get coders coding earlier and testing and refining. This is a good thing. The build/test cycle is central to software engineering. Because software is complex and can be anything, it's unlikely any general purpose methods for validating software design will arise. For example, short of building it and testing it, how can we really know that it'd be better to use Redis and Rails vs PHP and Memcached?

Good documentation should come at the end of design. Code comments can help with explaining design decisions and gotchas, but other things like diagrams should explain architecture and relationships. But remember: the source code determines what the design really is - documentation can and usually does deviate from code over time, which means that documents should be small, flexible, and come as late in the process as possible.

Summary (lifted straight from the article)

Real software is incredibly expensive to design. This is true because software is incredibly complex and because practically all the steps of a software project are part of the design process.

Programming is a design activity—a good software design process recognizes this and does not hesitate to code when coding makes sense.

Coding actually makes sense more often than believed. Often the process of rendering the design in code will reveal oversights and the need for additional design effort. The earlier this occurs, the better the design will be.

Since software is so cheap to build, formal engineering validation methods are not of much use in real world software development. It is easier and cheaper to just build the design and test it than to try to prove it.

Testing and debugging are design activities—they are the software equivalent of the design validation and refinement processes of other engineering disciplines. A good software design process recognizes this and does not try to short change the steps.

There are other design activities—call them top level design, module design, structural design, architectural design, or whatever. A good software design process recognizes this and deliberately includes the steps.

All design activities interact. A good software design process recognizes this and allows the design to change, sometimes radically, as various design steps reveal the need.

Many different software design notations are potentially useful—as auxiliary documentation and as tools to help facilitate the design process. They are not a software design.

Software development is still more a craft than an engineering discipline. This is primarily because of a lack of rigor in the critical processes of validating and improving a design.

Ultimately, real advances in software development depend upon advances in programming techniques, which in turn mean advances in programming languages.

