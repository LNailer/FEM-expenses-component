I worked on this project for a few reasons.
To consolidate my basic CSS, in particular grid.
Also on the JS front, I wanted to see that I could work with JSON to see dynamic updates when
the source data changes. While not an API, the front end updates on the basis of this input and
being comfortable with this seems important prior to working more with APIs.

The project was taken from the Frontend Mentors Challenges.

# FEM-expenses-component
Frontend Mentors Project. Simple component that imports and renders JSON in a bar graph.
https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt

•••••• BUILD NOTES ••••••

29/06/2025 - (Sunday)
8:33 pm

Rebuilding this from scratch after having one attempt wiped with a git disaster.
I had built it through to pulling in the JSON, but hadn't yet got the JS to template string out the imported JSON to the html.
The HTML and CSS had been sorted and looked good in the static state.
My plan now is to build the HTML with a ≈ 400 x 400px hole in it that will catch
the JS rendered content.
I will add that bit of the CSS after I have got the JS dropping it into the page.

Time budget: I'll budget 2 hours to get the HTML done.
This took me <15 minutes. Finished content with completely unstyled HTML. 

••••••
I'll budget 4 hours to redo the CSS.
Planning the approach.

Read the design brief.
consult notes on CSS in notebook.
1. Bring in the fonts. // took 15mins.
2. Bring in the colours. // took another 15mins.
3. Size the boxes use rems. // Took out the hour.
	// Use rems in some places not all. Some things from the brief
	// require fixed values.
4. Aim for nil or minimal redundant repetition of values.
  i.e. - don't set width for header and body. Just set width once and
  put both in that container.
	// have done this, also good use of utility var 2px for the border width.
	// doing this means I can turn guides on and off easily.
Get the component container to adjust at some point to the 320px view.

••••••
01/07/2025 - (Tuesday)
1hr, 15m into CSS

I will now:
Add borders to the items in the header left and both sides of footer
Add the SVG logo
Colour the fonts correctly
Size + weight the fonts correctly
••••• 
In 30m I managed to get through all this, down correctly size and weight fonts.
Header is done. Body still to go.
••••• 1hr 45m •••••

••••••• 02/07/2025 - (Wednesday) ••••••••
I've got it to here now:

[Work in progress image showing component styling complete except for the dynamic parts.](images/Prior-to-bars.png)

So with this bit done, I've now Successfully styled all the non-dynamic elements of the component.
That has taken 2.5 hours for the static CSS. I didn't specify if the 4 hour CSS budget covered both
static and dynamic bits.
Now, I could either,
1) Start on the JS to get it working and figure out styling once I've got data coming in from the JSON., or...
2) Do a static placeholder build of the HTML that I want the JS to generate from the JSON, and...
  by doing this I can also build the CSS as I go which should render the HTML the same,
  regardless of whether it is static or dynamically generated provided the classes/IDs
  are the same.
So the 2nd option seems more sensible.

••••• 03/07/2025 - (Thursday) ••••••
So taking the second approach mentioned above I need.
Conainer column widths for the 7 bars at narrow 320px and full width of 450px.
At narrow - mocking it up in Figma, is telling me 7x 40px will do the job.
At 450px component width.... 7 x 60

••••• 04/07/2025 - (Friday) •••••
5:37 am
I spent 30m last night tidying things up.
I have 2 of the bars done. These are with "hard pixel" measures on both
the 320 and 450px width versions.
I want the hover amount to just fill the column, and the bar 
to fill the column width minus a few pixels of margin.

No luck with auto filling the space. Asked Duck AI, then ran tests in codepen. 
not much progress. Don't want to get stuck in a CSS trench.
The hard pixel counts work at both widths, even if I jack up the number to over $337.
One way to keep this legible on smaller viewport would be to crop the cents if at the 320px width.

Next up is to spit out the dynamic bar chart,
using a for each loop pulling from JSON data.
Initially, do this with the object sat inside the js file.
Then do it i think with an async await pulling it in from a data.json file.

=======================

