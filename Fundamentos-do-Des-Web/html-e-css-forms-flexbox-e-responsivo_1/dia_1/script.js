const button = document.getElementById('enviar');

function prevent(event) {
    button.addEventListener('click', () => {
        event.preventDefault();
    })
}

const state = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

function states() {
    const estado = document.getElementById('estado')

    for (let i = 0; i < state.length; i += 1) {
        const option = document.createElement('option')

        option.innerHTML = state[i]
        option.setAttribute('value', state[i])
        estado.appendChild(option)
    }
}

states()
