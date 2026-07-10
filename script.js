document.addEventListener("DOMContentLoaded", () => {

    // 1. AAPKE PAAS JO HTML FILES SACH MEIN BANAI HUI HAIN, UNHEIN YAHA LIKHO:
    // (Jo file is list mein nahi hogi, uspar click karte hi direct MAC POPUP aayega)
    // ==================== NEW UPGRADED CODE START ====================
    // 1. Files ki list jismein hum sirf unique file names track kar rahe hain
    const AVAILABLE_FILES = [
        "index.html",
        "quiz.html",
        "questions-answers.html",
        "notes.html",
        "certificate.html",
        "safety-practice-and-hand-tools.html",
        "basic-workshop-practice.html",
        "wires-joints-soldering-and-underground-cables.html",
        "basic-electrical-practice.html",
        "magnetism-and-capacitors.html",
        "ac-circuits.html",
        "cells-and-batteries.html",
        "dc-generators.html",
        "wiring-practice.html",
        "wiring-installation-earthing.html",
        "illumination.html",
        "measuring-instruments.html",
        "three-phase.html",
        "Domestic-Appliances.html",
        "what-is-ac.html",
        "what-is-moter.html"
    ];

    // 2. PREMIUM CARD CLICK CONTROLLER (Folder independent checking logic)
    const appLinks = document.querySelectorAll('.app-link');
    appLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            let targetUrl = link.getAttribute('href');

            // Agar link internal anchor (#) hai to default chalne do
            if (targetUrl.startsWith('#')) return;

            e.preventDefault();

            // Path se sirf file ka naam nikalna (e.g., "wiring-installation-earthing.html")
            let targetFileName = targetUrl.split('/').pop();

            // Check karna ki file list me hai ya nahi
            let isFileReady = AVAILABLE_FILES.includes(targetFileName);

            if (isFileReady) {
                // Agar file ready hai to direct redirect karo
                window.location.href = targetUrl;
            } else {
                // Agar ready nahi hai to Mac-style popup dikhao
                let displayTitle = targetFileName.replace('.html', '').replace(/-/g, ' ').toUpperCase();

                if (typeof modalMessage !== 'undefined' && typeof modal !== 'undefined' && modalMessage && modal) {
                    modalMessage.innerHTML = `Bhai, <strong>"${displayTitle}"</strong> module par abhi development team ka kaam chal rha hai!<br><br><span style="color: #64748b; font-size: 11px; font-family: monospace;">[System Status: Background Code Injecting...]</span>`;
                    modal.classList.add("open");
                }
            }
        });
    });
    // ==================== NEW UPGRADED CODE END ====================
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
            // NAYA CODE: Sirf file ka naam compare karne ke liye
            let targetFileName = targetUrl.split('/').pop();

            // Pata lagao ki kya yeh file name hamari AVAILABLE_FILES ki list me hai
            let isFileReady = AVAILABLE_FILES.some(file => {
                let listFileName = file.split('/').pop();
                return listFileName === targetFileName;
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