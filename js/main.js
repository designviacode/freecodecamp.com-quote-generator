$(document).ready(function() {
  getRandomQuote();
  $(".btn-success").click(function() {
    getRandomQuote();
  });
});

function getRandomQuote() {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en',
    dataType: 'jsonp'
  });
}

function parseQuote(response) {
  $("#heading").toggleClass("fadeInUp fadeInUpBig").text(response.quoteText);
  $("#cite").toggleClass("fadeInUp fadeInUpBig").text(response.quoteAuthor);
  $(".btn-success").toggleClass("fadeInUp fadeInUpBig");
}