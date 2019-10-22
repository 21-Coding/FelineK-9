$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("ul#meow").append("<li>meow</li>");
    $("ul#meow").children("li").click(function() {
      $(this).remove();
    });
  });
  $("button#dog-button").click(function() {
    $("ul#woof").append("<li>woof</li>");
    $("ul#woof").children("li").click(function() {
      $(this).remove();
    });
  });
});
