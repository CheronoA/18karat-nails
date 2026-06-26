// =============================================
// FORM VALIDATION - 18 Karat Nails
// Validates booking form fields before submission
// =============================================

function validateForm() {
    let isValid = true;

    // ===== GET FORM VALUES =====
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;

    // ===== CLEAR PREVIOUS ERRORS =====
    document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));

    // ===== VALIDATE FIRST NAME =====
    // Must be at least 2 characters
    if (firstName === '' || firstName.length < 2) {
        document.getElementById('firstNameError').classList.add('show');
        document.getElementById('firstName').classList.add('error');
        isValid = false;
    }

    // ===== VALIDATE LAST NAME =====
    // Must be at least 2 characters
    if (lastName === '' || lastName.length < 2) {
        document.getElementById('lastNameError').classList.add('show');
        document.getElementById('lastName').classList.add('error');
        isValid = false;
    }

    // ===== VALIDATE EMAIL =====
    // Uses regex to check for valid email format (name@domain.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.add('show');
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    // ===== VALIDATE PHONE =====
    // Only allows 10-12 digits (removes any non-digit characters)
    const phoneRegex = /^[0-9]{10,12}$/;
    if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
        document.getElementById('phoneError').classList.add('show');
        document.getElementById('phone').classList.add('error');
        isValid = false;
    }

    // ===== VALIDATE SERVICE =====
    // Ensures user selected a service from the dropdown
    if (service === '') {
        document.getElementById('serviceError').classList.add('show');
        document.getElementById('service').classList.add('error');
        isValid = false;
    }

    // ===== SUCCESS MESSAGE =====
    // If all fields are valid, show confirmation alert
    if (isValid) {
        alert('✅ Booking submitted! We\'ll contact you within 24 hours.');
    }

    return false; // Prevents actual form submission (for demo purposes)
}