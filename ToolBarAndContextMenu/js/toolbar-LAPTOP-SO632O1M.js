function handleArrowKeys(event) {
    let keyPressedByUser = event.key;
    let currentActiveButton = event.target;
    
    if(keyPressedByUser === "ArrowLeft") {
        //move left
        if(currentActiveButton.getAttribute("id") === ) {
            document.getElementById("right").removeAttribute("tabindex");
            document.getElementById("right").focus();
            currentActiveButton.setAttribute("tabindex", "-1");
        } else {
            let previousButton = currentActiveButton.previousSibling;
            let dbg = document.getElementById("debug");
            dbg.innerHTML = previousButton.tagName;
            currentActiveButton.removeAttribute("tabindex");
            previousButton.focus();
            currentActiveButton.setAttribute("tabindex", "-1");
        }

    } else if(keyPressedByUser === "ArrowRight") {
        //move right
    }
    

}
