var theSeries = [];

function pingpong(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15===0) {
      theSeries.push('pingpong');
    } else if (i % 5 === 0) {
      theSeries.push('pong');
    } else if (i % 3 === 0) {
      theSeries.push('ping');
    } else {
      theSeries.push(i);
    }
  };
};
$(document).ready(function() {
     $("#pingpong").submit(function(event) {
         event.preventDefault();
         var result = parseInt($("#inputNumber").val())
         pingpong(result);
         // console.log(theSeries);
         theSeries.forEach(function(e) {
           // console.log(theSeries);
           $("#result").append($("<li>").html(e));
         }) 
