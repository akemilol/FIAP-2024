const users = [
    { email: "usuario1@exemplo.com", password: "senha123" },
    { email: "usuario2@exemplo.com", password: "senha123" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        sessionStorage.setItem('email', email); 
        sessionStorage.setItem('password', password);
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').textContent = 'Email ou senha incorretos. Tente novamente.';
    }
});