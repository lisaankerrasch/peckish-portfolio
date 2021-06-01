const resultContainer = document.querySelector(".result-content");
const noResults = document.querySelector(".no-results");
const loader = document.querySelector(".loader");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&categories=" + id;

async function getResults() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    const acfResults = results.acf;

    console.log(results);

    loader.classList.add("show-hide");

    for (let i = 0; i < results.length; i++) {
      resultContainer.innerHTML += `
        <div class="result-item">
          <a href="blogpost.html?id=${results[i].id}">
                <img class="result-img" src="${results[i]._embedded["wp:featuredmedia"]["0"].source_url}"
                alt="${results[i].title.rendered}">
                <a href="blogpost.html?id=${results[i].id}">
                <div class="result-title">
                <h3>${results[i].title.rendered}</h3>
                <p>Time: ${results[i].acf.time}</p>
                <p>Allergens: ${results[i].acf.allergens}</hp>


                </div>
          </a>
        </div>
         `;
    }
  } catch (error) {
    console.log(error);
  }
}

getResults();
