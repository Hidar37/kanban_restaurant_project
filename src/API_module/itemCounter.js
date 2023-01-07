export default class ItemCounter {
  constructor() {
    this.gameName = 'Restaurant Game';
  }

  // Count Page Item
  countItem = () => {
    const card = document.querySelectorAll('.card');
    return card.length;
  }
}