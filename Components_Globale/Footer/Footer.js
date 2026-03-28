export function Footer(color) {
    return`
            <footer class="site-footer ${color ? "dark-tem" : "while-tem"}">
                <div class="footer-grid">
                    <div>
                        <div class="footer-brand">
                            <img src="/Source/Logo.png" alt="Atlas Drive logo" class="footer-logo">
                            <h1 class="footer-title ${color ? "while-col" : "dark-col"}">Atlas Drive</h1>
                        </div>
                        <p class="footer-text">Premier luxury transportation services for corporate and private clients. Reliability you can trust, comfort you deserve.</p>
                    </div>
                    <div>
                        <h4 class="footer-heading ${color ? "while-col" : "dark-col"}">Services</h4>
                        <ul class="footer-list">
                            <li>Airport Transfers</li>
                            <li>Corporate Travel</li>
                            <li>Special Events</li>
                            <li>Private Tours</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="footer-heading ${color ? "while-col" : "dark-col"}">Company</h4>
                        <ul class="footer-list">
                            <li>About Us</li>
                            <li>Our Fleet</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="footer-heading ${color ? "while-col" : "dark-col"}">Contact</h4>
                        <ul class="footer-list">
                            <li><i class="fa-regular fa-envelope"></i> info@atlasdrive.com</li>
                            <li><i class="fa-solid fa-phone"></i> +212 XXX XXX XX</li>
                            <li><i class="fa-solid fa-location-dot"></i> 5th Maroc, Agadir</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p class="footer-copy">&copy; 2024 Atlas Drive Global Transportation. All rights reserved.</p>
                    <div class="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </footer>
    `;
}

export function FooterShort(color) {
    return`
            <footer class="site-footer ${color ? "dark-tem" : "while-tem"}">
                <div class="footer-bottom">
                    <p class="footer-copy">&copy; 2024 Atlas Drive Global Transportation. All rights reserved.</p>
                    <div class="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </footer>
    `;
}