const pokeInput = document.querySelector("#poke")
const pokeButton = document.querySelector("#pokebutton")
const namePoke = document.querySelector(".name")
const habilities = document.querySelector(".habilidades")
const altura = document.querySelector(".altura")
const img = document.querySelector("img")
const error = document.querySelector(".error")

pokeButton.addEventListener('click', () => {
    const pokeName = pokeInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        const pokeImg = data.sprites.front_default
        namePoke.innerHTML = `Nome: ${data.name}`
        habilities.innerHTML = `Habilidades: ${data.moves.map(move => move.move.name).slice(0,5).join(', ')}`
        altura.innerHTML = `Altura: ${data.height}`
        img.src = pokeImg
        error.innerHTML = ''
    }).catch(err => {
        error.innerHTML = 'Erro'
    })
    
})