const icon = document.getElementById("icon")

icon.addEventListener("click", () => {
    document.body.classList.toggle("light-theme")
    icon.src = icon.getAttribute("src") === "images/sun-solid-full.svg" ? "images/moon-solid-full.svg" : "images/sun-solid-full.svg";
})