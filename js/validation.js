// =============================================
// FORM VALIDATION - 18 Karat Nails
// Validates booking form fields before submission
// =============================================

function validateForm() {
    let isValid = true;

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));

    // Validate First Name
    if (firstName === '' || firstName.length < 2) {
        document.getElementById('firstNameError').classList.add('show');
        document.getElementById('firstName').classList.add('error');
        isValid = false;
    }

    // Validate Last Name
    if (lastName === '' || lastName.length < 2) {
        document.getElementById('lastNameError').classList.add('show');
        document.getElementById('lastName').classList.add('error');
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.add('show');
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    // Validate Phone (10-12 digits)
    const phoneRegex = /^[0-9]{10,12}$/;
    if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
        document.getElementById('phoneError').classList.add('show');
        document.getElementById('phone').classList.add('error');
        isValid = false;
    }

    // Validate Service
    if (service === '') {
        document.getElementById('serviceError').classList.add('show');
        document.getElementById('service').classList.add('error');
        isValid = false;
    }

    // Success message
    if (isValid) {
        alert('✅ Booking submitted! We\'ll contact you within 24 hours.');
    }

    return false; // Prevent actual form submission
}