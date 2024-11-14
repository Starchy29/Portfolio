"use strict";

window.onload = init;

class ProjectData {
    constructor(div, image, gif) {
        this.div = div;
        this.image = image;
        this.gif = gif;
    }
}

let projects;

function init() {
    projects = [
        new ProjectData(document.querySelector("#asteroid div img"), "media/asteroid rush screenshot.png", "media/asteroid clip.gif"),
        new ProjectData(document.querySelector("#lonely div img"), "media/lonely space screenshot.png", "media/lonely space clip.gif"),
        new ProjectData(document.querySelector("#cauldron div img"), "media/cauldron screenshot.png", "media/cauldron clip.gif"),
        new ProjectData(document.querySelector("#chameleon div img"), "media/chameleon screenshot.png", "media/chameleon clip.gif"),
        new ProjectData(document.querySelector("#morph-leak div img"), "media/morph leak gameplay.PNG", "media/morph leak clip.gif")
    ];

    projects.forEach((project) => {
        project.div.onmouseenter = () => { OnHover(project); };
    });
}

// makes the hovered project become a gif and the other projects become images
function OnHover(hovered) {
    projects.forEach((project) => {
        project.div.src = (project == hovered ? project.gif : project.image);
    });
}