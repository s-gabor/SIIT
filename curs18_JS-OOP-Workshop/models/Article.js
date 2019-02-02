function Article(options = {}) {
  this.id = options.id;
  this.userId = options.userId;
  this.title = options.title;
  this.body = options.body;
}

var apiRoot = "https://jsonplaceholder.typicode.com/posts/";

Article.prototype.getArticle = function() {
  var self = this;
  console.log("ARTICLE THIS", this);

  return $.get(apiRoot + this.id).then(function(response) {
    console.log("PROMISE THIS", this);
    self.userId = response.userId;
    self.title = response.title;
    self.body = response.body;
  });
};

Article.prototype.deleteArticle = function() {
  return $.ajax({
    url: apiRoot + this.id,
    method: "DELETE"
  });
};
