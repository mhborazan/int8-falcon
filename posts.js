var posts = [
  {
    title: "Carlos Olmarez ",
    date: "10.02.2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum numquam suscipit in animi aspernatur cumque possimus at consectetur, neque, consequatur voluptates laborum dicta placeat! Quibusdam quos molestiae dolore architecto",
    likeCount: 0,
    commentsCount: 0,
    comments: ["Comment 1", "Comment 2", "Comment 3"],
  },
  {
    title: "Ali Haydar ",
    date: "10.02.2023",
    content: "Another content",
    likeCount: 10,
    commentsCount: 3,
    comments: ["Comment 1", "Comment 2", "Comment 3"],
  },
];

function renderPosts() {
  document.getElementById("posts").innerHTML = "";
  posts.forEach(function (post) {
    var commentsHtml = ``;

    post.comments.forEach(function (comment, i) {
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
        <span class="date"> ${post.date} </span>
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
        <span >${post.commentsCount}</span> Comments
    </div>
</div>
<div class="buttons">
    <button class="btn btn-like">❤️ Like</button>
    <button class="btn btn-like">💬 Comment</button>
    <button class="btn btn-like">💬 Share</button>
</div>
<div class="sendComment">
    <img
            src="https://falconreactbs4.prium.me/static/media/3.cb95ae1b.jpg"
            alt=""
            class="avatar"
    />
    <input type="text" class="input comment createComment" placeholder="Write Comment"/>
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

renderPosts();
