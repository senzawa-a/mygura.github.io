const quotes = [
  {
    quote: "바다처럼 광활한 것은 너와 같다.",
    author: "Lucy",
  },
  {
    quote: "포기는 그 무엇도 아닌 아닌 너의 한계다.",
    author: "Lucy",
  },
  {
    quote: "넘어져서 일어나는 법을 배웠다.",
    author: "Lucy",
  },
  {
    quote: "교육은 더 높은 수준의 편견을 얻는 방법이다.",
    author: "Laurence J. Peter",
  },
  {
    quote: "스스로를 자제하는 것은 사람의 의무라고 생각한다.",
    author: "Lois McMaster Bujold",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
