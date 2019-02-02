function Games() {
  this.items = [];
}

Games.prototype.getGames = function() {
  return $.get("https://games-world.herokuapp.com/games/").then(function(
    response
  ) {
    console.log("got games: ", response);
    return response;
    // this.items = response;
  });
};
