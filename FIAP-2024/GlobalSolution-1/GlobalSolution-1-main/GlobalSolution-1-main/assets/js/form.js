document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const telefoneInput = document.getElementById('telefone');
    const emailInput = document.getElementById('email');
    const assuntoInput = document.getElementById('assunto');

    telefoneInput.addEventListener('input', (event) => {
        let input = event.target.value.replace(/\D/g, ''); 
        input = input.substring(0, 11); 

        let formattedInput = '';

        if (input.length > 0) {
            formattedInput += '(' + input.substring(0, 2);
        }
        if (input.length > 2) {
            formattedInput += ') ' + input.substring(2, 7);
        }
        if (input.length > 7) {
            formattedInput += '-' + input.substring(7, 11);
        }

        event.target.value = formattedInput;
    });

    nameInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[0-9]/g, ''); 
    });

    form.addEventListener('submit', (event) => {
        let valid = true;

        if (nameInput.value.trim() === '') {
            valid = false;
            showError(nameInput, 'Por favor, insira seu nome.');
        } else {
            clearError(nameInput);
        }

        const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        if (!telefoneRegex.test(telefoneInput.value.trim())) {
            valid = false;
            showError(telefoneInput, 'Por favor, insira um telefone válido no formato (xx) xxxx-xxxx');
        } else {
            clearError(telefoneInput);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            valid = false;
            showError(emailInput, 'Por favor, insira um email válido.');
        } else {
            clearError(emailInput);
        }

        if (assuntoInput.value.trim() === '') {
            valid = false;
            showError(assuntoInput, 'Por favor, insira um assunto.');
        } else {
            clearError(assuntoInput);
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            displayConfirmation();
        }
    });

    function showError(input, message) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearError(input) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    function displayConfirmation() {
        const existingMessage = document.querySelector('.confirmation-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Formulário enviado com sucesso!';
        confirmationMessage.className = 'confirmation-message';
        confirmationMessage.style.color = 'green';
        confirmationMessage.style.fontSize = '12px';
        confirmationMessage.style.fontWeight = 'bold';
        confirmationMessage.style.textAlign = 'center';
        confirmationMessage.style.marginTop = '5px';

        form.appendChild(confirmationMessage);
    }
});