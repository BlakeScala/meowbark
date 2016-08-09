$(document).ready(function() {
  $("button#catbtn").click(function() {
    $("h3#dogs").after("<p>Barkbarkbark!</p>");
  });
  $("button#dogbtn").click(function() {
    $("h3#cats").after("<p>Meow</p>");
  });
});
