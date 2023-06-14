let likeBtnP = document.querySelectorAll(".js-like-p");
let likeIcon = document.querySelector(".js-like-symbol");
let likeCount = document.querySelectorAll(".js-like-count");

likeBtnP.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let countTarget =
      e.target.parentNode.parentNode.parentNode.querySelector(".js-like-count");
    if (e.target.classList.contains("clicked")) {
      e.target.classList.remove("clicked");
      e.target.previousElementSibling.src =
        "./assets/like button unclicked.png";
      countTarget.innerText = Number(countTarget.innerText) - 1;
    } else {
      e.target.classList.add("clicked");
      e.target.previousElementSibling.src = "./assets/like button clicked.png";
      countTarget.innerText = Number(countTarget.innerText) + 1;
    }
  });
});

let commentBtn = document.querySelectorAll(".js-comment-btn");
let commentDiv = document.querySelectorAll(".sendComment");
let commentInp = document.querySelectorAll(".js-input-comment");
let input = document.querySelectorAll(".js-comment-invisible");

commentBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (
      e.target.parentNode.nextElementSibling.classList.contains(
        "js-comment-invisible"
      )
    ) {
      e.target.parentNode.nextElementSibling.classList.remove(
        "js-comment-invisible"
      );
    } else {
      e.target.parentNode.nextElementSibling.classList.add(
        "js-comment-invisible"
      );
    }
  });
});

function renderNewComment(comment, commentContainer) {
  let newCommentDiv = document.createElement("div");
  let commentSection = commentContainer;
  newCommentDiv.innerHTML = `<div class="singleComment">
        <img
        src="https://falconreactbs4.prium.me/static/media/3.cb95ae1b.jpg"
        class="avatar small"/>
        <div class="commentContent p-10">
                ${comment}
        </div>
    </div>`;
  commentSection.prepend(newCommentDiv);
}

commentInp.forEach((inp) => {
    inp.addEventListener("keydown", (e) => {
    let commentContainer = e.target.parentNode.parentNode.querySelector('.comments');
    let countTarget = e.target.parentNode.parentNode.querySelector(
        ".js-comments-count"
      );
    if (e.code === "Enter" && e.target.value !== "") {
      let inpVal = e.target.value;
      renderNewComment(inpVal, commentContainer);
      e.target.value = "";
      countTarget.innerText = Number(countTarget.innerText) +1
    } else if (e.code === "Enter" && e.target.value == "") {
      e.target.style.borderColor = "#00000066";
    }
    if (e.target.value == "" && e.code !== "Enter") {
      e.target.style.borderColor = "#afe7ff";
    }
  });
});


