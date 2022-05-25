// Spoonacular
// https://spoonacular.com/food-api/docs#Search-Recipes-Complex

baseURL = 'https://api.spoonacular.com/recipes/complexSearch';
apiKey = '17a4954d6e284e17866421fae7be56d0';

// Element Selectors
const keyword = document.querySelector('#keyword');
const count = document.querySelector('#count');
const btn = document.querySelector('button');

// Event Controller
btn.addEventListener('click', () => {
  query = keyword.value;
  numRecipes = parseInt(count.value);
  let url = `${baseURL}?query=${query}&number=${numRecipes}&apiKey=${apiKey}`;
  findRecipe(url);
});



async function findRecipe(URL) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    displayResults(data);
  }
}

const displayResults = (recipes) => {
  let main = document.querySelector('main');
  // fix this
  main.innerHTML = '';
  let aside = document.createElement('aside');
  aside.textContent = `Total Recipes: ${recipes.totalResults}`;
  main.append(aside);

  recipes.results.forEach(recipe => {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.textContent = recipe.title;
    // let block = document.createElement('div');
    // block.classList.add('block');
    // let img = document.createElement('img');
    // img.src = recipe.image;
    // img.alt = recipe.title;
    // let stats = document.createElement('div');
    // stats.classList.add('stats');
    // let calories = document.createElement('span');
    // calories.textContent = recipe.calories;
    // let carbs = document.createElement('span');
    // carbs.textContent = recipe.carbs;
    // let fat = document.createElement('span');
    // fat.textContent = recipe.fat;
    // let protein = document.createElement('span');
    // protein.textContent = recipe.protein;


    // stats.append(calories);
    // stats.append(carbs);
    // stats.append(fat);
    // stats.append(protein);

    // block.append(img);
    // block.append(stats);

    article.append(h3);
    // article.append(block);

    main.append(article);
  });
}
