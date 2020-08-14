
  

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

    
    event.preventDefault();
  });
});