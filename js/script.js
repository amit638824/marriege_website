/* -------------------------------------------------------------
   Marriage Prosperity Puja - Interactive JS & WhatsApp Integration
   ------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    // Dynamic WhatsApp Phone Number (Client can replace with actual business number)
    const WHATSAPP_NUMBER = "919876543210"; 

    // Handle Quick Inquiry Form Submission
    const inquiryForm = document.getElementById("heroInquiryForm");
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const name = document.getElementById("userName").value.trim();
            const phone = document.getElementById("userPhone").value.trim();
            const rashi = document.getElementById("userRashi").value.trim() || "Not specified";
            const message = document.getElementById("userMessage").value.trim();

            if (!name || !phone) {
                alert("Please fill in your Name and WhatsApp Mobile Number.");
                return;
            }

            // Construct pre-filled WhatsApp message
            let waMessage = `*Namaste Pandit Ji,* %0A%0AI would like to consult & register for *Marriage Prosperity Puja (Vivah Samriddhi Puja)*.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Mobile:* ${encodeURIComponent(phone)}%0A*Rashi/Gotra:* ${encodeURIComponent(rashi)}`;
            
            if (message) {
                waMessage += `%0A*Details/Problem:* ${encodeURIComponent(message)}`;
            }

            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;
            
            // Show confirmation toast/alert & open WhatsApp
            const modalElement = document.getElementById("inquiryModal");
            if (modalElement) {
                const bsModal = bootstrap.Modal.getInstance(modalElement);
                if (bsModal) bsModal.hide();
            }

            window.open(waUrl, "_blank");
        });
    }

    // Direct Package Booking Buttons
    const packageBtns = document.querySelectorAll(".btn-book-package");
    packageBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const packageName = this.getAttribute("data-package") || "Marriage Puja Package";
            const waMessage = `*Namaste Pandit Ji,* %0A%0AI want to book the *${encodeURIComponent(packageName)}* for Marriage Prospects & Manglik Dosh Removal.%0A%0APlease guide me with available Muhurat dates and payment procedure.`;
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank");
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#" && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
