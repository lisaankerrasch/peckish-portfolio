const url =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&per_page=20";
const blogPost = document.querySelector(".blogpost");
const loader = document.querySelector(".loader");
const moreUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&per_page=20&offset=10";
const loadButton = document.querySelector(".load-more");

async function getBlogposts() {
  try {
    const response = await fetch(url);
    const blogList = await response.json();

    const blog = blogList;

    console.log(blogList);

    loader.classList.add("show-hide");
    loadButton.classList.remove("show-hide");

    for (let i = 0; i < blogList.length; i++) {
      if (i === 10) {
        break;
      }
      blogPost.innerHTML += `      
      <a href="blogpost.html?id=${blog[i].id}">
      <div class="blogpost-block">
        <div class="blogpost-block-1">
            <img src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
        </div></a>
        <div class="blogpost-block-2">
            <div class="blogpost-block-text">
            <a href="blogpost.html?id=${blog[i].id}"><h4>${blog[i].title.rendered}</h4></a>
                <p>${blog[i].excerpt.rendered}</p>
                <a href="blogpost.html?id=${blog[i].id}"><p>Read more..</p></a>

        </div>
    </div>
`;
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogposts();

loadButton.onclick = async function getMore() {
  try {
    const response = await fetch(moreUrl);
    const moreList = await response.json();

    console.log(moreList);

    loadButton.classList.add("show-hide");

    for (let i = 0; i < moreList.length; i++) {
      blogPost.innerHTML += `
      <a href="blogpost.html?id=${moreList[i].id}">
            <div class="blogpost-block">
                <div class="blogpost-block-1">
                    <img src="${moreList[i]._embedded["wp:featuredmedia"]["0"].source_url}"
                    alt="${moreList[i].title.rendered}">
                    </div></a>
                <div class="blogpost-block-2">
                    <div class="blogpost-block-text">
                    <a href="blogpost.html?id=${moreList[i].id}"><h4>${moreList[i].title.rendered}</h4></a>
                        <p>${moreList[i].excerpt.rendered}</p>
                        <a href="blogpost.html?id=${moreList[i].id}">Read more...</a>
                    </div>
            </div>
        `;
    }
  } catch (error) {
    console.log(error);
  }
};
