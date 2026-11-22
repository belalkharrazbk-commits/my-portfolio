
// تحديث السنة تلقائياً في تذييل الصفحة
document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // تأثير ظهور الأقسام عند التمرير
    const sections = document.querySelectorAll(".section");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.1
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });

    } else {

        sections.forEach(function (section) {
            section.classList.add("visible");
        });

    }

    // التحقق من رابط واتساب
    const whatsappButton = document.querySelector(".whatsapp-btn");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            console.log("تم الضغط على زر التواصل عبر واتساب");
        });
    }

});
