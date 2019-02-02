document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  var games = new Games();
  games.getGames().then(function(response) {
    console.log("Response", response);
    displayGames(response);
  });
}

function displayGames(games) {
  var container = document.getElementById("list-games");
  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var html = document.createElement("article");
    html.setAttribute("data-id", game._id);
    html.innerHTML = `<h2> ${game.title} </h2>
                      <p> ${game.description} </p>
                      <button>Add</button>
                      <button>Edit</button>
                      <button class="btn-delete">Delete</button>
                      <img src='${game.imageUrl}' width='500px' height='auto'>`;
    html.querySelector("h2").addEventListener("click", viewGame);
    html.querySelector(".btn-delete").addEventListener("click", deleteGame);
    container.appendChild(html);
  }

  function deleteGame() {
    var gameHtml = this.parentNode;
    var id = gameHtml.getAttribute("data-id");
    var game = new Game({ id: id });
    game.deleteGame().then(
      function(response) {
        console.log("DELETE response", response);
        gameHtml.remove();
      },
      function(error) {
        alert("Cannot DELETE game");
      }
    );
    // add new method Article deleteArticle
    // on success remove from dom
  }

  //.then(success, error). catch()

  function viewGame() {
    // alert(article.id); id of last article when click is executed
    var id = this.parentNode.getAttribute("data-id");
    window.open(
      "https://kpyry6nv7.codesandbox.io/curs13_Homework/pages/gameDetails.html?id=" +
        id,
      "_blank"
    );
  }
}

// UpdateGame
// Url: /games/: id Method: PUT Payload:
// {
//   title: “new title”
// }
