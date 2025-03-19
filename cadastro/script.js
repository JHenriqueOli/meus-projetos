document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    // Para este exemplo, vamos apenas verificar se os campos não estão vazios
    if (username === 'admin' && password === 'senha123') {
        document.getElementById('message').innerText = 'Login bem-sucedido!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Usuário ou senha incorretos.';
    }
});