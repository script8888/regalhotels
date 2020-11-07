var acc = document.getElementsByClassName("jdAccordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("jdActive");
        var jdPanel = this.nextElementSibling;
        if (jdPanel.style.maxHeight) {
            jdPanel.style.maxHeight = null;
        } else {
            jdPanel.style.maxHeight = jdPanel.scrollHeight + "px";
        }
    });
}

