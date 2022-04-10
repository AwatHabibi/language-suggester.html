$(document).ready(function()  {
  $("form#question5").submit(function(event)  {
    const question5 = $("select#question5").val();

    if (question5 === "make websites" )  {
      $("#result").show("JavaScript");
    } else if (question5 === "make apps") {
      $("#result").show("Swift");
    } else  {
      $("result").show("Python")

      event.preventDefault();
    }
  })
})