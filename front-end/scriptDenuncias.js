const apiDenuncia = 'http://localhost:8080/denuncias';

document.getElementById('denunciaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const denuncia = {
        nomeCompleto: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        data: document.getElementById('data').value,
        tipoOcorrencia: document.getElementById('tipo').value.toUpperCase(),
        descricao: document.getElementById('descricao').value,
        anonimo: document.getElementById('anonimo').checked
    };

    fetch(apiDenuncia, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(denuncia)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        alert('Denúncia enviada com sucesso!');
        document.getElementById('denunciaForm').reset();
    })
    .catch(err => {
        console.error("Erro ao enviar denúncia:", err);
        alert('Erro ao enviar denúncia.');
    });
});
