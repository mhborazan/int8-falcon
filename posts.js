var posts = [];

function renderPosts() {
  var postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  posts.forEach(function (post, i) {
    var commentsHtml = "";

    post.comments.forEach(function (comment) {
      commentsHtml += `
        <div class="singleComment">
          <img src="https://falconreactbs4.prium.me/static/media/4.af4fbf41.jpg" class="avatar small"/>
          <div class="commentContent p-10">
            ${comment}
          </div>
        </div>
      `;
    });

    var postSkeleton = `
      <div class="post box">
        <div class="cardheader">
          <div class="avatar">
            <img src="https://falconreactbs4.prium.me/static/media/3.cb95ae1b.jpg" alt="" class="avatar" />
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
            <span>${post.comments.length}</span> Comments
          </div>
        </div>
        <div class="buttons">
        <button class="btn btn-like js-like-btn" onClick={liker(${i})}>
          <img src="./assets/${
            post.likeCount == 0
              ? "like button unclicked"
              : "like-button-clicked"
          }.png" class="js-like-symbol" alt="">
        <p class="js-like-p">Like</p>
        </button>
          <button class="btn btn-like">💬 Comment</button>
          <button class="btn btn-like">💬 Share</button>
        </div>
        <div class="sendComment">
          <img src="https://falconreactbs4.prium.me/static/media/3.cb95ae1b.jpg" alt="" class="avatar" />
          <input type="text" data-postid="${i}" class="input comment createComment" placeholder="Write Comment" />
        </div>
        <div id="commentsOf${i}" class="comments">
          ${commentsHtml}
          <div class="commentInfo">
            Load more comments
          </div>
        </div>
      </div>
    `;

    postsContainer.innerHTML += postSkeleton;
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

document
  .getElementById("createPostButton")
  .addEventListener("click", function () {
    let postTitle = "Estefania Larreategui"; //  como agregar nombre de persona¿?¿?
    let postContent = document.getElementById("createpostInput").value;
    if (postContent.trim() !== "") {
      // crear un objeto de post
      let newPost = {
        title: postTitle,
        content: postContent,
        comments: [],
        likeCount: 0,
        date: new Date().toLocaleString(), // fecha actual formateada best practice¿?
      };
      if (imagePost.length > 5) {
        newPost.content = newPost.content + "<br><br>" + imagePost;
        imagePost = "";
      }
      if (mapPost.length > 5) {
        newPost.content = newPost.content + "<br><br>" + mapPost;
        mapPost = "";
      }

      posts.unshift(newPost);
      document.getElementById("createpostInput").value = ""; //clear input
      renderPosts();
      savePosts();
    }
  });

document.getElementById("imageBtn").addEventListener("click", function () {
  document.getElementById("imageSelectInput").click();
});

let imagePost = "";
let mapPost = "";
document
  .getElementById("imageSelectInput")
  .addEventListener("change", function (e) {
    let files = document.getElementById("imageSelectInput").files;
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      imagePost = "<img src='" + event.target.result + "' width='300'>";
      document.getElementById("imgPreview").src = event.target.result;
      document.getElementById("imgPreviewDiv").classList.remove("d-none");
    });
    reader.readAsDataURL(files[0]);
  });

document.getElementById("removeImg").addEventListener("click", function () {
  imagePost = "";
  mapPost = "";
  document.getElementById("imgPreviewDiv").classList.add("d-none");
});

function getBase64(file) {
  console.log(file);
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    return reader.result;
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
let map;
//Map Share
document.getElementById("mapBtn").addEventListener("click", function () {
  modal.style.display = "block";
  map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [28, 41], // starting position [lng, lat]
    zoom: 8, // starting zoom
  });
  const marker = new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat([28, 41])
    .addTo(map);

  marker.on("dragend", onDragEnd);
  function onDragEnd() {
    const lngLat = marker.getLngLat();
    mapPost = `
    <iframe
    width="100%"
    height="400px"
    src='https://api.mapbox.com/styles/v1/mapbox/streets-v12.html?title=false&zoomwheel=true&access_token=pk.eyJ1IjoieW91Ymxvc3NvbSIsImEiOiJjbGdkdmJtbXUwOHB3M2xwN3ZkZmxyY2ZkIn0.i_oCYBV9t_JAQZfhyft-DA#12/${lngLat.lat}/${lngLat.lng}'
    title="Streets"
    style="border:none;"
  ></iframe>
    `;
    document.getElementById("imgPreview").src = "map.jpg";
    document.getElementById("imgPreviewDiv").classList.remove("d-none");
  }
});
mapboxgl.accessToken =
  "pk.eyJ1IjoieW91Ymxvc3NvbSIsImEiOiJjbGdkdmJtbXUwOHB3M2xwN3ZkZmxyY2ZkIn0.i_oCYBV9t_JAQZfhyft-DA";

//Modal JS
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

//Hashtag Focus
var focusHashtag = document.getElementsByClassName("btn-hashtag");
var hashtagContent = document.getElementsByClassName("hashtagInput");

focusHashtag[0].addEventListener("click", () => {
  hashtagContent[0].focus();
});
//Follow button
let followBtn = document.querySelectorAll(".btn-follow");
let followBtnIcon = document.querySelector(".btn-follow").innerHTML;

followBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-follow-btn")) {
      e.target.classList.remove("js-follow-btn");
      e.target.innerHTML = followBtnIcon;
    } else {
      e.target.classList.add("js-follow-btn");
      e.target.innerHTML = "<i class='fa-solid fa-user-check'></i> Followed";
    }
  });
});

//Hashtag Focus
var focusHasthtag = document.getElementsByClassName("btn-hashtag");
var hashtagContent = document.getElementsByClassName("hashtagInput");

focusHasthtag[0].addEventListener("click", () => hashtagContent[0].focus());
//like
function liker(postIndex) {
  if (posts[postIndex].likeCount == 0) {
    posts[postIndex].likeCount++;
  } else {
    posts[postIndex].likeCount--;
  }

  renderPosts();
  savePosts();
}
