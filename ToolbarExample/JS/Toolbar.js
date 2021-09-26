function handleRightClick(event)
{
	event.preventDefault();
	document.getElementById("toolbar").removeAttribute("style");
	document.getElementById("tab1").focus();
}

function populatingMessageFrame()
{
	let msg = document.getElementById("msg").value;
	document.getElementById("messageFrame").innerHTML += msg;
	document.getElementById("messageFrame").setAttribute("tabindex", "0");
}

function handleArrowKeys(event)
{
	let keyPressedByUser = event.key;
	let currentActiveTab = event.target;
	if (keyPressedByUser === "Escape")
	{
		document.getElementById("toolbar").setAttribute("style", "display: none;");
	document.getElementById("messageFrame").focus();
	}
	else if (keyPressedByUser === "ArrowUp")
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
		}
		else {
			let previousTab = currentActiveTab.previousElementSibling;

			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected");
			currentActiveTab.setAttribute("style", "background-color: #000080;");
			previousTab.setAttribute("tabindex", "0");
			previousTab.focus();
			previousTab.setAttribute("aria-selected", "true");
			previousTab.setAttribute("style", "background-color: #000020;");
		}
	}
	else if(keyPressedByUser === "ArrowDown")
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
		}
		else {
			let nextTab = currentActiveTab.nextElementSibling;

			nextTab.setAttribute("tabindex", "0");
			nextTab.focus();
			nextTab.setAttribute("aria-selected", "true");
			nextTab.setAttribute("style", "background-color: #000020;");
			currentActiveTab.setAttribute("tabindex", "-1");
			currentActiveTab.removeAttribute("aria-selected");
			currentActiveTab.setAttribute("style", "background-color: #000080;");
		}
	}
}

//For Click events
$(document).ready(function()
{
		managingFocusOnClick();
		performingActions();
});

function performingActions()
{
	$("#tab1, #tab2, #tab3").click(function()
	{
		let tabs = ["tab1", "tab2", "tab3"];
		let clickedTab = this.id;

		if (clickedTab === "tab1") {
			document.getElementById("messageFrame").setAttribute("style", "text-align: left;");
		}
		else if (clickedTab === "tab2") {
			document.getElementById("messageFrame").setAttribute("style", "text-align: center;");
		}
		else {
			document.getElementById("messageFrame").setAttribute("style", "text-align: right;");
		}
	});
}


function managingFocusOnClick()
{
	$("#tab1, #tab2, #tab3").click(function()
	{
		let tabs = ["tab1", "tab2", "tab3"];
		let clickedTab = this.id;

		for (let i = 0; i < tabs.length; i++)
		{
			document.getElementById(tabs[i]).setAttribute("tabindex", "-1");
			document.getElementById(tabs[i]).removeAttribute("aria-selected");
			document.getElementById(tabs[i]).setAttribute("style", "background-color: #000080;");

				if (tabs[i] === clickedTab) {
				document.getElementById(clickedTab).setAttribute("tabindex", "0");
				document.getElementById(clickedTab).setAttribute("aria-selected", "true");
				document.getElementById(clickedTab).setAttribute("style", "background-color: #000020;");
			}
		}
	});
}
