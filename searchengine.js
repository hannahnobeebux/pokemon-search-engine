const main = document.querySelector('main')
const section = document.getElementById("my-section")
const body = document.querySelector("body")
const section2 = document.getElementById("info-about-pokemon")
function getPokemonInput() {
    let pokemonName = document.getElementById('p-name').value;
    // const area = document.createElement('p')
    // document.getElementById('my-section').innerHTML = 'The user input is: ' + variable;
    // area.innerHTML = variable
    // section.appendChild(area)
    section.innerHTML = pokemonName;
    return pokemonName
  }


async function getPokemonName() {
    let pokemonName = document.getElementById('p-name').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if (response.status === 404){
        const errorMessage = document.createElement('p')
        errorMessage.classList.add('error-message')
        errorMessage.innerHTML = "Invalid Pokemon Name"
        section2.appendChild(errorMessage)
        return false 
    }
    const data = await response.json();
    console.log(data)
    displayPokemon(data)

  

    // const p = document.createElement("p");
    // p.innerHTML = data.ability[1];
    // section.appendChild(p);
    
  }

function displayPokemon(data){
    const name = document.createElement('h3')
    name.innerHTML = data.name.toUpperCase()
    section.appendChild(name)

    const image = document.createElement('img')
    // image.innerHTML = Object.values(data.sprites)
    image.setAttribute('src', data.sprites.front_shiny)
    // data.sprites[1]
    section.appendChild(image)

    
    const sentenceWeight = document.createElement('li')
    // weight.innerHTML = data.weight
    sentenceWeight.innerHTML = "The weight of " + data.name + " is " + data.weight
    section2.appendChild(sentenceWeight)

    const sentenceHeight = document.createElement('li')
    sentenceHeight.innerHTML = "The height of " + data.name + " is " + data.height
    section2.appendChild(sentenceHeight)

    const sentenceId = document.createElement("li")
    sentenceId.innerHTML = "The id of " + data.name + " is " + data.id
    section2.appendChild(sentenceId)


    const attributes = Object.keys(data)
    attributes.forEach(attr => {
        const p = document.createElement('p')
        p.classList.add(`${data.name}-${attr}`)
        p.textContent = `${attr} = ${data[attr]}`
        //section2.appendChild(p)
    })

    //name
    //color
    //id
    //moves 
    //type
  }





  async function fetchPokemon() {
    //saving the api response in a const - need to wait to fetch from api before using "response"
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //convert to json
    const data = await response.json();
    // console.log(data.abilities[1].ability.name)
    const p = document.createElement("p");
    p.innerHTML = data.name;
    body.appendChild(p);
    
}

