var posts = [];

function renderPosts() {
  document.getElementById("posts").innerHTML = "";
  posts.forEach(function (post, i) {
    var commentsHtml = ``;

    post.comments.forEach(function (comment) {
      commentsHtml += `
        <div class="singleComment">
        <img
        src="https://falconreactbs4.prium.me/static/media/4.af4fbf41.jpg"
        class="avatar small"/>
        <div class="commentContent p-10">
                ${comment}
        </div>
    </div>
    `;
    });
    console.log(commentsHtml);

    var postSkeleton = `
<div class="post box">
<div class="cardheader">
    <div class="avatar">
        <img
                src="https://falconreactbs4.prium.me/static/media/3.cb95ae1b.jpg"
                alt=""
                class="avatar"
        />
    </div>
    <div class="info">
<span class="info-top">
<span class="text active">${post.title}</span>
created a post
</span>
        <span class="date">${post.date}</span>
    </div>
</div>
<div class="content">
   ${post.content}
</div>
<div class="meta">
    <div class="countinfo">
        <span>${post.likeCount}</span> Likes
    </div>
    <div class="countinfo">
        <span >${post.comments.length}</span> Comments
    </div>
</div>
<div class="buttons">
    <button class="btn btn-like" >❤️ Like</button>
    <button class="btn btn-like">💬 Comment</button>
    <button class="btn btn-like">💬 Share</button>
</div>
<div class="sendComment">
    <img
            src="https://falconreactbs4.prium.me/static/media/3.cb95ae1b.jpg"
            alt=""
            class="avatar"
    />
    <input type="text" data-postid="${i}" class="input comment createComment" placeholder="Write Comment"/>
</div>
<div id="commentsOf${i}" class="comments">
${commentsHtml}
    <div class="commentInfo">
       Load more comments</div>
</div>
</div>`;

    document.getElementById("posts").innerHTML =
      document.getElementById("posts").innerHTML + postSkeleton;
  });
}

function loadPosts() {
  if (localStorage.getItem("posts") === null) {
    let posts = [];
    localStorage.setItem("posts", JSON.stringify(posts));
  }

  let postsFromLocal = localStorage.getItem("posts");
  return JSON.parse(postsFromLocal);
}

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

renderPosts();
document.body.addEventListener("keypress", function (event) {
  if (event.target.classList.contains("createComment")) {
    if (event.key === "Enter") {
      let postIndex = event.target.getAttribute("data-postid");
      let commentContent = event.target.value;
      if (commentContent.trim() !== "") {
        posts[postIndex].comments.unshift(commentContent);
        renderPosts();
        savePosts();
      }
    }
  }
});
window.addEventListener("DOMContentLoaded", (event) => {
  posts = loadPosts();
  renderPosts();
});
