const url =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&per_page=12";
const popularUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&categories=64";
const drinkUrl =
  "https://peckish.lisa-noroff.no/wp-json/wp/v2/posts?_embed&categories=61";

const firstSection = document.querySelector(".section1");
const secondSection = document.querySelector(".section2");
const thirdSection = document.querySelector(".section3");
const fourthSection = document.querySelector(".section4");
const firstSectionMobile = document.querySelector(".section1-1");
const secondSectionMobile = document.querySelector(".section2-2");
const thirdSectionMobile = document.querySelector(".section3-3");
const fourthSectionMobile = document.querySelector(".section4-4");

const popularContainer = document.querySelector(".popular-container");
const drinksContainer = document.querySelector(".drinks-container");

const slider = document.querySelector(".slider-desktop");
const mobileSlider = document.querySelector(".slider-mobile");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");

var sectionIndex = 0;

function setIndex(index) {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  mobileSlider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    setIndex();
    indicator.classList.add("selected");
  });
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  mobileSlider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  mobileSlider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

async function getCarousel() {
  try {
    const response = await fetch(url);
    const blogList = await response.json();

    const blog = blogList;

    for (let i = 0; i < blogList.length; i++) {
      if (i === 3) {
        break;
      }
      firstSection.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
    for (let i = 3; i < blogList.length; i++) {
      if (i === 6) {
        break;
      }
      secondSection.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
    for (let i = 6; i < blogList.length; i++) {
      if (i === 9) {
        break;
      }
      thirdSection.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
    for (let i = 9; i < blogList.length; i++) {
      if (i === 12) {
        break;
      }
      fourthSection.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
    
         </a>
    </div>
     `;
    }
    for (let i = 0; i < blogList.length; i++) {
      if (i === 1) {
        break;
      }
      firstSectionMobile.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
    for (let i = 1; i < blogList.length; i++) {
      if (i === 2) {
        break;
      }
      secondSectionMobile.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
    for (let i = 2; i < blogList.length; i++) {
      if (i === 3) {
        break;
      }
      thirdSectionMobile.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
    for (let i = 3; i < blogList.length; i++) {
      if (i === 4) {
        break;
      }
      fourthSectionMobile.innerHTML += `
    <div class="carousel-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="carousel-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="carousel-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
  } catch (error) {
    console.log(error);
  }
}

getCarousel();

async function getPopular() {
  try {
    const response = await fetch(popularUrl);
    const blogList = await response.json();

    const blog = blogList;

    for (let i = 0; i < blogList.length; i++) {
      if (i === 3) {
        break;
      }
      popularContainer.innerHTML += `
    <div class="popular-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="popular-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">
            <div class="popular-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
         </a>
    </div>
     `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPopular();

async function getDrinks() {
  try {
    const response = await fetch(drinkUrl);
    const blogList = await response.json();

    const blog = blogList;

    for (let i = 0; i < blogList.length; i++) {
      if (i === 4) {
        break;
      }
      drinksContainer.innerHTML += `
    <div class="drinks-item">
        <a href="blogpost.html?id=${blog[i].id}">
            <img class="drinks-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
            alt="${blog[i].title.rendered}">

            <div class="drinks-title">
            <h3>${blog[i].title.rendered}</h3>
            </div>
           
         </a>
    </div>
     `;
    }
  } catch (error) {
    console.log(error);
  }
}

getDrinks();
