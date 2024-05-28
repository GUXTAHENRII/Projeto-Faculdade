const form = document.querySelector('.mt-4'); // Select the form element

// Função para validar o campo de e-mail
function validateEmail(emailInput) {
  const existingError = emailInput.parentElement.querySelector('.invalid-feedback');
  if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailInput.classList.add('is-invalid');
    if (!existingError) {
      const emailError = document.createElement('div');
      emailError.classList.add('invalid-feedback');
      emailError.textContent = 'Por favor, insira um email válido.';
      emailInput.parentElement.appendChild(emailError);
    }
    return false;
  } else {
    emailInput.classList.remove('is-invalid');
    if (existingError) {
      existingError.remove();
    }
    return true;
  }
}

// Função para validar o campo de senha
function validatePassword(passwordInput) {
  const existingError = passwordInput.parentElement.querySelector('.invalid-feedback');
  if (passwordInput.value.trim() === '') {
    passwordInput.classList.add('is-invalid');
    if (!existingError) {
      const passwordError = document.createElement('div');
      passwordError.classList.add('invalid-feedback');
      passwordError.textContent = 'Por favor, insira uma senha.';
      passwordInput.parentElement.appendChild(passwordError);
    }
    return false;
  } else {
    passwordInput.classList.remove('is-invalid');
    if (existingError) {
      existingError.remove();
    }
    return true;
  }
}

// Função para validar a aceitação dos termos e condições
function validateTerms(termsCheckbox) {
  const existingError = termsCheckbox.parentElement.querySelector('.text-danger');
  if (!termsCheckbox.checked) {
    if (!existingError) {
      const termsError = document.createElement('span');
      termsError.classList.add('text-danger', 'd-block');
      termsError.textContent = 'Por favor, aceite os termos e condições.';
      termsCheckbox.parentElement.appendChild(termsError);
    }
    return false;
  } else {
    if (existingError) {
      existingError.remove();
    }
    return true;
  }
}

// Função para validar o formulário como um todo
function validateForm(event) {
  event.preventDefault(); // Prevent default form submission

  const emailInput = document.getElementById('exampleInputEmail1');
  const passwordInput = document.getElementById('exampleInputPassword1');
  const termsCheckbox = document.getElementById('customCheck11');

  const isEmailValid = validateEmail(emailInput);
  const isPasswordValid = validatePassword(passwordInput);
  const areTermsAccepted = validateTerms(termsCheckbox);

  if (isEmailValid && isPasswordValid && areTermsAccepted) {
    console.log('Form submitted successfully!'); // Replace with your submission logic
  }
}

// Adiciona o ouvinte de evento para a validação do formulário
form.addEventListener('submit', validateForm);