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

const recipes = [
  {
    recipeName: "Spaghetti Aglio e Olio",
    cookTime: "15 minutes",
    ingredients: ["Spaghetti", "Olive oil", "Garlic", "Red pepper flakes", "Parsley", "Salt"],
    instructions:
      "Cook the spaghetti. In a pan, heat olive oil and sauté sliced garlic until golden. Add red pepper flakes, mix with the pasta, and top with parsley.",
    imageUrl: "",
  },
  {
    recipeName: "Classic Pancakes",
    cookTime: "20 minutes",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking powder", "Butter", "Salt"],
    instructions:
      "Mix dry ingredients. Add milk and eggs, whisk until smooth. Cook on a hot pan until bubbles form, then flip.",
    imageUrl: "",
  },
  {
    recipeName: "Chicken Tacos",
    cookTime: "25 minutes",
    ingredients: ["Tortillas", "Shredded chicken", "Onion", "Cilantro", "Lime", "Salt", "Salsa"],
    instructions:
      "Warm the tortillas, fill with chicken, and top with chopped onion, cilantro, lime, and salsa.",
    imageUrl: "",
  },
  {
    recipeName: "Avocado Toast",
    cookTime: "10 minutes",
    ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon", "Chili flakes"],
    instructions:
      "Toast the bread. Mash the avocado with salt, pepper, and lemon. Spread on toast and add chili flakes.",
    imageUrl: "",
  },
  {
    recipeName: "Caprese Salad",
    cookTime: "10 minutes",
    ingredients: ["Tomatoes", "Fresh mozzarella", "Basil", "Olive oil", "Salt", "Balsamic glaze"],
    instructions:
      "Slice tomatoes and mozzarella. Layer with basil, drizzle olive oil, sprinkle salt, and finish with balsamic glaze.",
    imageUrl: "",
  },
  {
    recipeName: "Beef Stir Fry",
    cookTime: "20 minutes",
    ingredients: ["Beef strips", "Soy sauce", "Garlic", "Bell peppers", "Onion", "Olive oil"],
    instructions:
      "Cook beef in oil until browned. Add vegetables and garlic. Stir in soy sauce and cook until tender.",
    imageUrl: "",
  },
  {
    recipeName: "Chocolate Mug Cake",
    cookTime: "5 minutes",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Milk", "Oil", "Baking powder"],
    instructions:
      "Mix all ingredients in a mug. Microwave for 60–90 seconds until cooked.",
    imageUrl: "",
  },
  {
    recipeName: "Garlic Butter Shrimp",
    cookTime: "12 minutes",
    ingredients: ["Shrimp", "Butter", "Garlic", "Lemon", "Parsley", "Salt"],
    instructions:
      "Melt butter, sauté garlic, add shrimp, and cook until pink. Finish with lemon juice and parsley.",
    imageUrl: "",
  },
  {
    recipeName: "Veggie Omelette",
    cookTime: "15 minutes",
    ingredients: ["Eggs", "Onion", "Tomatoes", "Spinach", "Salt", "Pepper", "Oil"],
    instructions:
      "Beat eggs with salt and pepper. Cook vegetables in a pan, add eggs, and cook until firm.",
    imageUrl: ""
  },
  {
    recipeName: "No-Bake Cheesecake Cups",
    cookTime: "20 minutes + chill time",
    ingredients: ["Cream cheese", "Sugar", "Vanilla", "Whipped cream", "Graham crackers", "Berries"],
    instructions:
      "Crush graham crackers into cups. Mix cream cheese, sugar, and vanilla. Fold in whipped cream. Spoon mixture into cups and top with berries.",
    imageUrl: "",
  }
];

createRecipeCard(recipes);

function createRecipeCard(recipesCard) {
    document.querySelector(".rec-grid").innerHTML = "";
    recipesCard.forEach(recipe => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let time = document.createElement("p");
        let ingredients = document.createElement("list");
        let instructions = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = recipe.recipeName;
        time.innerHTML = `<span class="label">Time:</span> ${recipe.time}`;
        ingredients.innerHTML = `<span class="label">Ingredients:</span> ${recipe.ingredients}`;
        instructions.innerHTML = `<span class="label">Instructions:</span> ${recipe.instructions}`;
        img.setAttribute("src", recipe.imageUrl);
        img.setAttribute("alt", `${recipe.recipeName} recipe`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(time);
        card.appendChild(ingredients);
        card.appendChild(instructions);
        card.appendChild(img);

        document.querySelector(".rec-grid").appendChild(card);
    });
}

const homeRecipesLink = document.querySelector("#home");
const RecipesLink = document.querySelector("#recipes");
const favRecipesLink = document.querySelector("#favorites");

homeRecipesLink.addEventListener("click", () => {
    createRecipeCard(recipes);
})