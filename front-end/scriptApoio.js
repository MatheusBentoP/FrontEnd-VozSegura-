const apiApoio = 'http://localhost:8080/apoio';

document.getElementById('apoioForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const apoio = {
        nome: document.getElementById('nomeApoio').value,
        email: document.getElementById('emailApoio').value,
        mensagem: document.getElementById('mensagemApoio').value
    };

    fetch(apiApoio, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apoio)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        alert('Solicitação de apoio enviada com sucesso!');
        document.getElementById('apoioForm').reset();
    })
    .catch(err => {
        console.error("Erro ao enviar apoio:", err);
        alert('Erro ao enviar apoio.');
    });
});
