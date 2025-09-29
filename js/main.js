const searchBtn = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Первый товар",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./image/bg-item.png",
  },
  {
    id: 1,
    title: "Второй товар",
    price: "171 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./image/bg-item.png",
  },
  {
    id: 2,
    title: "Третий товар",
    price: "172 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./image/bg-item.png",
  },
  {
    id: 3,
    title: "Четвертый товар",
    price: "173 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./image/bg-item.png",
  },
  {
    id: 4,
    title: "Пятый товар",
    price: "174 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./image/bg-item.png",
  },
  {
    id: 5,
    title: "Шестой товар",
    price: "175 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./image/bg-item.png",
  }
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";

  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML("beforeend", `
      <a href="./product.html" class="content-main__list-item flex">
        <div class="content-main__list-item--image flex">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <h5 class="content-main__list-item--title">
          ${item.title}
        </h5>
        <span class="content-main__list-item--price">${item.price}</span>
        <span class="content-main__list-item--address">${item.address}</span>
        <span class="content-main__list-item--date">${item.date}</span>
      </a>
    `)
  })
};

render(cardArray);

const filteredArray = (array, value) => {
  return array.filter((item) => {
    return item.title.toLowerCase().includes(value) || item.price.toLowerCase().includes(value)
  });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.gap = "30px";

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value));
})