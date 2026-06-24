document.addEventListener("DOMContentLoaded", () => {

    // 1. AAPKE PAAS JO HTML FILES SACH MEIN BANAI HUI HAIN, UNHEIN YAHA LIKHO:
    // (Jo file is list mein nahi hogi, uspar click karte hi direct MAC POPUP aayega)
    const AVAILABLE_FILES = [
        "index.html",
        "./quiz.html",
        "./questions-answers.html",
        "./notes.html",
        "./certificate.html",
        "./chapters/safety-practice-and-hand-tools.html", // Example ke liye jo files ready hain
        "./chapters/basic-workshop-practice.html"
    ];

    // 2. MOBILE NAVBAR HAMBURGER CONTROLLER
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Nav links par click karne ke baad menu band ho jaye
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });

    // 3. MASTER WATERPROOF LINK INTERCEPTOR (NO MORE BROWSER CRASH / CANNOT GET)
    const modal = document.getElementById("comingSoonModal");
    const okBtn = document.getElementById("okComingSoonBtn");
    const closeBtn = document.getElementById("closeComingSoonBtn");
    const modalMessage = document.getElementById("macModalMessage");

    // Saare dashboard tiles, syllabus rows, aur components ke links ko select karo
    const allActionLinks = document.querySelectorAll("a.app-link, a.premium-row-btn, a.dash-tile-action, .hero-buttons a");

    allActionLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetUrl = this.getAttribute("href");

            // Agar section link h (jaise #about, #home) ya blank h, to normal chalne do
            if (!targetUrl || targetUrl.startsWith("#")) return;

            // Default browser jump ko pehle hi block kar do
            e.preventDefault();

            // Sahi formatting ke liye path clean up check
            let cleanPath = targetUrl.replace('./', '');

            // Pata lagao ki file ready list me hai ya nahi
            let isFileReady = AVAILABLE_FILES.some(file => {
                let cleanFile = file.replace('./', '');
                return cleanFile === cleanPath;
            });

            if (isFileReady) {
                // Agar file hamari list mein hai, to open kar do
                window.location.href = targetUrl;
            } else {
                // Agar file nahi bani hai, to premium Mac popup window show karo
                let fileName = targetUrl.split('/').pop();
                let displayTitle = fileName.replace('.html', '').replace(/-/g, ' ').toUpperCase();

                if (modalMessage && modal) {
                    modalMessage.innerHTML = `Bhai, <strong>"${displayTitle}"</strong> module par abhi development team ka kaam chal rha hai!<br><br><span style="color: #64748b; font-size: 11px; font-family: monospace;">[System Status: Background Code Injecting...]</span>`;
                    modal.classList.add("open");
                }
            }
        });
    });

    // 4. POPUP CLOSE CONTROLLERS
    if (okBtn && modal) {
        okBtn.addEventListener("click", () => modal.classList.remove("open"));
    }
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("open");
        });
    }
});