••••• 06/07/2025 - (Sunday) •••••
4:25 pm
Saved yesterday and created a back up version
in another folder prior to beginning JS + JSON work.
My git skills for forking, merging and traversing versions
is not solid enough yet to be reliable. So basic save a solid
WIP before beginning new thing is a good solution.
Improving my git skills so I'm confident with it is a 🌟 starred
item for my learning backlog.
Just to have version control for coding and copywriting.
Working on JS yesterday for 30m
(after some experimenting at work on Friday)
I managed to
1 - import JS successfully.
2 - import JSON data file to JS.
3 - do a forEach method on the imported JSON using 
   .innerHTML and  ${stringLiterals} to push the bars as needed.
4 - tweak the CSS a little to get it to format. (i.e. The bar divs and sub-div styles were needed updating to apply to an ID and ID > children instead of classes).
Next tasks include
1. Add the dollar sign to the amounts 
	// ✅ - took 2 mins. Use /$ before ${amount.calue}
2. Hide the amounts except on hover 
	// ✅ - took 30 mins and AI convo checking to reformat my css. But on hover working now.
3. Add teal colour to today's bar // ✅ 
4. Add faded bar colour for onHover over bar.
   	// ✅ These two took another 30-40m. Will stop there for today.
  	// Last piece, dynamic heights.
5. Add dynamic heights to bars.

===
07/07/2025 - (Monday)
7:24 am. - 
I actually went back and finished off the bars to adjust dynamically yesterday evening. Confident it took <30m.
Technically it is DONE now. All bits of the brief met.

I can add in the Front End Masters attribution and host it on Netlify. I would also like to try a couple of bonus tasks.

Bonus tasks
6. Add on click to bar to make amount show and persist until second click or click on other bar.


====
8:04 pm. - 
just experimented in console for 20m.	.
read tutorial covering toggling classes.
I can use onclick to trigger function which adds/removes a 'hovered' class, and
remove any other 'hovered' class instances - with something like this from GPT.  

====
08/07/2025 - (Tuesday)
4:57 pm
I want to add a class called show-amount to any bar class that gets clicked.
	It needs to first remove the show-amount class from any other bar that might have it.
	When show amount is active on a bar, it has the appearance that on hover does.
	If a bar with show-amount active is clicked it gets toggled off. 

7:42
I've got it working so that the amounts get toggled on and off by tapping on the bars.
I will change it so that you can only get one amount at a time on next edit.


Things to do:
1- change so onTouch, one amount at a time ONLY applies to touch devices.
if there is a mouse, then it is the as-per-brief experience.
2- on desktop I can click to turn off hovers down to zero. not on mobile.

=== 10/07/2025 - (Thursday) 8:01 am ===
https://medium.com/@afron.orana/handling-hover-state-on-touch-devices-58d4851f2e21
I had a look at this article above - it's good regarding considerations for on touchscreen devices.
I didn't know there was default handling for :hover in mobile, I had tried over-engineering with onclick eventListener in JS to replicate what already exists.
The touchscreen :hover 'persists' until you click elsewhere. This isn't a perfect UX situation, but it does seem like the best default.
For a substantial investment of time, reading, coding and testing I could likely find a way to get a second tap on a bar to remove the 'show-amount' hover state.

=== 12/07/2025 - (Saturday) === 7:31 am
Checking now. It actually isn't working on mobile. Zero replication of the desktop hover state on touch devices. Show amount isn't accessible - AT ALL.
I may have seen some cached behaviours last night.

Am actually going to deploy to netlify so I can test on phone/tablet IRL.

== 13/07/2025 - (Sunday) === 5:53 pm
I deployed - thought it was working on touchscreens.
It was for all except safari browsers. Urgh.
Found a solution on a blog from the Netherlands
https://dev.webonomic.nl/fixing-the-iphone-css-hover-problem-on-ios
A few options. I took the first.

<body onclick > 
This enabled it to work.

Apparently the reason is Safari does this for battery saving and their take on what is 
more accessible on mobile.

Happy with where it's at now. I'm regarding this as DONE. ✅ 
