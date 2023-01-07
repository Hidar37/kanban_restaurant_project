import MealDbApi from '../mealDB_API.js';

jest.mock('../mealDB_API.js');
const api = new MealDbApi();

// Fetch item from API [mealDB]
describe('Fetch Items From API', () => {
  test('Show Meal Name: ', () => {
    api.fetchItems().then((res) => {
      expect(res.meals[0].strMeal).toBe('BeaverTails');
    });
  });
  test('Show Meal ID: ', () => {
    api.fetchItems().then((res) => {
      expect(res.meals[0].idMeal).toBe('52928');
    });
  });
});

// Fetch item from API [Involvment]
describe('Fetch Like From API', () => {
  test('Show Total Like: ', () => {
    api.countLikes().then((res) => {
      expect(res[0].likes).toBe(1);
    });
  });
  test('Show Total Like: ', () => {
    api.countLikes().then((res) => {
      expect(res[1].likes).toBe(2);
    });
  });
});

// POST item to API [Involvment]
describe('POST Like to API', () => {
  test('Add Like(+1): ', () => {
    api.likeItem('456766').then((res) => {
      expect(res.status).toBe(201);
    });
  });
  test('Add Like(+1): ', () => {
    api.likeItem('45326').then((res) => {
      expect(res.item_id).toBe('45326');
    });
  });
});