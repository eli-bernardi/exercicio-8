let res = document.getElementById('res')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const valores = {
        data: document.getElementById('data').value,
        status: document.getElementById('status').value,
        idEquipmaneto: document.getElementById('numeroSerie').value,
    }

    fetch(`http://localhost:3000/inspecao`, {
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