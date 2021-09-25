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
			document.getElementById("tab3").setAttribute("style", "background-color: #000020;");
			document.getElementById("tab3").focus();
			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected");
			currentActiveTab.setAttribute("style", "background-color: #000080;");

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
			currentActiveTab.setAttribute("style", "background-color: #000080;");
			previousTab.setAttribute("tabindex", "0");
			previousTab.focus();
			previousTab.setAttribute("aria-selected", "true");
			previousTab.setAttribute("style", "background-color: #000020;");

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
			document.getElementById("tab1").setAttribute("style", "background-color: #000020;");
			document.getElementById("tab1").focus();
			document.getElementById("tab1").setAttribute("aria-selected", "true");
			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected", "-1");
			currentActiveTab.setAttribute("style", "background-color: #000080;");

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
			nextTab.setAttribute("style", "background-color: #000020;");
			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected");
			currentActiveTab.setAttribute("style", "background-color: #000080;");

			//Changing The content of panel
			document.getElementById(activePanel).setAttribute("tabindex", "-1");
			document.getElementById(activePanel).setAttribute("style", "display: none;");
			document.getElementById(nextPanel).removeAttribute("style");
			document.getElementById(nextPanel).setAttribute("tabindex", "0");
		}
	}
}

//For Click events
$(document).ready(function()
{
	$("#tab1, #tab2, #tab3").click(function()
	{
		let tabs = ["tab1", "tab2", "tab3"];
	let panels = ["panel1", "panel2", "panel3"];
		let clickedTab = this.id;
		let dbg = document.getElementById("debug");

		for (let i = 0; i < tabs.length; i++)
		{
		document.getElementById(tabs[i]).setAttribute("tabindex", "-1");
		document.getElementById(tabs[i]).removeAttribute("aria-selected");
		document.getElementById(tabs[i]).setAttribute("style", "background-color: #000080;");
		document.getElementById(panels[i]).setAttribute("tabindex", "-1");
		document.getElementById(panels[i]).setAttribute("style", "display: none;");

			if (tabs[i] === clickedTab) {
			document.getElementById(clickedTab).setAttribute("tabindex", "0");
			document.getElementById(clickedTab).setAttribute("aria-selected", "true");
			document.getElementById(clickedTab).setAttribute("style", "background-color: #000020;");
			document.getElementById(panels[i]).setAttribute("tabindex", "0");
			document.getElementById(panels[i]).removeAttribute("style");
		}
		}
	});
});