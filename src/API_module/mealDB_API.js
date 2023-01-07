export default class MealDbApi {
  constructor() {
    this.gameName = 'Restaurant Game';
  }

  // Count Page Item
  countItem = () => {
    const total = document.querySelectorAll('.card');
    return total;
  }

  // Display all items in the home page
  fetchItems = async () => {
    const items = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    );
    const jsonItems = await items.json();
    return jsonItems;
  }

  // **************************** Involvement API
  // Display all like (count)
  countLikes = async () => {
    const items = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WRV6w2hffKlaWDzIZ2ed/likes',
    );
    const jsonItems = await items.json();
    return jsonItems;
  }

  // Like Item
  likeItem = async (likedItemID) => {
    const like = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WRV6w2hffKlaWDzIZ2ed/likes',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: `${likedItemID}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    return like;
  }
}
