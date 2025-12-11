const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Get Input Fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        // Error Elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");

        // Reset styles
        [name, email, subject, message].forEach(field => field.classList.remove("is-invalid"));
        [nameError, emailError, subjectError, messageError].forEach(err => err.classList.add("d-none"));

        // Name validation
        if (name.value.trim() === "") {
            name.classList.add("is-invalid");
            nameError.classList.remove("d-none");
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add("is-invalid");
            emailError.classList.remove("d-none");
            isValid = false;
        }

        // Subject validation
        if (subject.value === "") {
            subject.classList.add("is-invalid");
            subjectError.classList.remove("d-none");
            isValid = false;
        }

        // Message validation
        if (message.value.trim() === "") {
            message.classList.add("is-invalid");
            messageError.classList.remove("d-none");
            isValid = false;
        }

        // If valid, show success message
        if (isValid) {
            document.getElementById("successMessage").classList.remove("d-none");
            form.reset();

            setTimeout(() => {
                document.getElementById("successMessage").classList.add("d-none");
            }, 3000);
        }
    });



