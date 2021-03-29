const person = (nome) => {
    const nomeCompleto = nome
    const email = nomeCompleto.toLowerCase().replace(' ', '_')
    return `Nome: ${nomeCompleto}, Email: ${email}@trybe.com`
  
}

const newEmployees = () => {
  const employees = {
    id1: person('Pedro Guerra'),
    id2: person('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: person('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(person))