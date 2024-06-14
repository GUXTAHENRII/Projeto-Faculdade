const form = document.querySelector('.mt-4'); // Select the form element

// Função para validar o campo de nome completo
function validateFullName(fullNameInput) {
  const existingError = fullNameInput.parentElement.querySelector('.invalid-feedback');
  if (fullNameInput.value.trim() === '') {
    fullNameInput.classList.add('is-invalid'); // Adiciona a classe de erro do Bootstrap
    if (!existingError) {
      const fullNameError = document.createElement('div');
      fullNameError.classList.add('invalid-feedback');
      fullNameError.textContent = 'Por favor, preencha o seu nome completo.';
      fullNameInput.parentElement.appendChild(fullNameError);
    }
    return false;
  } else {
    fullNameInput.classList.remove('is-invalid'); // Remove a classe de erro se corrigido
    if (existingError) {
      existingError.remove();
    }
    return true;
  }
}

// Função para validar o campo de email
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
  event.preventDefault(); // Impede o envio padrão do formulário

  let isValid = true; // Flag para acompanhar o status de validação

  const fullNameInput = document.getElementById('exampleInputEmail1');
  const emailInput = document.getElementById('exampleInputEmail2');
  const passwordInput = document.getElementById('exampleInputPassword1');
  const termsCheckbox = document.getElementById('customCheck1');

  isValid = validateFullName(fullNameInput) && isValid;
  isValid = validateEmail(emailInput) && isValid;
  isValid = validatePassword(passwordInput) && isValid;
  isValid = validateTerms(termsCheckbox) && isValid;

  if (isValid) {
    form.submit(); // Submete o formulário se for válido
  }
}

// Adiciona o ouvinte de evento para a validação do formulário
form.addEventListener('submit', validateForm);