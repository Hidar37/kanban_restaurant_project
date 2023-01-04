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
}
