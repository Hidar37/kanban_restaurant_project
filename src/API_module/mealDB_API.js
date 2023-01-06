export default class MealDbApi {
  constructor() {
    this.gameName = 'Restaurant Game';
  }

  // Display all items in the home page
  fetchItems = async () => {
    const items = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
    const jsonItems = await items.json();
    return jsonItems;
  }

  // **************************** Involvement API
  // Display all like (count)
  countLikes = async () => {
    const items = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/70gcMHBzgP58BcMjkQhl/likes');
    const jsonItems = await items.json();
    return jsonItems;
  }
}