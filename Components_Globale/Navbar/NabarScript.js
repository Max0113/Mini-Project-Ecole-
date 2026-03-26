function setupMobileNav() {
    const nav = document.getElementById("nav");
    const icon = document.getElementById("icon");

    if (!nav || !icon) return;

    let isOpen = false;

    const setState = (open) => {
        isOpen = open;
        nav.classList.toggle("active", isOpen);
        nav.classList.toggle("noactive", !isOpen);
    };

    setState(false);

    icon.addEventListener("click", () => {
        setState(!isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setState(false));
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            setState(false);
        }
    });
}

setupMobileNav();
