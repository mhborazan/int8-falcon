var commentInput = document.getElementsByClassName('commentInput');
var commentsContainer = document.getElementsByClassName('commentarios');
var commentsCount = document.getElementsByClassName('commentsCount_post_1');

var commentCounter = parseInt(commentsCount.innerText);

commentInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    var commentText = commentInput.value;

    if (commentText.trim() !== '') {
      var newComment = document.createElement('div');
      newComment.className = 'singleComment';

      var commentAvatar = document.createElement('img');
      commentAvatar.src = 'https://falconreactbs4.prium.me/static/media/3.cb95ae1b.jpg';
      commentAvatar.className = 'avatar small';

      var commentContent = document.createElement('div');
      commentContent.className = 'commentContent p-10';
      commentContent.innerText = commentText;

      newComment.appendChild(commentAvatar);
      newComment.appendChild(commentContent);

      commentsContainer.prepend(newComment); 

      commentInput.value = ''; 

      commentCounter++; 
      commentsCount.innerText = commentCounter; 
    }
  }
});
