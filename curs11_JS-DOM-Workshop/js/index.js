// console.log("DOM=", document);
// console.log("List of comments", document.getElementById("comments-list"));
// console.log("Comments items", document.getElementsByClassName("comment-item"));
// console.log("Authors", document.querySelectorAll(".comment-item strong"));

var commentsList = document.getElementById("comments-list");
var btnSave = document.getElementById("btn-save");
btnSave.addEventListener("click", displayComment);

function displayComment(event) {
  event.preventDefault();

  var item = {};
  item.title = document.querySelector("[name=title]").value;
  item.comment = document.querySelector("[name=comment]").value;
  item.author = document.querySelector("[name=author]").value;

  displayCommentHtml(item);
}

function displayCommentHtml(item) {
  var commentItem = document.createElement("section");
  commentItem.classList.add("comment-item");
  commentItem.classList.add("btn-delete");
  commentItem.classList.add("btn-edit");
  commentItem.innerHTML =
    "<h3>" +
    item.title +
    "</h3><p>" +
    item.comment +
    "<strong>" +
    item.author +
    "</strong></p>" +
    "<button class='btn-delete'>Delete</button><button class='btn-edit'>Edit</button>";
  commentsList.appendChild(commentItem);
}

var listOfCommentObjects = [
  {
    title: "Comment 1",
    comment: "This is a useless comment just for fun!!!",
    author: "Author 1"
  },
  {
    title: "Comment 2",
    comment: "This is a useless comment just for fun!!!",
    author: "Author 2"
  },
  {
    title: "Comment 3",
    comment: "This is a useless comment jush for fun!!!",
    author: "Author 3"
  },
  {
    title: "Comment 4",
    comment: "This is a useless comment just for fun!!!",
    author: "Author 4"
  },
  {
    title: "Comment 5",
    comment: "This is a useless comment just for fun!!!",
    author: "Author 5"
  }
];
function displayComments(listOfObjects) {
  for (var i = 0; i < listOfObjects.length; i++) {
    console.log(listOfObjects[i]);
    displayCommentHtml(listOfObjects[i]);
  }
}
displayComments(listOfCommentObjects);
// homework sa nu putem adauga comentarii fara continut
// introducem delete
// introducem edit
// search
