const linkItems = document.querySelectorAll(".link-item");
const nav = document.querySelector(".nav-content");
const indicator = document.querySelector(".indicator");
const customCursor = document.querySelector(".custom-cursor");
const homepage = document.getElementById("homepage");
const body = document.body;

function setIndicatorPosition(activeItem) {
    const linkItemRect = activeItem.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const newLeftPosition = linkItemRect.left - navRect.left + linkItemRect.width / 2;
    indicator.style.left = `${newLeftPosition}px`;
}

function setActiveSection(targetName) {
    const targetDiv = document.querySelector(`div[data-name="${targetName}"]`);
    if (targetName === "homepage") {
        homepage.style.display = "block";
        document.querySelectorAll('div[data-name]').forEach((div) => {
            div.classList.remove("active");
        });
        body.classList.remove("scrollable");
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetDiv) {
        document.querySelectorAll('div[data-name]').forEach((div) => {
            div.classList.remove("active");
        });
        homepage.style.display = "none";
        targetDiv.classList.add("active");
        if (targetName === "projects") {
            body.classList.add("scrollable");
        } else {
            body.classList.remove("scrollable");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

window.addEventListener("load", () => {
    const lastActiveSection = localStorage.getItem("activeSection") || "homepage";
    const activeLinkItem = document.querySelector(`.link-item[data-target="${lastActiveSection}"]`);
    if (activeLinkItem) {
        activeLinkItem.classList.add("active");
        setIndicatorPosition(activeLinkItem);
        setActiveSection(lastActiveSection);
    }
});

linkItems.forEach((linkItem) => {
    linkItem.addEventListener("click", (e) => {
        e.preventDefault();

        const activeItem = document.querySelector(".link-item.active");
        if (activeItem) {
            activeItem.classList.remove("active");
        }
        linkItem.classList.add("active");
        setIndicatorPosition(linkItem);

        const targetName = linkItem.getAttribute("data-target");
        setActiveSection(targetName);
        localStorage.setItem("activeSection", targetName);
    });
});

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});