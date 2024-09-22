// Handle form submission
document.getElementById('submit-recipe').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    const cookingTime = document.getElementById('cooking-time').value;
    const servings = document.getElementById('servings').value;

    // Create a recipe object
    const recipe = {
        title,
        description,
        ingredients,
        instructions,
        category,
        difficulty,
        cookingTime,
        servings,
    };

    // Display the recipe
    displayRecipe(recipe);

    // Show notification
    showNotification(`Recipe "${recipe.title}" submitted successfully!`);

    // Clear the form
    this.reset();
});

// Function to display the recipe
function displayRecipe(recipe) {
    const recipeList = document.getElementById('recipe-list');
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');

    recipeDiv.innerHTML = `
        <h2>${recipe.title}</h2>
        <p>Category: ${recipe.category} | Difficulty: ${recipe.difficulty} | Cooking Time: ${recipe.cookingTime} mins</p>
        <p>${recipe.description}</p>
        <h3>Ingredients:</h3>
        <p>${recipe.ingredients}</p>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
        <p>Servings: ${recipe.servings}</p>
    `;
    recipeList.appendChild(recipeDiv); // Add the new recipe to the list
};

// Function to show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    // Show the notification immediately
    notification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        notification.style.display = 'none'; // Ensure it is hidden after fading out
    }, 5000);   
}
