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
