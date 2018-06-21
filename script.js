$("documeny").ready(function() {
  getNewQuote();
  $("#new").on("click", getNewQuote);
});

function getNewQuote() {
  $("#quote").parent().hide();
  $("#author").parent().parent().hide();

  $.ajax({
    url:
      "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=quote",
    dataType: "jsonp",
    jsonp: "jsonp",
    success: function(json) {
      var quote = json.quoteText;
      var author = json.quoteAuthor;

      while (quote.endsWith(" ")) {
        quote = quote.slice(0,-1);
      }

      if (!author) {
        author = "Unknown";
      }

      $("#quote").html(quote);
      $("#author").html(author);

      $("#quote").parent().fadeIn("slow");
      $("#author").parent().parent().fadeIn("slow");

      var tweetURL = "https://twitter.com/intent/tweet?text=\"" + quote + '" - ' + author;
      $("#tweet").attr("href", tweetURL);
    }
  });
}
