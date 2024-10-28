const bandsiteApi = new BandsiteAPI(API_KEY);

const commentsList = document.querySelector(".comments-list");

const renderComments = async () => {
  commentsList.innerHTML = "";
  let comments = [];
  try {
    comments = await bandsiteApi.getComments();
  } catch (error) {
    console.error("Error fetching comments", error);
  }

  for (let i = 0; i < comments.length; i++) {
    const commentArticle = document.createElement("article");
    commentArticle.classList.add("comment");

    const commentAvatar = document.createElement("div");
    commentAvatar.classList.add("comment__avatar");

    const commentWrap = document.createElement("div");
    commentWrap.classList.add("comment__wrapper");

    const commentTitle = document.createElement("h3");
    commentTitle.classList.add("comment__title");
    commentTitle.innerHTML = comments[i].name;

    const commentDate = document.createElement("p");
    commentDate.classList.add("comment__date");
    commentDate.innerHTML = comments[i].date;
    commentDate.innerHTML = new Date(comments[i].timestamp).toLocaleDateString(
      "en-US"
    );

    const commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerHTML = comments[i].comment;

    const commentTitleWrap = document.createElement("div");
    commentTitleWrap.classList.add("comment__title-wrapper");

    commentsList.appendChild(commentAvatar);
    commentsList.appendChild(commentWrap);
    commentsList.appendChild(commentTitleWrap);
    commentTitleWrap.appendChild(commentTitle);
    commentTitleWrap.appendChild(commentDate);
    commentWrap.appendChild(commentTitleWrap);
    commentWrap.appendChild(commentText);
    commentArticle.appendChild(commentAvatar);
    commentArticle.appendChild(commentWrap);
    commentsList.appendChild(commentArticle);
  }
};
renderComments();

const form = document.querySelector(".comments__form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await bandsiteApi.addComment({
    name: event.target.name.value,
    comment: event.target.comment.value,
  });
  renderComments();
  form.reset();
});
