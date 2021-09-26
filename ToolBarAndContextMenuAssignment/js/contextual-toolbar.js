function handleRightClick(e) {
    e.preventDefault();
    let toolbar = document.getElementById("toolbar");
    toolbar.classList.remove("disappeared");
    toolbar.classList.add("appeared");
    document.getElementById("left").focus();
}
function handleArrowKeys(event) {
    let keyPressedByUser = event.key;
    let currentActiveButton = event.target;
    
    if(keyPressedByUser === "Escape") {
    let toolbar = document.getElementById("toolbar");
    toolbar.classList.remove("appeared");
    toolbar.classList.add("disappeared");
    document.querySelector("body > h1").focus();
    }
    else if(keyPressedByUser === "ArrowLeft") {
        //move left
        if(currentActiveButton.getAttribute("id") === "left") {
            document.getElementById("right").removeAttribute("tabindex");
            document.getElementById("right").focus();
            currentActiveButton.setAttribute("tabindex", "-1");
        } else {
            let previousButton = currentActiveButton.previousElementSibling;
            //let dbg = document.getElementById("debug");
            //dbg.innerHTML = previousButton.tagName;
            previousButton.removeAttribute("tabindex");
            previousButton.focus();
            currentActiveButton.setAttribute("tabindex", "-1");
        }

    } else if(keyPressedByUser === "ArrowRight") {
        //move right
        if(currentActiveButton.getAttribute("id") === "right") {
            document.getElementById("left").removeAttribute("tabindex");
            document.getElementById("left").focus();
            currentActiveButton.setAttribute("tabindex", "-1");
        } else {
            let nextButton = currentActiveButton.nextElementSibling;
            nextButton.removeAttribute("tabindex");
            nextButton.focus();
            currentActiveButton.setAttribute("tabindex", "-1");
        }

    }
    

}