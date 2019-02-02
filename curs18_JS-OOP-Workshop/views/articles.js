document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  var articles = new Articles();
  articles.getArticles().then(function(response) {
    console.log(response);
    displayArticles(response);
  });
}

function displayArticles(articles) {
  var container = document.getElementById("list-articles");
  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var html = document.createElement("article");
    html.setAttribute("data-id", article.id);
    html.innerHTML =
      "<h2>" +
      article.title +
      "</h2><p>" +
      article.body +
      '</p><button>Edit</button><button class="btn-delete">Delete</button>';
    html.querySelector("h2").addEventListener("click", viewArticle);
    html.querySelector(".btn-delete").addEventListener("click", deleteArticle);
    container.appendChild(html);
  }

  function deleteArticle() {
    var articleHtml = this.parentNode;
    var id = articleHtml.getAttribute("data-id");
    var article = new Article({ id: id });
    article.deleteArticle().then(
      function(response) {
        console.log("DELETE response", response);
        articleHtml.remove();
      },
      function(error) {
        alert("Cannot DELETE article");
      }
    );
    // add new method Article deleteArticle
    // on success remove from dom
  }

  //.then(success, error). catch()

  function viewArticle() {
    // alert(article.id); id of last article when click is executed
    var id = this.parentNode.getAttribute("data-id");
    window.open(
      "https://rj8k1k9p4m.codesandbox.io/curs_JS_OOP_Workshop/pages/articleDetails.html?id=" +
        id,
      "_blank"
    );
  }
}

//Adi, RAdu, Anrei, Andrei, Ioan, Robert, Adriana, Vlad, MArian, Sergiyu, Sergiu,
//Sorin, Raul, Alex, Alex, Lorena
