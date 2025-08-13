window.onclick = function(event) {
    let navbar = document.getElementById("navbar");
    navbar.querySelectorAll("ul").forEach((menu) => {
        if (Array.prototype.slice.call(navbar.getElementsByClassName("menu")).includes(menu)) return;
        if (menu.isEqualNode(event.target.parentElement.parentElement)) return;

        if (menu.isEqualNode(event.target.nextSibling)) {
            if (menu.style.display == "none") {
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        } else {
            menu.style.display = "none";
        }
    });
}

let navbar = document.getElementById("navbar");

let links = {
    "Home": "/index.html",
    "Bucket List": {
        "Q1": "/bucketlist/q1.html",
        "Q2": "/bucketlist/q2.html",
        "Q3": "/bucketlist/q3.html",
        "Q4": "/bucketlist/q4.html",
    },
    "Community Service": "/service.html",
    "Awards": "/awards.html",
    "Projects": "/projects.html",
    "Work History": "/work.html",
    "Resume": "/resume.pdf/"
}

let maxDepth = 0;

function parseSubMenu(list, level, links) {
    for (let title in links) {
        let link = document.createElement("a");
        link.innerText = title;
        link.classList.add("btn");

        let li = document.createElement("li");

        if (typeof links[title] == "string") {
            link.href = links[title];
        } else {
            if (level + 1 > maxDepth) maxDepth = level + 1;

            link.href = "#";

            let subList = document.createElement("ul");
            subList.classList.add(`sub${level + 1}`);
            parseSubMenu(subList, level + 1, links[title]);

            li.insertAdjacentElement("beforeend", subList);
        }

        li.insertAdjacentElement("afterbegin", link);

        list.insertAdjacentElement("beforeend", li);
    }
}

let menu = document.createElement("ul");
menu.classList.add("menu");
menu.style.backgroundColor = "blue";
menu.style.boxShadow = "0 0 10px 0 #000";
menu.style.height = "100%";
menu.style.width = "100%";
menu.style.float = "left";
menu.style.listStyleType = "none";
menu.style.padding = "0";
menu.style.margin = "0";
parseSubMenu(menu, 0, links);

let elems = menu.querySelectorAll("a");
elems.forEach((elem) => {
    elem.style.display = "inline-block";
    elem.style.padding = "1vh 20px";
    elem.style.borderRadius = "5px";
    elem.style.height = "4vh";
    elem.style.width = "calc(100% - 40px)";
    elem.style.color = "yellow";
    elem.style.fontSize = "3vh";
    elem.style.backgroundColor = "blue";
    elem.style.borderBottom = "3px solid black";
    elem.style.textDecoration = "none";

    elem.onpointerover = (event) => {
        elem.style.textDecoration = "underline";
    }

    elem.onpointerleave = (event) => {
        elem.style.textDecoration = "none";
    }
});

for (let i = 1; i <= maxDepth; i++) {
    let submenus = menu.querySelectorAll(`.sub${i}`);
    submenus.forEach((submenu) => {
        submenu.style.position = "absolute";
        submenu.style.display = "none";
        submenu.style.boxShadow = "0 0 10px 0 #000";
        submenu.style.width = "15vw";
        submenu.style.listStyleType = "none";
        submenu.style.marginLeft = "calc(15vw + 3px)";
        submenu.style.marginTop = "-6.5vh";
        submenu.style.padding = "0";
        submenu.style.zIndex = "10";

        let sublinks = submenu.querySelectorAll(`a`);
        sublinks.forEach(sublink => {
            sublink.style.display = "block";
            sublink.style.position = "relative";
            sublink.style.boxShadow = "0 0 10px 0 #000";
        });
    });
}

navbar.insertAdjacentElement("beforeend", menu);
navbar.style.float = "left";
navbar.style.width = "15vw";
navbar.style.height = "100vh";
