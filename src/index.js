import MealDbApi from './API_module/mealDB_API.js';
import './style/style.css';

const mealDB = new MealDbApi();
// mealDB.fetchItems();
// Porgarmm Starts form here:
// =============================
const displayItems = () => {
  mealDB.fetchItems().then((itemPromis) => {
    itemPromis.meals.forEach((arrayElement) => {
      const showAllDiv = document.getElementById('card-wrapper');
      // card wrapper
      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'card');
      // Card Header
      const cardHeader = document.createElement('div');
      cardHeader.setAttribute('class', 'card-header');
      const cardHeaderImg = document.createElement('img');
      cardHeaderImg.setAttribute('class', 'meal-img');
      cardHeaderImg.setAttribute('src', `${arrayElement.strMealThumb}`);
      const cardHeadertext = document.createElement('p');
      cardHeadertext.setAttribute('class', 'meal-name');
      cardHeadertext.textContent = arrayElement.strMeal;
      // Card Footer
      const cardFooter = document.createElement('div');
      cardFooter.setAttribute('class', 'card-footer');
      const cardFooterBtnWrapper = document.createElement('div');
      cardFooterBtnWrapper.setAttribute('class', 'button-wrapper');
      // like
      const likeBox = document.createElement('p');
      likeBox.setAttribute('class', 'like-box');
      const likeBtn = document.createElement('i');
      likeBtn.setAttribute('id', `${arrayElement.idMeal}l`);
      likeBtn.setAttribute('class', 'fa-solid');
      likeBtn.classList.add('fa-heart', 'btn');
      // Add Event for (like) btn
      likeBtn.addEventListener('click', (e) => {
        console.log(e.target.id);
      });
      // comment
      const commentBox = document.createElement('p');
      likeBox.setAttribute('class', 'comment-box');
      const commentBtn = document.createElement('i');
      commentBtn.setAttribute('id', `${arrayElement.idMeal}c`);
      commentBtn.setAttribute('class', 'fa-solid');
      commentBtn.classList.add('fa-comment', 'btn');
      // Add Event for(comment) btn
      commentBtn.addEventListener('click', (e) => {
        console.log(e.target.id);
      });
      // Like Count
      const divLikeTotal = document.createElement('div');
      const likeTotalBox = document.createElement('p');
      likeTotalBox.setAttribute('class', 'like-total-box');
      likeTotalBox.textContent = 'Likes ';
      const likeTotal = document.createElement('span');
      likeTotal.setAttribute('id', 'like-total');
      likeTotal.textContent = '5';
      // Adding Created Elements in the page
      showAllDiv.appendChild(cardDiv);
      cardDiv.append(cardHeader, cardFooter);
      // card Header append child
      cardHeader.append(cardHeaderImg, cardHeadertext);
      // card Footer append child
      cardFooter.append(cardFooterBtnWrapper, divLikeTotal);
      // append child to button wrapper
      cardFooterBtnWrapper.append(likeBox, commentBox);
      // append child to likeBox and CommentBox
      likeBox.appendChild(likeBtn);
      commentBox.appendChild(commentBtn);
      // Append liks count
      divLikeTotal.appendChild(likeTotalBox);
      likeTotalBox.appendChild(likeTotal);
    });
  });
};

// Main Body
displayItems();