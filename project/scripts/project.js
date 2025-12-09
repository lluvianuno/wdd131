const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('responsive');
    
    if (nav.classList.contains('responsive')) {
        menuButton.innerHTML = '✕';
        menuButton.setAttribute('aria-expanded', 'true');
    } else {
        menuButton.innerHTML = '&#9776;';
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

const temples = [
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: ""
  },
  {
    recipeName: "",
    cookTime: "",
    ingedients: [],
    instructions: "",
    imageUrl: "",
  }
];

const homeRecipesLink = document.querySelector("#home");
const RecipesLink = document.querySelector("#recipes");
const favRecipesLink = document.querySelector("#favorites");