window.onclick = function(event) {
    if (event.target.classList.contains("btn")) {
        var elems = document.getElementsByClassName(event.target.classList[0]);
        for (let elem of elems) {
            if (event.target == elem) {
                if (elem.nextElementSibling.style.display == "block") {
                    elem.nextElementSibling.style.display = "none";
                } else {
                    elem.nextElementSibling.style.display = "block";
                }
            } else {
                elem.nextElementSibling.style.display = "none";
            }
        }
    } else {
        var elems = document.getElementsByClassName("btn");
        for (let elem of elems) {
            elem.nextElementSibling.style.display = "none";
        }
    }
}