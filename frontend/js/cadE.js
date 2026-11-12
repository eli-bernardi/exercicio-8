let res = document.getElementById('res')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const valores = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        numeroSerie: document.getElementById('numeroSerie').value,
        idCliente: document.getElementById('idCliente').value,
    }

    fetch(`http://localhost:3000/equipamento`, {
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