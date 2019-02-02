// import "./styles.css";

// import $ from "jquery";

$(document).ready(function() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "PUT",
    data: {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 5
    },
    success: function(response) {
      $("#title").html(response.title);
      $("#body").html(response.body);
    },
    error: function(xhr, status, error) {
      console.log(error);
    }
  });

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: function(posts) {
      for (var i = 0; i < posts.length; i++) {
        $("#posts").append("<option>" + posts[i].title + "</option>");
      }
    }
  });
});
