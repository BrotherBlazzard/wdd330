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
  findRecipe(baseURL, query);
});



async function findRecipe(URL) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
  }
}
