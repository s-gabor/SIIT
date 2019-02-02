document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  var container = document.querySelector("article");
  var id = getUrlParameter("id");

  var article = new Article({ id: id });
  article.getArticle().then(function() {
    console.log("TITLE", article.title);

    var html = document.createElement("h1");
    html.innerHTML = article.title;

    container.appendChild(html);
  });
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
