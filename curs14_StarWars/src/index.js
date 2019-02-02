import "./styles.css";

import $ from "jquery";

// StarWars (using jQuery with promises)

$(document).ready(function() {
  $("#search").keyup(function() {
    var searchBy = $("#search").val();
    $("#result").empty();

    if (searchBy.length >= 1) {
      $("#loading").text("loading...");

      var criteria = $(":checked").val();

      $.ajax({
        url: "https://swapi.co/api/" + criteria + "/?search=" + searchBy,
        method: "GET"
      }).then(function(data) {
        var items = data.results;
        for (var i = 0; i < data.count; i++) {
          $("#result").append(`<li>${items[i].name}</li>`);

          $("#loading").text("");
        }
      });
    }
  });

  //   $("#posts").change(function() {
  //     var id = $("#posts").val();
  //     console.log(id);
  //     // GET SELECTED POST DETAILS
  //     $.ajax({
  //       url: "https://jsonplaceholder.typicode.com/posts/" + id,
  //       method: "GET"
  //     })
  //       .then(function(post) {
  //         $("#title").html(post.title);
  //         $("#body").html(post.body);

  //         return post.id;
  //       })
  //       .then(function(id) {
  //         // GET COMMENTS FOR THE SELECTED POST
  //         $.ajax({
  //           url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  //           method: "GET"
  //         })
  //           .then(function(comments) {
  //             $("#comments").empty();

  //             return comments;
  //           })
  //           .then(function(comments) {
  //             for (var i = 0; i < comments.length; i++) {
  //               $("#comments").append(
  //                 `<li><b>${comments[i].name}</b> [${
  //                   comments[i].email
  //                 }] says:<br />${comments[i].body}</li>`
  //               );

  //               return comments[0].email;
  //             }
  //           })
  //           .then(function(email) {
  //             //console.log(email);
  //             return email[0];
  //           })
  //           .then(function(letter) {
  //             //console.log(letter);
  //           });
  //       });
  //   });
  // });
});
