function keyCommandForDarkMode(event)
{
	let keyPressedByUser = event.key;

	if (event.ctrlKey && event.which == 50) {
		darkMode();
	}
}


$(document).ready(function()
{
	$("#darkmode").click(darkMode);
});

function darkMode()
{
	let ariaPressedValue = $("#darkmode").attr("aria-pressed");

	if (ariaPressedValue === "false")
	{
		$("#darkmode").attr("aria-pressed", "true");
		$("body, main, h1").attr("style", "background-color: black; color: white;");
			document.getElementById("liveMessage").removeAttribute("style");
			document.getElementById("liveMessage").innerHTML = "Dark Mode enabled.";
			setTimeout(function() {
			document.getElementById('liveMessage').innerHTML = '';
			document.getElementById("liveMessage").setAttribute("style", "display: none;");}, 3000);
	}
	else {
		$("#darkmode").attr("aria-pressed", "false");
		$("body, main, h1").removeAttr("style");
			document.getElementById("liveMessage").removeAttribute("style");
			document.getElementById("liveMessage").innerHTML = "Light Mode enabled.";
			setTimeout(function() {
			document.getElementById('liveMessage').innerHTML = '';
			document.getElementById("liveMessage").setAttribute("style", "display: none;");}, 3000);
	}
}