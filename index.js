let menuBtn = document.querySelector(".menu__btn");
let link = document.querySelector(".header__link");
let list = document.querySelector(".header__list");
let restaurantsList = document.querySelector(".restaurants__list");
let dishesList = document.querySelector(".dishes__list");
let purchasesList = document.querySelector(".purchases__list");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  list.classList.toggle("active");
});

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const customersScroll = () => {
  const section = document.querySelector(".customers__list");
  if (isElementInViewport(section)) {
    section.classList.add("customers__animation");
    window.removeEventListener("scroll", customersScroll);
  }
};

window.addEventListener("scroll", customersScroll);
customersScroll();



const qualityScroll = () => {
  const section = document.querySelector(".quality__inner");
  console.log(section);
  if (isElementInViewport(section)) {
    
    section.classList.add("quality__animation");
    window.removeEventListener("scroll", qualityScroll);
  }
};
window.addEventListener("scroll", qualityScroll);
qualityScroll();



const restaurantScroll = () => {
  const section = document.querySelector(".restaurants__inner");
  if (isElementInViewport(section)) {
    section.classList.add("restaurants__animation");
    window.removeEventListener("scroll", restaurantScroll);
  }
};

window.addEventListener("scroll", restaurantScroll);
restaurantScroll();


const dishScroll = () => {
  const section = document.querySelector(".dishes__inner");
  if (isElementInViewport(section)) {
    section.classList.add("dishes__animation");
    window.removeEventListener("scroll", restaurantScroll);
  }
};
window.addEventListener("scroll", dishScroll);
dishScroll();


const restaurantsData = [
  {
    id: 1,
    imgageUrl: "./img/RestaurantImage3.jpg",
    title: "The Chicken King",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    saved: "./img/healthy-saved.svg",
  },
  {
    id: 2,
    imgageUrl: "./img/RestaurantImage2.jpg",
    title: "The Burger King",
    deliveryTime: "24min •",
    rating: 4.9,
    status: "Trending",
    saved: "./img/healthy-saved.svg",
  },
  {
    id: 3,
    imgageUrl: "./img/RestaurantImage1.jpg",
    title: "The Chicken King",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    saved: "./img/healthy-saved.svg",
  },
];

const createRestaurantsList = restaurantsData
  .map((restaurant) => {
    const statusClass = restaurant.status === "Healthy" ? "healthy" : "treding";
    return `
  <li class="restaurants__item">
  <img class="restaurants__img"  src="${restaurant.imgageUrl}" alt="image">
  <ul class="restaurants__list_2">
  <span class="restaurants__status ${statusClass}">${restaurant.status}</span>
  <h3 class="restaurants__h3">${restaurant.title}</h3>
  <div class="healhty__div">
  <div>
  <span class="restaurants__time">${restaurant.deliveryTime}</span>
  <span class="restaurants__reting">${restaurant.rating}</span>
  </div>
  <img class="restaurants__saved" src="${restaurant.saved}" alt="">
  </div>
  </ul>
</li>
`;
  })

  .join("");
restaurantsList.innerHTML = createRestaurantsList;

const dishesData = [
  {
    id: 1,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage1.jpg",
    title: "Chicken Hell",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    price: "$12.99",
    saved: "",
  },
  {
    id: 2,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage2.jpg",
    title: "Swe Dish",
    deliveryTime: "34min •",
    rating: 4.9,
    status: "Trending",
    price: "$19.99",
    saved: "",
  },
  {
    id: 3,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage3.jpg",
    title: "Swe Dish",
    deliveryTime: "34min •",
    rating: 4.9,
    status: "Supreme",
    price: "$19.99",
    saved: "",
  },
  {
    id: 4,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage1.jpg",
    title: "Chicken Hell",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    price: "$12.99",
    saved: "",
  },
];

const createDishesList = dishesData
  .map((dish) => {
    return `
      <li class="dishes__item">
      <button class="dishes__heart__btn">
      <img class="dishes__img__heart"  src="${dish.imgageUrl2}" alt="image">
      </button>
      <img class="dishes__img"  src="${dish.imgageUrl}" alt="image">
      <div class="dishes__item__inner">
      <span class="dishes__status ${dish.status.toLowerCase()}">${
      dish.status
    }</span>
      <h3 class="dishes__title">${dish.title}</h3>
      <div class="time__wrapper">
      <span class="dishes__time">${dish.deliveryTime}</span>
      <span class="dishes__reting">${dish.rating}</span>
      </div>
      <div class="price__wrapper">
      <span class="dishes__price">${dish.price}</span>
      <button class="dishes__add__btn">+</button>
      </div>
      </div>
    </li>
    `;
  })

  .join("");
dishesList.innerHTML = createDishesList;

