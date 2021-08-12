/* HTML Elements */
const elements = {
    form: document.getElementById('contact-form'),
    typeRadios: document.querySelectorAll("input[type=radio][name=type]"),
    rate: {
        container: document.getElementById('rate-container'),
        input: document.getElementById("rate-input"),
    }
}

/* Methods */
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(elements.form);
    const data = Object.fromEntries(formData.entries());

    const validator = new Validator(data, {
        postalcode: {
            type: "regex",
            pattern: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
        },
    });
    if (validator.valid()) {
        this.submit();
    }

}

function handleRadioChange() {
    if (this.value === "hiring") {
        elements.rate.container.style.display = "block";
        elements.rate.input.setAttribute("required", "");
    } else {
        elements.rate.container.style.display = "none";
        elements.rate.input.removeAttribute("required");
    }
}

/* Event Listeners */
elements.form.addEventListener("submit", handleFormSubmit);
elements.typeRadios.forEach(radio => radio.addEventListener("change", handleRadioChange));