function handleArrowKeys(event)
{
	let keyPressedByUser = event.key;
	let currentActiveTab = event.target;
	let activePanel = document.querySelector("#panels [tabindex='0']").id;
	let dbg = document.getElementById("debug");

	if (keyPressedByUser === "ArrowLeft")
	{
		if (currentActiveTab.getAttribute("id") === "tab1")
		{
		//Changing Tabs
			document.getElementById("tab3").setAttribute("tabindex", "0");
			document.getElementById("tab3").setAttribute("aria-selected", "true");
			document.getElementById("tab3").focus();
			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected");

		//Changing the content of Tab Panel
			document.getElementById(activePanel).setAttribute("tabindex", "-1");
			document.getElementById(activePanel).setAttribute("style", "display: none;");
			document.getElementById("panel3").removeAttribute("style");
			document.getElementById("panel3").setAttribute("tabindex", "0");
		}
		else {
			let previousTab = currentActiveTab.previousElementSibling;
			let previousPanel = document.getElementById(activePanel).previousElementSibling.id;


			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected");
			previousTab.setAttribute("tabindex", "0");
			previousTab.focus();
			previousTab.setAttribute("aria-selected", "true");

			//Changing The content of panel
			document.getElementById(activePanel).setAttribute("tabindex", "-1");
			document.getElementById(activePanel).setAttribute("style", "display: none;");
			document.getElementById(previousPanel).removeAttribute("style");
			document.getElementById(previousPanel).setAttribute("tabindex", "0");
		}
	}
	else if(keyPressedByUser === "ArrowRight")
	{
		//move right
		if (currentActiveTab.getAttribute("id") === "tab3")
		{
			document.getElementById("tab1").setAttribute("tabindex", "0");
			document.getElementById("tab1").focus();
			document.getElementById("tab1").setAttribute("aria-selected", "true");
			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected", "-1");

		//Changing the content of Tab Panel
			document.getElementById(activePanel).setAttribute("tabindex", "-1");
			document.getElementById(activePanel).setAttribute("style", "display: none;");
			document.getElementById("panel1").removeAttribute("style");
			document.getElementById("panel1").setAttribute("tabindex", "0");
		}
		else {
			let nextTab = currentActiveTab.nextElementSibling;
			let nextPanel = document.getElementById(activePanel).nextElementSibling.id;

			nextTab.setAttribute("tabindex", "0");
			nextTab.focus();
			nextTab.setAttribute("aria-selected", "true");
			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected");

			//Changing The content of panel
			document.getElementById(activePanel).setAttribute("tabindex", "-1");
			document.getElementById(activePanel).setAttribute("style", "display: none;");
			document.getElementById(nextPanel).removeAttribute("style");
			document.getElementById(nextPanel).setAttribute("tabindex", "0");
		}
	}
}


//Code for Dark Mode
$(document).ready(function()
{
	$("#darkmode").click(function()
	{
		let ariaPressedValue = $(this).attr("aria-pressed");
		
		if (ariaPressedValue === "false")
		{
			$(this).attr("aria-pressed", "true");
			$("body, main, h1").attr("style", "background-color: black; color: white;");
		}
		else {
			$(this).attr("aria-pressed", "false");
			$("body, main, h1").removeAttr("style");
		}
	});
});

