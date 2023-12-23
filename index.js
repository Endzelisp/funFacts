const randomFactEl = document.querySelector('#random-fact');
const getFactBtn = document.querySelector('#get-random-fact');


async function randomFact() {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error:", error);
    return "Failed to fetch a random fact.";
  }
}

getFactBtn.addEventListener('click', function() {
  randomFact().then(content => {
    randomFactEl.textContent = content;
  })
})