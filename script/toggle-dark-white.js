// Darkmode / Lightmode Switch

const browservalue = localStorage.getItem("theme")
    console.log("LocalStorage: " + browservalue)
    if(browservalue === "dark"){
        document.getElementById("darkwhiteswitchimg").src = "img/icons/switch-to-light.png"
    }


document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#toggle-theme");
    if (!toggle) return;
    const saved = localStorage.getItem("theme") || "light";
    document.body.dataset.theme = saved;
    toggle.addEventListener("click", () => {
        const next = document.body.dataset.theme === "light" ? "dark" : "light";
        console.log(next)
        if (next === "dark"){
            document.getElementById("darkwhiteswitchimg").src = "img/icons/switch-to-light.png"
        }else{
            document.getElementById("darkwhiteswitchimg").src = "img/icons/switch-to-dark.png"
        }
        document.body.dataset.theme = next;
        localStorage.setItem("theme", next);
    });
});