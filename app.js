let btn = document.querySelector(`#button`);
let quote = document.querySelector(`.quote`);
let person = document.querySelector(`.person`);

const quotes = [
  {
    quote: `"I don't have two different personalities. I am what I am."`,
    person: `Judi Sheindlin`,
  },
  {
    quote: `“Every child is an artist; the problem is staying an artist when you grow up”`,
    person: `Pablo Picasso`,
  },
  {
    quote: `"Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.” `,
    person: `Andy Warhol`,
  },
  {
    quote: `“Art is a collaboration between God and the artist, and the less the artist does the better.”`,
    person: `Ralph Waldo Emerson`,
  },
  {
    quote: `“I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.”`,
    person: `Georgia O’Keeffe`,
  },
  {
    quote: `“Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.”`,
    person: `Ray Bradbury`,
  }
];
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText= quotes[random].person;
})