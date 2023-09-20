/* STEP 6: SCROLLING PROGRESS
Aim: Create a progress bar that shows how far a user is down the page

| ./scrolling-progress.html |

[ ] Build out the HTML
Create the label and an HTML progress bar elements
<h1>Scrolling Progress Bar!</h1>

<!-- Progress Bar -->
<label for="progress-bar" class="sr-only" aria-label="See the progress of your reading">Reading Progress</label>
<progress class="progress-bar" id="progress-bar" value="0" max="100"></progress>

<!-- . . . -->
🔻

| ./scrolling-progress.css |

[ ] Walkthrough the CSS
Talk about the blog post container styles
Show the progress bar styles
Talk about accessibility and the "sr-only" class
/* * Scrolling Progress * 
.blog-post {
	width: clamp(275px, 50%, 60ch);
	margin: 1em auto;
	font-size: 1.375rem;
	padding: 0.125em 3em;
	border-radius: 12px;
	box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12),
		0px 11px 15px -7px rgba(0, 0, 0, 0.2);
}

.progress-bar {
	height: 0.75rem;
	width: 100vw;

	position: sticky;
	top: 0;
	left: 0;
	display: none;
	/* Reset the default appearance 
	-webkit-appearance: none;
	appearance: none;
}
progress[value]::-webkit-progress-bar {
	background-color: #f0f9ff;
	border-radius: 2px;
	box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12),
		0px 2px 4px -1px rgba(0, 0, 0, 0.2);
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap; added line
	border: 0;
}
🔻

| ./scrolling-progress.js |

[ ] Establish the Element Selectors
========== HTML Element Selectors ========== 
const progressBar = document.querySelector('#progress-bar');
🔻

[ ] Initiate the Event Listeners
========== Event Listeners ========== 
EVENT LISTENER: Listens for a scroll on the window of the screen to fill the progress bar
window.addEventListener('scroll', fillProgressBar);
🔻

[ ] Declare the Function
========== Function Declarations ========== 
FUNCTION: Fills the progress bar
function fillProgressBar() {
	const windowHeight = window.innerHeight;
	const fullHeight = document.body.clientHeight;
	const scrolled = window.scrollY;
}
🔻

[ ] Add Conditional Styles
Only display the progress bar if we are over 25% scrolled
 FUNCTION: Fills the progress bar
function fillProgressBar() {


	const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

	percentScrolled > 25 ? (progressBar.style.display = 'block') : (progressBar.style.display = 'none');

	progressBar.value = percentScrolled;
}
🔻

Check: Ensure the progress bar presents accurate data

Does the progress bar stick to the top of the screen?
Does the progress bar show 100% complete at the bottom of the page?
Does the progress bar disappear when you are at the top of the page? */

const progressBar = document.querySelector('#progress-bar');

window.addEventListener('scroll', fillProgressBar);

function fillProgressBar() {
	const windowHeight = window.innerHeight;
	const fullHeight = document.body.clientHeight;
	const scrolled = window.scrollY;

	const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

	percentScrolled > 25 ? (progressBar.style.display = 'block') : (progressBar.style.display = 'none');

	progressBar.value = percentScrolled;
}