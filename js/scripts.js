
  

$(document).ready(function() {
  $("#formOne").submit(function(event) {

    const answer1 = parseInt($("input:radio[name=q1]:checked").val());
    const answer2 = parseInt($("input:radio[name=q2]:checked").val());
    const answer3 = parseInt($("input:radio[name=q3]:checked").val());
    const answer4 = parseInt($("input:radio[name=q4]:checked").val());
    const answer5 = parseInt($("input:radio[name=q5]:checked").val());
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
    const addTotal = (answer1) + (answer2) + (answer3) + (answer4) + (answer5); 
    console.log(addTotal);
    const result = (Math.round(addTotal/5));
    console.log(result);

    if (result > 3) {
      $("#ruby").show();
      $(".hide-form").hide();
      $("#python").hide();
      $("#cSharp").hide();
      $("#error").hide();
    } else if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5) {
      $("#error").show();
      $(".hide-form").hide();
    } else if (result === 3) {
      $("#python").show();
      $(".hide-form").hide();
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#error").hide();
    } else {
      $("#cSharp").show();
      $(".hide-form").hide();
      $("#python").hide();
      $("#ruby").hide();
      $("#error").hide();

    }
    event.preventDefault();

  });
});