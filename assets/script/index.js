"use strict";

const sendBtn = document.getElementById('btnSend');
let comments = ["Hello!", "Where are you from?"];

const styleComment = (sender) => {
    sender.classList.add("comment");
}

const addComment = () => {
    const newComment = document.getElementById('comment').value;
    const filteredComment = newComment.replace(/viagra|xxx/gi, "***");
    comments.push(filteredComment);
    generateComments();
    console.log(comments);
}

const generateComments = () => {
    let optionsComment = "";
    for (let comment of comments) {
        optionsComment += `<div>${comment}</div>`;
    }

    document.getElementById('allComments').innerHTML = optionsComment;
}

document.addEventListener("DOMContentLoaded", generateComments);

sendBtn.addEventListener('click', addComment);