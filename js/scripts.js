$(document).ready(function()  {
  $("form#myForm").submit(function(event)  {
    const question5 = $("select#q5").val();
    
    if (question5 === "Build websites" )  {
      $("#result").show();
      $("#languages").html("Java Script");
    } else if (question5 === "Make apps") {
      $("#result").show();
      $("#languages").html("Swift");
    } else  {
      $("#result").show();
      $("#languages").html("Python");
    

    }
    event.preventDefault();
  })
});