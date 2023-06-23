let followBtn = document.querySelectorAll(".btn-follow");
let followBtnIcon = document.querySelector('.btn-follow').innerHTML;

followBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-follow-btn")) {
      e.target.classList.remove("js-follow-btn");
      e.target.innerHTML = followBtnIcon;
      
    } else {
      e.target.classList.add("js-follow-btn");
      e.target.innerText = "Followed"
    }
  });
});
