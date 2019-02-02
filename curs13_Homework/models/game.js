function Game(options = {}) {
  this.id = options.id;
  this.userId = options.userId;
  this.title = options.title;
  this.description = options.description;
}

var apiRoot = "https://games-world.herokuapp.com/games/";

Game.prototype.getGame = function() {
  var self = this;
  console.log("Game THIS", this);

  return $.get(apiRoot + this.id).then(function(response) {
    console.log("PROMISE THIS", this);
    self.userId = response.userId;
    self.title = response.title;
    self.description = response.description;
  });
};

Game.prototype.deleteGame = function() {
  console.log("Game deleted !!!!!!!!!!");
  // return $.ajax({
  //   url: apiRoot + this.id,
  //   method: "DELETE"
  // });
};
