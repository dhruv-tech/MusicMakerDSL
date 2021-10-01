Use this file to commit information clearly documenting your milestones'
content. If you want to store more information/details besides what's required
for the milestones that's fine too. Make sure that your TA has had a chance to
sign off on your milestones each week (before the deadline); typically you
should discuss your material with them before finalizing it here.

# Milestone 1

## The Idea
Music Maker - Ability to generate a basic musical tune based on a specification.

<ul>
  
  <li>String together different sounds</li>
  <li>Tracks that can loop, and layer on top of each other</li>
  <li>Would need some sort of soundbyte upload system? Gui?</li>
  <li>Alternatively, we can have the ability to create sounds with the DSL, ex: change pitch, tone, speed, volume. Which then come together to make some kind of music or sound effect.</li>
  
</ul>

## Things to do

<ul>
  
  <li>Deliberate and design a structure for the DSL</li>
  <li>Research and finalize technical implementation details for interpreting the DSL (use of frameworks, method of input for the DSL, etc.)</li>
  <li>Division of responsibilities</li>
  <li>Identify potential users to document user stories</li>
  
</ul>

## Key TA Thoughts

<ul>

  <li>Having a GUI is good, but do not focus on that.</li>
  <li>It’s better to elaborate on the loop feature, essentially, we want your language able to help users do something creative. So loop should not just be simply duplicating sound tracks.</li>
  <li>Being able to create sounds also sounds good, and seems more doable than importing soundbyte (not familiar with music, is that some music format or just a word you guys come up with?)  Defining sounds is a more interesting feature on your DSL, so I personally prefer the ability to create sounds.</li>

</ul>

# Milestone 2

## Roadmap

<ul>
  <li>Demo Server + CI/CD Setup (By Sunday Sep. 26th)</li>
  <li>Grammar finalized & Documentation for user (By the end of Monday Sep. 27th)</li>
  <li>1-2 User Feedback (language prototype) (by the end of Thursday Sep. 30th)</li>
  <li>Core functionality without link to DSL finished (by Tuesday Oct. 5th)</li>
  <li>Web Page with editor and documentation (by Thursday Oct. 7th)</li>
  <li>Parsing (by Tuesday Oct. 12th)</li>
  <li>User Testing (final product) (by Thursday Oct. 14th)</li>
  <li>3min Video (final product) (by Sunday Oct. 17th)</li>
</ul>

## Responsibilities

<ul>
  <li>EVERYONE:</li>
    <ul>
      <li>Meet up in person every monday (2pm-5pm), online thursday (7:30pm)</li>
      <li>Grammar/syntax design</li>
      <li>Parser, Backend Programming</li>
    </ul>
  <li>DAVID: User feedback/testing, Milestone writeup/submission</li>
  <li>DHRUV: Web Page, Demo Server + CI/CD Setup</li>
  <li>HOWARD: Video production, documentation, User Testing</li>
  <li>MICHELLE: Web, user feedback/testing</li>

</ul>

## Draft Syntax

~~~
“Sound” TEXT “as” TYPE:
  “Pattern:” PATTERN_RULE
  “Use Sound:” SOUND_RULE
  “Volume:” VOLUME_RULE
“Finish sound”
~~~

<p>TYPE: “Preset” | “Clip”</p>

<p>TEXT: ^[a-zA-Z]*$</p>

<p>PATTERN_RULE: “repeat pattern” PATTERN_DEF NUM “times”</p>

<p>PATTERN_DEF: [x_R\-]+</p>

<p>NUM: [0-9]+</p>

<p>SOUND_RULE: -TODO- </p>

<p>VOLUME_RULE: ^[1-9]?[0-9]{1}$|^100$</p>

<br>

### Example Code:

~~~
Sound Kick1 as Preset:
	RepeatPattern “x-xx-x” 10 Times
	UseSound: “Kick”
  Volume: 10
Finish Sound

Sound Melody1 as Clip:
	RepeatPattern: 'x' 16 Times,
  UseSound “CM Dm FM”
  Volume: 15
Finish Sound


Combination ‘Draft1’:
	Track
		MaxLength: 50
		Volume: 10
		Components: [5*Kick1, 5*Melody1]
  EndTrack
  Track
	  MaxLength: 35
	  Offset: 10
	  Volume: 5
		Components: [15*Kick1, 6*Melody1]
  EndTrack

Play Draft1
~~~

## Summary of Current Progress

<ul>
  <li>Outlined the goal of our DSL and who our users would be</li>
  <li>Assigned responsibilities, and set an in person meeting time and location for working on code</li>
  <li>Decided on language to write in, frameworks to use, form of final product</li>
  <li>Near final draft of the syntax of our language</li>
</ul>

# Milestone 3

## Code Example Used For First User Testing

~~~
Sound Kick1 as Preset:
	RepeatPattern “x-xx-x” 10 Times
	UseSound: “Kick”
	Volume: 10
Finish Sound

Sound Melody1 as Clip:
	RepeatPattern: 'x' 16 Times
	UseSound “CM Dm FM”
	Volume: 15
Finish Sound


Combination ‘Draft1’:
	Track
		MaxLength: 50
		Volume: 10
		Components: [5*Kick1, 5*Melody1]
	EndTrack
	Track
		MaxLength: 35
		Offset: 10
		Volume: 5
		Components: [15*Kick1, 6*Melody1]
	EndTrack

Play Draft1
~~~

<p>Only slight clarifications on syntax made</p>

## First Round of User Testing

<p>**User 1:** Using this language, create a single chord that consists of the D Major (DM) and E Minor (Em) keys, and repeats three times. Play the sound at the end.</p>

<ul>
  <li>User was confused about multiple ways of repeating a pattern, asking if they should repeat within the “Sound” or within the “Track”</li>
  <li>Assumed that the units used were in seconds, and that a MaxLength of 20 meant the track was 20 seconds long with the sounds stretched to fit that.</li>
  <li>When told MaxLength field was the number of repetitions, was still unclear. Again does this include the repeats within the “Sound” as well as in “Track”?</li>
  <li>Within Components, unsure if 2 sounds would play consecutively or together.</li>
  <li>Tried to play sound directly ex: “Play sound1” instead of putting into a combination, unsure if we wanted to allow this.</li>
</ul>

..
