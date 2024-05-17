const form = document.querySelector('.mt-4'); // Select the form element

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  let isValid = true; // Flag to track validation status

  // Check Nome completo (Full Name)
  const fullNameInput = document.getElementById('exampleInputEmail1');
  if (fullNameInput.value.trim() === '') {
    isValid = false;
    fullNameInput.classList.add('is-invalid'); // Add Bootstrap class for error styling
    // Add error message near the input (replace with your desired message)
    const fullNameError = document.createElement('div');
    fullNameError.classList.add('invalid-feedback');
    fullNameError.textContent = 'Por favor, preencha o seu nome completo.';
    fullNameInput.parentElement.appendChild(fullNameError);
  } else {
    fullNameInput.classList.remove('is-invalid'); // Remove error styling if corrected
    // Remove error message if previously added
    const existingError = fullNameInput.parentElement.querySelector('.invalid-feedback');
    if (existingError) {
      existingError.remove();
    }
  }

  // Check Email
  const emailInput = document.getElementById('exampleInputEmail2');
  if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('is-invalid');
    // Add error message (replace with your desired message)
    const emailError = document.createElement('div');
    emailError.classList.add('invalid-feedback');
    emailError.textContent = 'Por favor, insira um email válido.';
    emailInput.parentElement.appendChild(emailError);
  } else {
    emailInput.classList.remove('is-invalid');
    // Remove error message if corrected
    const existingError = emailInput.parentElement.querySelector('.invalid-feedback');
    if (existingError) {
      existingError.remove();
    }
  }

  // Check Password (basic check for empty password)
  const passwordInput = document.getElementById('exampleInputPassword1');
  if (passwordInput.value.trim() === '') {
    isValid = false;
    passwordInput.classList.add('is-invalid');
    // Add error message (replace with your desired message)
    const passwordError = document.createElement('div');
    passwordError.classList.add('invalid-feedback');
    passwordError.textContent = 'Por favor, insira uma senha.';
    passwordInput.parentElement.appendChild(passwordError);
  } else {
    passwordInput.classList.remove('is-invalid');
    // Remove error message if corrected
    const existingError = passwordInput.parentElement.querySelector('.invalid-feedback');
    if (existingError) {
      existingError.remove();
    }
  }

  // Check Terms and Conditions acceptance
  const termsCheckbox = document.getElementById('customCheck1');
  if (!termsCheckbox.checked) {
    isValid = false;
    // Add error message near the checkbox (replace with your desired message)
    const termsError = document.createElement('span');
    termsError.classList.add('text-danger', 'd-block');
    termsError.textContent = 'Por favor, aceite os termos e condições.';
    termsCheckbox.parentElement.appendChild(termsError);
  } else {
    // Remove error message if previously added
    const existingError = termsCheckbox.parentElement.querySelector('.text-danger');
    if (existingError) {
      existingError.remove();
    }
  }

  if (isValid) {
    // Form validation successful, submit the form using your preferred method (e.g., AJAX)
    console.log('Form submitted successfully!'); // Replace with your submission logic
  }
});
