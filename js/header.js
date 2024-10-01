const linkItems = document.querySelectorAll(".link-item");
const nav = document.querySelector(".nav-content");
const indicator = document.querySelector(".indicator");
const customCursor = document.querySelector(".custom-cursor");

function setIndicatorPosition(activeItem) {
    const linkItemRect = activeItem.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const newLeftPosition = linkItemRect.left - navRect.left + linkItemRect.width / 2;
    indicator.style.left = `${newLeftPosition}px`;
}

window.addEventListener("load", () => {
    const activeItem = document.querySelector(".link-item.active");
    if (activeItem) {
        setIndicatorPosition(activeItem);
    }
});

linkItems.forEach((linkItem) => {
    linkItem.addEventListener("click", () => {
        const activeItem = document.querySelector(".link-item.active");
        if (activeItem) {
            activeItem.classList.remove("active");
        }
        linkItem.classList.add("active");
        setIndicatorPosition(linkItem);
    });
});

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});