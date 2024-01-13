"use strict";

window.onload = init;

function init() {
    document.querySelector("#asteroid div img").onmouseenter = () => { OnHover("asteroid"); };
    document.querySelector("#lonely div img").onmouseenter = () => { OnHover("lonely"); };
    document.querySelector("#chameleon div img").onmouseenter = () => { OnHover("chameleon"); };
    document.querySelector("#morph-leak div img").onmouseenter = () => { OnHover("morph leak"); };
    document.querySelector("#human-busters div img").onmouseenter = () => { OnHover("human busters"); };
    document.querySelector("#gravity div img").onmouseenter = () => { OnHover("gravity"); };
}

function OnHover(game) {
    let asteroidSrc = "media/asteroid rush screenshot.png";
    let lonelySrc = "media/lonely space screenshot.png";
    let chamSrc = "media/chameleon screenshot.png";
    let morphSrc = "media/morph leak gameplay.PNG";
    let busterSrc = "media/human busters gameplay.PNG";
    let gravitySrc = "media/gravity screenshot.PNG";

    switch(game) {
        case "asteroid":
            if(document.querySelector("#asteroid div img").src.includes(".gif")) {
                return;
            }
            asteroidSrc = "media/asteroid clip.gif";
            break;

        case "lonely":
            if(document.querySelector("#lonely div img").src.includes(".gif")) {
                return;
            }
            lonelySrc = "media/lonely space clip.gif";
            break;

        case "chameleon":
            if(document.querySelector("#chameleon div img").src.includes(".gif")) {
                return;
            }
            chamSrc = "media/chameleon clip.gif";
            break;

        case "morph leak":
            if(document.querySelector("#morph-leak div img").src.includes(".gif")) {
                return;
            }
            morphSrc = "media/morph leak clip.gif";
            break;

        case "human busters":
            if(document.querySelector("#human-busters div img").src.includes(".gif")) {
                return;
            }
            busterSrc = "media/human busters clip.gif";
            break;

        case "gravity":
            if(document.querySelector("#gravity div img").src.includes(".gif")) {
                return;
            }
            gravitySrc = "media/Gravity Clip.gif";
            break;
    }

    document.querySelector("#asteroid div img").src = asteroidSrc;
    document.querySelector("#lonely div img").src = lonelySrc;
    document.querySelector("#chameleon div img").src = chamSrc;
    document.querySelector("#morph-leak div img").src = morphSrc;
    document.querySelector("#human-busters div img").src = busterSrc;
    document.querySelector("#gravity div img").src = gravitySrc;
}