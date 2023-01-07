export default class MealDbApi {
  constructor() {
    this.gameName = 'Restaurant Game';
  }

  // Display all items in the home page
  fetchItems = async () => Promise.resolve({ meals: [{ strMeal: 'BeaverTails', strMealThumb: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg', idMeal: '52928' }] });

  // Display all like (count)
  countLikes = async () => Promise.resolve([{ item_id: '52928l', likes: 1 }, { item_id: '52965l', likes: 2 }]);

  // Like Item
  likeItem = async (likedItemID) => Promise.resolve({ status: 201, item_id: `${likedItemID}` });
}