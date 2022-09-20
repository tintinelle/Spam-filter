// https://s.mediasole.ru/cache/content/data/images/1585/1585670/original.jpg

"use strict";

const sendBtn = document.getElementById('btnSend');

let comments = [];

let author = document.getElementById('username').value;
let avatar = document.getElementById('avatar').value;
let comment = document.getElementById('comment').value;

document.addEventListener("DOMContentLoaded", function (event) {

    let name = localStorage.getItem('name');
    let avatar = localStorage.getItem('avatar');

    if (name !== null) {
        document.getElementById('username').value = name;
    }

    if (avatar !== null) {
        document.getElementById('avatar').value = avatar;
    }

    generateComments();
});

// отображаем на странице комментарии:
const generateComments = () => {
    let optionsComment = "";

    // если у нас уже есть сохранненные комментарии, то мы их достаем из строки и превращаем обратно в массив
    if (localStorage.getItem('comments') !== null) {
        comments = JSON.parse(localStorage.getItem('comments'));
    }

    for (let comment of comments) {
        optionsComment += `<div class='comment-wrap'><img src="${avatar}" alt="User avatar" class='avatar'> <span class='author'>${author}:</span> <span class='comment'>${comment}</span></div>`;
    }

    document.getElementById('allComments').innerHTML = optionsComment;
};

// проверяем комментарий на спам и добавляем его в массив всех комментариев:
const checkMessage = (author, comment) => {
    const filteredComment = comment.replace(/viagra|xxx/gi, "***");
    comments.push(filteredComment);
    console.log(comments);

    // делаем из массива строку и добавляем в локальное хранилище:
    localStorage.setItem("comments", JSON.stringify(comments));
    console.log(` строка ${comments}`);
    // comments = JSON.parse(localStorage.getItem('comments'));
    // console.log(comments);

    // отправляем в функцию, которая отвечает за отображение комментариев:
    generateComments();
};

// проверяем, есть ли имя и аватар в локальном хранилище:
const check = () => {
    author = document.getElementById('username').value;
    avatar = document.getElementById('avatar').value;
    comment = document.getElementById('comment').value;


    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }

    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', avatar);
    }

    // отправляем проверять комментарий:
    checkMessage(author, comment);
};



sendBtn.addEventListener('click', check);







// "use strict";

// const sendBtn = document.getElementById('btnSend');

// let comments = [];

// let author = document.getElementById('username').value;
// let avatar = document.getElementById('avatar').value;
// let comment = document.getElementById('comment').value;

// document.addEventListener("DOMContentLoaded", function (event) {
//     generateComments();

//     let name = localStorage.getItem('name');
//     let avatar = localStorage.getItem('avatar');

//     if (name !== null) {
//         document.getElementById('username').value = name;
//     }

//     if (avatar !== null) {
//         document.getElementById('avatar').value = avatar;
//     }
// });

// const generateComments = () => {
//     let optionsComment = "";

//     for (let comment of comments) {
//         optionsComment += `<div class='comment-wrap'><img src="${avatar}" alt="User avatar" class='avatar'> <span class='author'>${author}:</span> <span class='comment'>${comment}</span></div>`;
//     }

//     document.getElementById('allComments').innerHTML = optionsComment;
// };


// const sendMessage = (author, comment) => {
//     const filteredComment = comment.replace(/viagra|xxx/gi, "***");
//     comments.push(filteredComment);
//     generateComments();
//     console.log(comments);


//     let commentsArr = {
//         name: author,
//         pic: avatar,
//         words: comment,
//     };

//     localStorage.setItem("commentsArr", JSON.stringify(commentsArr));
//     console.log(` строка ${commentsArr}`);

// };

// const checkMessage = () => {
//     author = document.getElementById('username').value;
//     comment = document.getElementById('comment').value;

//     avatar = document.getElementById('avatar').value;


//     if (localStorage.getItem('name') == null) {
//         localStorage.setItem('name', author);
//     }

//     if (localStorage.getItem('avatar') == null) {
//         localStorage.setItem('avatar', avatar);
//     }

//     sendMessage(author, comment);
// };



// sendBtn.addEventListener('click', checkMessage);





// "use strict";

// const sendBtn = document.getElementById('btnSend');
// let comments = ["Hello!", "Where are you from?"];

// const addComment = () => {
//     const newComment = document.getElementById('comment').value;
//     const filteredComment = newComment.replace(/viagra|xxx/gi, "***");
//     comments.push(filteredComment);
//     generateComments();
//     console.log(comments);
// };

// const generateComments = () => {
//     let optionsComment = "";
//     for (let comment of comments) {
//         optionsComment += `<div class="comment">${comment}</div>`;
//     }

//     document.getElementById('allComments').innerHTML = optionsComment;
// };

// document.addEventListener("DOMContentLoaded", generateComments);

// sendBtn.addEventListener('click', addComment);