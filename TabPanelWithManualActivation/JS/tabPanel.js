var keyPressedByUser;
var currentTab;
var tab;
var activePanel;
var panel;

function handleArrowKeys(event)
{
	keyPressedByUser = event.key;
	let currentActiveTab = event.target;
	activePanel = document.querySelector("#panels [tabindex='0']").id;
	let dbg = document.getElementById("debug");

	if (keyPressedByUser === "Enter")
{
			t = ["tab1", "tab2", "tab3"];
			for (let i=0; i<t.length; i++)
			{
				let x = document.getElementById(t[i]);
				x.setAttribute("tabindex", "-1");
				x.removeAttribute("aria-selected");
				x.removeAttribute("style");
			}

			document.getElementById(tab).setAttribute("tabindex", "0");
			document.getElementById(tab).focus();
			document.getElementById(tab).setAttribute("aria-selected", "true");
			document.getElementById(tab).setAttribute("style", "background-color: #000020;");

			document.getElementById(activePanel).setAttribute("tabindex", "-1");
			document.getElementById(activePanel).setAttribute("style", "display: none;");
			document.getElementById(panel).removeAttribute("style");
			document.getElementById(panel).setAttribute("tabindex", "0");
	}
	else if (keyPressedByUser === "ArrowLeft")
	{
		if (currentActiveTab.getAttribute("id") === "tab1")
		{
		//Changing Tabs
			tab = "tab3";
			document.getElementById(tab).setAttribute("aria-selected", "false");
			document.getElementById(tab).focus();
			document.getElementById(tab).focus();

			panel = "panel3";
		}
		else {
			tab = currentActiveTab.previousElementSibling.id;
			document.getElementById(tab).focus();
			document.getElementById(tab).setAttribute("aria-selected", "false");

			panel = document.getElementById(activePanel).previousElementSibling.id;
		}
	}
	else if(keyPressedByUser === "ArrowRight")
	{
		//move right
		if (currentActiveTab.getAttribute("id") === "tab3")
		{
			tab = "tab1";
			document.getElementById(tab).focus();
			document.getElementById(tab).setAttribute("aria-selected", "false");

			panel = "panel1";
		}
		else {
			tab = currentActiveTab.nextElementSibling.id;

			document.getElementById(tab).focus();
			document.getElementById(tab).setAttribute("aria-selected", "false");

			panel = document.getElementById(activePanel).nextElementSibling.id;
		}
	}
	currentTab = currentActiveTab;
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