export function NavbarPrincipal(index) {
    return `
        <header class="site-header">
                    <div class="logo">
                    <img src="../Source/Logo.png" alt="Atlas Drive" />
                    <h1 class="logo-title">Atlas Drive</h1>
                </div>
                <nav>
                    <ul class="nav-list">
                        <li><a href="/Page_home/index.html" class="${index == "Home" ? "is-active" : ""}">Home</a></li>
                        <li><a href="/Page_Cars/ViewCars/index.html" class="${index == "Cars" ? "is-active" : ""}">Cars</a></li>
                        <li><a href="/Page_Support/index.html" class="${index == "Support" ? "is-active" : ""}">Support</a></li>
                        <li><a href="/Page_About/index.html" class="${index == "About" ? "is-active" : ""}">About</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="btn btn-secondary">Login</button>
                <button class="btn btn-primary">Sgin up</button>
            </div>
        </header>
    `;
}

export function NavbarSecondary(index = "Cars") {
    return `
        <header class="site-header">
            <div class="site-header-inner">
                <div class="header-left">
                    <div class="logo">
                        <img src="../../Source/Logo.png" class="logo-image" alt="Atlas Drive" />
                        <h1 class="logo-title">Atlas Drive</h1>
                    </div>
                    <nav>
                        <ul class="nav-list">
                            <li><a href="../../Page_home/index.html" class="${index == "Home" ? "is-active" : ""}">Home</a></li>
                            <li><a href="../../Page_Cars/ViewCars/index.html" class="${index == "Cars" ? "is-active" : ""}">Cars</a></li>
                            <li><a href=\"../../Page_Support/index.html\" class="${index == "Support" ? "is-active" : ""}">Support</a></li>
                            <li><a href="../../Page_About/index.html" class="${index == "About" ? "is-active" : ""}">About</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header-right">
                    <div class="header-buttons">
                        <button class="icon-button">
                            <i class="fa-regular fa-bell"></i>
                        </button>
                        <button class="icon-button">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div class="header-divider"></div>
                    <div class="profile">
                        <div class="profile-meta">
                            <div class="profile-name">Alex Johnson</div>
                            <div class="profile-role">Premium Member</div>
                        </div>
                        <img src="../../Source/Image+Border.png" alt="Profile" class="profile-avatar" />
                    </div>
                </div>
            </div>
        </header>
    `;
}
