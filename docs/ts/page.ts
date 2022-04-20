var currentPath = "";

function displayContent() {
	// The path variable corresponds to the path from the current page to the root.
	// We use /directory/index.html for every app or file manager that doesn’t understand /directory directly.
	var currentPath: string = path;
	const topbarContent = `
	<a href="/index.html" class="navLink"><img class="navIcon" src="/assets/favicon.png"></a>
	<a href="/about.html" class="navLink">About</a>
	<a href="/participate.html" class="navLink">Participate</a>
	<a href="/ideas.html" class="navLink">Ideas</a>
	<a href="https://scratch.mit.edu/studios/31417547" class="navLink">Studio<a>
	<a href="/feedback.html" class="navButton">Feedback</a>
	<a onClick="changeTheme()" class="navButton"><img class="navIcon" src="/assets/theme.svg"></a>
	`
	document.getElementsByClassName("topbar")[0].innerHTML = topbarContent;
}
