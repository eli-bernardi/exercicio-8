let res = document.getElementById('res')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const valores = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        cpf: Number(document.getElementById('cpf').value),
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value,
    }

    fetch(`http://localhost:3000/cliente`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
        .then(res = res.json())
        .then(dados => {
            res.innerHTML = ``
            res.innerHTML += `${dados.message}`
            document.querySelector('form').reset()
        })
        .catch((err) => {
            res.innerHTML = ``
            res.innerHTML += `erro no cadastro`
        })
})