// const randomDogs = async () => {
//     const dogs = await fetch('https://dog.ceo/api/breeds/image/random')
//     const ranDog = await dogs.json()

//     const dogImg = document.getElementById('dogImage')
//     dogImg.src = ranDog.message
// }

// randomDogs()

function fetchDog() {
    const dogImg = document.getElementById('dogImage')
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
      response
      .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )    
    );
  }
module.exports = {
    fetchDog
}