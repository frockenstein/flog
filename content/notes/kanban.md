---
title: Kanban
tags: [notes,software,process]
author: David J. Anderson
---

[Kanban: Successful Evolutionary Change for Your Technology Business](https://www.amazon.com/Kanban-Successful-Evolutionary-Technology-Business/dp/0984521402)

## Chapter 1 - Solving the Agile Manager's Dilemma

* [Kanban](https://en.wikipedia.org/wiki/Kanban) systems are from a family of approaches known as *pull* systems
* [Drum-Buffer-Rope](https://en.wikipedia.org/wiki/Drum-Buffer-Rope) is an alternative approach (with a clumsy name)
* Motivation for pull system is two-fold: a systematic way to have sustainable pace, introduce process changes with minimal resistance
* Kanban underlies the [Toyota Production System](https://en.wikipedia.org/wiki/Toyota_Production_System) & it's *kaizen* approach to continuous improvement
* Microsoft did first virtual kanban in 2004 **and got a 90% reduction in lead time**. (See Chapter 4) Lead time = total time to deliver the work, QA and all.
* Results from early kanban in software were encouraging

## Chapter 2 - What is the Kanban Method?

* Kanban can be used anytime there is a desire to limit a quantity of things inside a system.
* The Imperial Palace Gardens in Tokyo use kanban to control the size of the crowd inside the park
* The quantity of kanban signal cards in circulation limits work-in-progress.
* New work is pulled into the process by returning a signal card upon completion of current work.
* In IT work, we're generally using a virtual kanban system and there is no actual physical card passed around to limit work-in-progress.
* Card walls, common in Agile software, are not kanban systems.
* **Kanban creates a positive tension that forces the discussion of problems.**
* Kanban requires explicit policies, and enables incremental improvement through repeated discovery of issues affecting process performance.
* [Limited WIP Society](http://www.limitedwipsociety.com)

## Chapter 3 - A Recipe for Success

* Poor quality can represent the largest waste in software development.
* Reducing work-in-progress generally improves quality. **Do fewer things better!**
* **Improved quality improves trust downstream, and usually enables quicker, more frequent releases, which improves trust with people upstream.**
* Demand is balanced against throughput via the pull system.
* Pull systems expose bottlenecks, and expose slack in the non-bottlenecks.
* **Good quality prioritization** maximizes the output of a well-functioning dev team, but it's of little value if quality is low and delivery is unpredictable.
* Making changes to reduce variablity requires slack.
* Reducing variability reduces the need for slack.
* Reducing variability reduces resource requirements.
* Reducing variablity allows reduced kanban cards, less WIP, and results in less average lead time.
* Slack enables improvement opportunities. **You need slack** to enable a continuous-improvement culture. Optimizing for 100% usage isn't desirable.
* How to build maturity: 1) learn how to build quality code. 2) Reduce WIP and release often 3) Improve prioritization to ship the *right* things
* Process improvement leads to quicker, more predictable teams.

## Chapter 4 - Case Study of 2004 Microsoft Kanban

* Went well - read the whole thing if interested.

## Chapter 5 - A Continuous-Improvement Culture

* Kaizen means "continuous improvement"
* A kaizen culture is one where people feel empowered, act without fear, affiliate spontaneously, collaborate and innovate
* A kaizen culture has a high degree of social capital and trust
* Kanban gives transparence in work and process
* Transparency of process allows everyone to see the effects of the actions or inactions
* Individuals are more likely to give their time when they can see the effect it will have
* Kanban Work In Progress limits enable "stop the line" behavior, and encourages swarming to resolve the problem
* Collaborative behavior can spread virally
* Individuals will take their lead from senior managers. Collegial, collaborative behavior among senior leaders will affect the behavior of the whole workforce.

## Chapter 6 - Mapping the Value Stream (barf)

* Decide the outer boundaries of the kanban system. It's often best to limit this to the immediate span of political control. Don't force visualization, transparency, and WIP limits on any department that doesn't volunteer to collaborate
* Model the card wall to align with the boundaries
* Define work item types and model how their work flows. Some types may not require every step in the flow.
* Design the work item card to have enough info to facilitate self-organization for pull and to enable team members to make good quality decisions with respect to risk based on work item type, service-level agreements, and classes of service.
* Use an electronic system if the team is distributed
* Discuss concurrency in activities and how to model and visualize them
* Discuss methods for handling activities that do not need to follow a specifically ordered flow and choose how to model and visualize them.

## Chapter 7 - Coordination with Kanban Systems

* Best practice is to use a physical and electronic board
* Holding regular meetings reduces the coordination cost for those meetings (????)
* Prioritization and release planning should be done independently and should have independent cadence
* Standups are to discuss issues, impediments, and flow - not the usual status update of Agile Scrum
* Standups are a great opportunity to put continual improvement in action - they often spur these types of discussions.
* Grooming and triage of backlog improves prioritization meetings (duh)
* Issue management, escalation and resolution is a core discipline in improving the performance of a team and should be addressed early in the developemet of a team
* Escalation paths and policies should be clearly defined

## Chapter 8 - Delivery Cadence

* "Delivery cadence" is an agreed-upon, regular interval between deliveries of working software.
* Kanban decouples delivery cadence from both development lead time and prioritziation cadence.
* Short, time-boxed iterations have led to dysfunction with some teams attempting to adopt Agile development methods
* Delivery of release of software involves coordination of many people from various functions. All of this coordination has a measurable cost.
* Delivery or release of software carries with it a set of transaction costs in both time and money. These costs can be determined and tracked.
* Regular delivery builds trust, and delivering consistently can be addictive - also reduces coordination costs
* Ad hoc delivery can make sense for orgs with high levels of trust and maturity and low transaction/coordination costs
* Legitimate requests for an expedited delivery may be cause for an off-cycle release. Regular releases should resume asap afterward.

## Chapter 9 - Input Cadence

* "Prioritization cadence" means agreed-upon regular interval between meetings to prioritize new work into the input queue
* Kanban removes potential Agile dysfunctions by decoupling the priority cadence from the development time and delivery.
* Prioritization of new work involves many people and has a measurable cost
* Planning games used in Agile methods don't scale easily and can incur big coordination costs.
* Prioritization cadence is established by meeting regularly with the same folks needed to make the decision, and focusing on reducing costs. This will build trust too.
* Ad hoc priority meetings are only for mature orgs that function really well.

## Chapter 10 - Setting Work-In-Progress Limits

* These limits should be agreed upon through consensus up and down the food chain of managers etc
* Unilateral declaration of WIP may prove difficult when the system is under stress
* Typically the limit is in the 1-3 range per person, pair or team
* Higher quality is usually a byproduct of the focus afforded by WIP
* Bottleneck buffer: it's fine to create a column that's a buffer/holding tank for tickets (dev ready column for example). Buffer size should be as small as possible, but maintain flow through the system.
* WIP limits can be adjusted empirically (Kanban is an empirical process)
* Don't waste time trying to get the perfect WIP limit. Pick a number and go, adjust later down the line.
* Unlimited downstream sections (kanban boards) are possible - but take care not to go overboard and cause excessive coordination or delivery time.
* Once WIP limits are set, capacity can be allocated across work item types
* Swimlanes are often used for work item types

## Chapter 11 - Establishing SLAs

* Classes of service help optimize customer satisfaction
* Assign tickets based on class of service (use different-colored card or swimlanes)
* Define policies around service classes (riskier things need tighter estimation, critical fixes are surgical and quickly deployed etc)
* Some classes of service should include a due date
* These SLAs will change the customer psychology, and they often stop complaining about you being slow if the hot items get fixed quickly and don't wait for larger release
* Kanban capcity should be allocated/planned according to each class of service

## Chapter 12 - Metrics, Management, Reporting, Oh My

* Track WIP with a cumulative flow diagram
* Track lead time for each item processed and report both the mean and spectral analysis for each class of service
* Lead time is an indicator of business agility
* Track estimated vs actual lead time for Fixed-Delivery-Date class of service items
* Report Due Date performance as an indicator of predictability
* Impediments block flow and impact lead time and due date performace; report blocking issues and the number of blocked work items in a cumulative-flow diagram with an overlying graph of blocked items. Use it to indicate the capability to report problems and resolve them quickly.
* Flow efficiency is how efficient the org is at processing new work. It's a secondary inidcator of biz agility, and indicates how much room for improvement there is without changing engineering methods.
* **Initial Quality** reports the # of bugs discovered during tests and indicates how much is being wasted through poor coding.
* **Failure Load** is % of work that is generated through some failure of the system and shows capacity left on the table that could be used for new features, etc.

## Chapter 13 - Scaling Kanban

* Major projects should follow core principles of Kanban (WIP limits, cadence, class of service, etc)
* Major projects often have to show heirarchy, and swim lanes are often a good way to do it
* Coarse grained (Product board) vs fine grained (team boards) cards and WIP limits
* Shared-resource demands can and should be visualized on work items
* Non-instant availability of shared resources can be highlited with blicking tickets.
* Shared resources should develop their own kanban system
* A network of kanban systems for shared resources can be thought of as a service-oriented arch. for software development

## Chapter 14 - Operations Review

* Ops reviews should be done org wide, and focus on objective data. Each dept. reports its own data.
* Leading with financial info underscores that the software engineering function is part of the wider org and good governance is important.
* A monthly cadence for ops reviews is about right, keep meetings short - typically a couple hours max.
* Use to provide a feedback loop and drive continuous improvement at the org/business level.
* Use to spotlight what effective managers do and build trust.
* External folks attending ops reviews can see how engineering functions and understand the challenges.
* Examine bad data and problems as much as good stuff and basking in the glory.
* Offsite helps focus minds, food encourages attendance, senior leaders says that perf and cont. improvment is taken seriously.
* Ops reviews are a quick path to org maturity.

## Chapter 15 - Starting a Kanban Initiative

* Kanban promises at least eight goals:
	* high quality
	* process improvements with minimal friction
	* predictable lead time
	* better work/life balance
	* slack in the system by balancing demand and throughput
	* simple prioritization system that delays commitment and keeps options open
	* transparent scheme for improvement opportunities
	* predictable results, biz agility
* Kanban strikes a bargain based on long-term relationships and a commitment to system-level performance

## Chapter 16 - Three Types of Improvement Opportunity

* Kanban requires that models are used to identify improvement opportunities
* Kanban supports at least three types of continuous improvement methods: Constraint management, Waste reduction, Variability Management.
* blah blah blah

## Chapter 17 - Bottlenecks and Non-Instant Availability

* Bottlenecks come in two flavors: capacity constrained, and non-instant availability
* Add resources, automation, policy changes are typical remedies
* Reducing a bottleneck is often a long-term strategic investment to process improvement
* Often bottlenecks are performing below their potential - improve by exploiting and protecting the people/actions.
* Exploiting is policy changes that control the work done by the bottleneck, class of service/swimlane is exploitation
* Protection is often a buffer in front of the person
* Subordination actions are taken elsewhere in the stream, usually to enable exploiting/protecting.
* Exploitation, protection, and subordination are often easy and cheap, since they're primarily policy changes.
* Exploitation should be tried first, before adding protection, people, etc. (do this work and only this work all day - call me if anyone interrupts)

## Chapter 18 - An Economic Model for Lean

* Waste is classified into three categories: transaction costs, coordination costs, failure load. The concept is a metaphor.
* Waste doesn't work for everyone, and is often necessary. To determine if it's wasteful, ask "would we do more of this if we could?"
* Transaction costs come in two flavors: setup activities, and cleanup, or delivery activities.
* Coordination costs are things that are performed in order to assign people to tasks, schedule, events, or coordinate the work of two or more people.
* Failure load is new shit generated becuase of some earlier failure, and uses capacity that could be used for new things.
* Turning ideas into working code that's deliverable quickly maximizes the value and minimizes waste.

## Chapter 19 - Sources of Variability

* The study of variation in industry started in the 20's with Walter Shewhart and evolved with the work of W. Edwards Deming, Joseph Duran, and David  Chambers throughh the late 20th century.
* A study of variation and its statistical analysis method is at the heart of both the Toyota Production System (and hence Lean) and Six Sigma
* The work of W. Edwards Deming and Joseph Duran were
major inspirations of the work of the Software Engineering Institute at Carnegie Mellon and the Capability Maturity Model.
* Shewhart divided sources of variation into two categories: those internal to the process, and those external to it.
* Internal variations are typically work item size, type, class of service, irregular flow, rework.
* External variations are innumerable, but often things like requirements abiguitiy, expedite requests, market factors, staffing factors, challenges in scheduling and overhead.
* Kanban systems product better outcomes when coupled to a solid, event-driven risk-management capability.
* Kanban also offers additional ways to manage risk such as allocation of WIP limit across classes of service and work item types and the use of risk profiling to separate work into types or classes, and process accordingly.
* Further work on advanced risk-management strategies and tactics with Kanban is ongoing.

## Chapter 20 - Issue Management and Escalation Policies

* Kanban systems should have a first-class work item type, Issue, used to track problems causing other work to block.
* It's become standard to use pink or red cards to signal blocking issues.
* Blocked work items and issues are not bottlenecks. They should be managed as special variations rather than as capacity-constrained non-instant availability resources.
* Issue management should be a strong focus of daily standup meetings.
* Escalation policies should be well defined and all team members aware.
* Use an issues and blocked items tracker to visualize and facilitate analysis and resolution.
