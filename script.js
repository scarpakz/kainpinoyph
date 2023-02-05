toggleContactModal = () => {
    const contactWrapper = document.getElementsByClassName("kp-contact-wrapper");
    const contactInfo = document.getElementsByClassName("kp-contact-info");
    const contactFirstStep = document.getElementsByClassName("kp-first-step");
    if (contactWrapper[0].classList.contains("hidden")) {
        contactWrapper[0].classList.remove("hidden")
        document.body.style.overflow = 'hidden';
    } else {
        contactWrapper[0].classList.add("hidden")
        document.body.style.overflow = 'visible';
        contactInfo[0].classList.add("hidden")
        contactFirstStep[0].classList.remove("hidden")
    }
}

submitContactStep = () => {
    const contactInfo = document.getElementsByClassName("kp-contact-info");
    const contactFirstStep = document.getElementsByClassName("kp-first-step");
    if (contactInfo[0].classList.contains("hidden")) {
        contactInfo[0].classList.remove("hidden")
        contactFirstStep[0].classList.add("hidden")
    } else {
        contactInfo[0].classList.add("hidden")
        contactFirstStep[0].classList.remove("hidden")
    }
}