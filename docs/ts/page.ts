var currentPath = "";

function displayContent(path: string) {
	// The path variable corresponds to the path from the current page to the root.
	// We use /directory/index.html for every app or file manager that doesn’t understand /directory directly.
	var currentPath: string = path;
	const topbarContent = `
	<a href="${path}/index.html" class="navLink"><img class="navIcon" src="${path}/favicon.png"></a>
	<a href="${path}/about.html" class="navLink">About</a>
	<a href="${path}/participate.html" class="navLink">Participate</a>
	<a href="${path}/ideas.html" class="navLink">Ideas</a>
	<a href="https://scratch.mit.edu/studios/31417547" class="navLink">Studio<a>
	<a href="${path}/feedback" class="navButton">Feedback</a>
	<a onClick="changeTheme()" class="navButton"><img class="navIcon" src="${path}/assets/theme.svg"></a>
	`
	document.getElementsByClassName("topbar")[0].innerHTML = topbarContent;
}
