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

[Work in progress image showing component styling complete except for the dynamic parts.](images/wip-notes/Prior-to-bars.png)

So with this bit done, I've now Successfully styled all the non-dynamic elements of the component.
That has taken 2.5 hours for the static CSS. I didn't specify if the 4 hour CSS budget covered both
static and dynamic bits.
Now, I could either,
1) Start on the JS to get it working and figure out styling once I've got data coming in from the JSON., or...
2) Do a static placeholder build of the HTML that I want the JS to generate from the JSON, and...
	by doing this I can also build the CSS as I go which should render the HTML the same, regardless
	of whether it is static or dynamically generated provided the classes/IDs are the same.
So the 2nd option seems more sensible.

