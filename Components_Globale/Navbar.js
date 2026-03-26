export function NavbarPrincipal(index) {
    return `
        <div class="bg-nav">
        <header class="site-header">
                <div class="logo">
                    <img src="/Source/Logo.png" alt="Atlas Drive" />
                    <h1 class="logo-title">Atlas Drive</h1>
                </div>
                <nav id="nav" class="noactive">
                    <ul class="nav-list">
                        <li><a href="/Page_home/index.html" class="${index == "Home" ? "is-active" : ""}">Home</a></li>
                        <li><a href="/Page_Cars/ViewCars/index.html" class="${index == "Cars" ? "is-active" : ""}">Cars</a></li>
                        <li><a href="/Page_Support/index.html" class="${index == "Support" ? "is-active" : ""}">Support</a></li>
                        <li><a href="/Page_About/index.html" class="${index == "About" ? "is-active" : ""}">About</a></li>
                        <div class="header-actionsflex">
                            <button class="btn btn-secondary">Login</button>
                            <button class="btn btn-primary">Sgin up</button>
                        </div>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="btn btn-secondary">Login</button>
                    <button class="btn btn-primary">Sgin up</button>
                </div>
                <div class="icon-f">
                    <i id="icon" class="fa-solid fa-bars icon-nav"></i>
                </div>
        </header>
    </div>
    `;
}

