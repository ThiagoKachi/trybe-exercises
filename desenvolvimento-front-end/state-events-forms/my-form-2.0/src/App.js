import React from 'react';

const states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      houseApartment: '',
      curriculum: '',
      role: '',
      roleDescription: ''
    }
  }

  handleText = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  toUpper = ({ target }) => {
    const { value } = target

    this.setState({
      fullName: value.toUpperCase()
    })
  }

  removeSpecialChar = ({ target }) => {
    const { value } = target

    this.setState({
      endereco: value.replace(/[^a-zA-Zs]/g, "")
    })
  }

  verifyIfStartWithNumber = ({ target }) => {
    const { value } = target
    
    if (value.match(/^\d/)) {
      this.setState({
        city: ''
      })
    }
  }

  roleAlert = () => {
    alert('Preencha com cuidado esse campo!')
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>

          <legend>Nome</legend>
          <input value={this.state.fullName} onChange={this.handleText} name="fullName" type="text" maxLength={40} required onKeyUp={this.toUpper} />

          <legend>Email</legend>
          <input value={this.state.email} onChange={this.handleText} name="email" type="text" maxLength={50} required />

          <legend>CPF</legend>
          <input value={this.state.cpf} onChange={this.handleText} name="cpf" type="text" maxLength={11} required />

          <legend>Endereço</legend>
          <input value={this.state.address} onChange={this.handleText} name="address" type="text" maxLength={200} required onKeyUp={this.removeSpecialChar} />

          <legend>Cidade</legend>
          <input value={this.state.city} onChange={this.handleText} name="city" type="text" maxLength={28} required onBlur={this.verifyIfStartWithNumber} />

          <legend>Estado</legend>
          <select name="state" onChange={this.handleText}>
            <option>Selecione</option>
            {states.map((state, key) => (<option key={key}>{state}</option>))}
          </select>

          <legend>Cidade</legend>
          <input value="casa" onChange={this.handleText} name="houseApartment" type="radio" required />Casa
          <input value="apartamento" onChange={this.handleText} name="houseApartment" type="radio" required />Apartamento
        </fieldset>

        <fieldset>
          <legend>Último Emprego</legend>

          <legend>Resumo do Currículo</legend>
          <textarea value={this.state.curriculum} name="curriculum" onChange={this.handleText} required maxLength={1000}></textarea>

          <legend>Cargo</legend>
          <textarea value={this.state.role} name="role" onChange={this.handleText} required maxLength={40} onMouseEnter={this.roleAlert}></textarea>

          <legend>Descrição do Cargo</legend>
          <textarea value={this.state.roleDescription} name="roleDescription" onChange={this.handleText} type="text" maxLength={500} required ></textarea>
          
        </fieldset>

      </form>
    );
  }
}

export default App;
