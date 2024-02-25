var quote = document.getElementById("quote");
var quoteWriter = document.getElementById("quote-writer");
var writerImage = document.getElementById("image");

var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    quoteWriter: " Oscar Wilde",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/oscar.jpg'></div>",
  },
  {
    quote: "“So many books, so little time.””",
    quoteWriter: " Frank Zappa",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/frank.jpg'></div>",
  },
  {
    quote: "“A day without sunshine is like, you know, night.”",
    quoteWriter: " Steve Martin",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/steve.jpg'></div>",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    quoteWriter: " Friedrich Nietzsche",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Friedrich.jpg'></div>",
  },
  {
    quote: "“It is never too late to be what you might have been.”",
    quoteWriter: "George Eliot ",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/George.jpg'></div>",
  },
  {
    quote: "“Go to heaven for the climate and hell for the company.”",
    quoteWriter: " Benjamin Franklin Wade",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Benjamin.jpg'></div>",
  },
  {
    quote: "“Reality continues to ruin my life.”",
    quoteWriter: " Bill Watterson",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Bill.jpg'></div>",
  },
  {
    quote: "“Do one thing every day that scares you.”",
    quoteWriter: " Eleanor Roosevelt",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Eleanor.jpg'></div>",
  },
  {
    quote: "“Love is like the wind, you can't see it but you can feel it.”",
    quoteWriter: " Nicholas Sparks",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Nicholas.jpg'></div>",
  },
  {
    quote: "“There is no friend as loyal as a book.”",
    quoteWriter: " Ernest Hemingway",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Ernest.jpg'></div>",
  },
  {
    quote: "“We read to know we're not alone.”",
    quoteWriter: " William Nicholson",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/William .jpg'></div>",
  },
  {
    quote: "“Everything you can imagine is real.”",
    quoteWriter: " Pablo Picasso",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Pablo.jpg'></div>",
  },
  {
    quote: "“If you judge people, you have no time to love them.”",
    quoteWriter: " Mother Teresa",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Mother.jpg'></div>",
  },
  {
    quote: "“It is never too late to be what you might have been.”",
    quoteWriter: " George Eliot",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/George.jpg'></div>",
  },
  {
    quote: "“That which does not kill us makes us stronger.”",
    quoteWriter: " Friedrich Nietzsche",
    writerImage:
      "<div><img class='w-100 rounded-circle' src='imgs/Friedrich.jpg'></div>",
  },
];

function getQuote() {
  var numQuote = Math.floor(Math.random() * quotes.length);
  (quote.innerHTML = quotes[numQuote].quote) +
    (quoteWriter.innerHTML = quotes[numQuote].quoteWriter) +
    (writerImage.innerHTML = quotes[numQuote].writerImage);
}
