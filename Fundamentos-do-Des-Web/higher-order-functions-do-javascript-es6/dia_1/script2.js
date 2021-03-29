const betNumber = (num) => {
    console.log(`Número escolhido por você ${num}`)
    return num
}

const randomNumber = (num) => {
    num = Math.round(Math.random(1, 5) * 5)
    console.log(`Número aleatório ${num}`)
    return num
};

const checknumbers = () => {
    if (betNumber(4) === randomNumber()) {
        return "Parabéns você ganhou"
    } else {
        return "Tente novamente"
    }
}

console.log(checknumbers())
