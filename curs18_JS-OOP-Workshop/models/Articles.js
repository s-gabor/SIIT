function Articles() {
  this.items = [];
}

Articles.prototype.getArticles = function() {
  return $.get("https://jsonplaceholder.typicode.com/posts").then(function(
    response
  ) {
    return response;
    // this.items = response;
  });
};
