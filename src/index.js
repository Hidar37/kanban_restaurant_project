import MealDbApi from './API_module/mealDB_API.js';
import './style/style.css';

const mealDB = new MealDbApi();
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn-close');
const urlDataId = 'Lg1NwTSFJSG37nTmEN8x';
const urlDataLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${urlDataId}/likes/`;
const urlDataPostComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${urlDataId}/comments/`;
const urlDataGetComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${urlDataId}/comments?item_id=`;
// close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const postDataComments = async (id, user, usercomment) => {
  const comment = await fetch(urlDataPostComments, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: usercomment,
    }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const data = await comment.json();
  return data;
};

const countComments = (commentsObj) => {
  const counter2 = document.querySelector('.cmnc');
  let commentsCounter = 0;
  commentsObj.forEach((element) => {
    commentsCounter += 1;
    console.log(element);
  });
  counter2.innerHTML = `Number of comments: ${commentsCounter}`;
};

const injetcCaptureComments = (commentsObj, id) => {
  commentsObj.forEach((element) => {
    const date = element.creation_date;
    const user = element.username;
    const usercomment = element.comment;

    const comments = document.querySelector('.comments');
    comments.innerHTML += `${date}----${user}----${usercomment}<br>`;
  });
  const submit = document.querySelector('.btn-pst');
  submit.addEventListener('click', () => {
    const username = document.getElementById('name_');
    const usernameValue = username.value;
    const usercomment = document.getElementById('comment_');
    const userCommentValue = usercomment.value;
    if (usernameValue !== null && userCommentValue !== null) {
      postDataComments(id, usernameValue, userCommentValue);

      const comments = document.querySelector('.comments');
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDay() + 3;

      comments.innerHTML += `${year}-${month}-${day}----${usernameValue}----${userCommentValue}<br>`;
      username.value = '';
      usercomment.value = '';
    } else {
      const error = document.querySelector('.errormessage');
      const errormessage = document.createElement('h4');
      errormessage.innerHTML = 'Please, type your name and your comment. Thank you.';
      error.appendChild(errormessage);
    }
  });
};

const getDataComments = async (id) => {
  const results3 = await fetch(`${urlDataGetComments}${id}`);
  const commentsObj = await results3.json();
  injetcCaptureComments(commentsObj, id);
  countComments(commentsObj);
  console.log(commentsObj);
  return commentsObj;
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close modal when the Esc key is pressed
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
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
        const ids = e.target.id;
        openModal();
        const cmnc = document.querySelector('.cmnc');
        cmnc.innerHTML = '';
        const comments = document.querySelector('.comments');
        comments.innerHTML = '';

        const img = document.querySelector('.imgs');
        img.setAttribute('src', `${arrayElement.strMealThumb}`);

        getDataComments(e.target.id);
        document.getElementById('ftt').innerHTML = arrayElement.strMeal;
        document.getElementById('hdvals').value = ids;
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