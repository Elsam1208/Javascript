document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // Exibe os valores capturados no console
    console.log('Nome:', nome);
    console.log('Endereço:', endereco);
    console.log('Telefone:', telefone);
    console.log('Email:', email);

    // Exibe uma mensagem de confirmação
    alert('Formulário enviado com sucesso!');

    // Aqui você pode adicionar a lógica para enviar os dados a um servidor
});
