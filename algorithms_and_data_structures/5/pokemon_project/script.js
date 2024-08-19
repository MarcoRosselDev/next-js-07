const input = document.getElementById("search-input");
const btn = document.getElementById("search-button");
const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");
const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const spriteEl = document.getElementById("sprite");
const typesEl = document.getElementById("types");

const searchPokemon = async (str) =>{
  
  console.log(str);
  str = str.toLowerCase();
  console.log(str);
  try {
    const req = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${str}`);
    const data = await req.json();
    console.log(data);
    print(data);
  } catch (error) {
    alert("Pokémon not found");
  }
}

const print = arr => {
  const {name, height, id, weight, types, stats, sprites} = arr;
  hpEl.textContent = stats[0].base_stat;
  attackEl.textContent = stats[1].base_stat;
  defenseEl.textContent = stats[2].base_stat;
  specialAttack.textContent = stats[3].base_stat;
  specialDefense.textContent = stats[4].base_stat;
  speedEl.textContent = stats[5].base_stat;
  nameEl.textContent = name;
  idEl.textContent = id;
  weightEl.textContent = weight;
  heightEl.textContent = height;
  spriteEl.src = sprites["front_default"];
  typesEl.innerHTML = types.length > 1? types.map(item => `<p id="type">${item["type"]["name"]}</p>`).join(""): `<p id="type">${types[0]["type"]["name"]}</p>`

}

btn.addEventListener("click", (event)=>{
  event.preventDefault();
  searchPokemon(input.value);
})