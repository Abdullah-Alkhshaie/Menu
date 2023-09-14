const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    img: "./img/item-1.jpeg",
    price: "15.99",
    text: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed
        `,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    img: "./img/item-2.jpeg",
    price: "13.99",
    text: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats
`,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    img: "./img/item-3.jpeg",
    price: "6.99",
    text: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.
`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "dinner",
    img: "./img/item-4.jpeg",
    price: "20.99",
    text: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,
`,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    img: "./img/item-5.jpeg",
    price: "22.99",
    text: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up
`,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "breakfast",
    img: "./img/item-6.jpeg",
    price: "18.99",
    text: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday
`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "lunch",
    img: "./img/item-7.jpeg",
    price: "8.99",
    text: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird
`,
  },
  {
    id: 8,
    title: "American Classic",
    category: "shakes",
    img: "./img/item-8.jpeg",
    price: "12.99",
    text: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut
`,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "dinner",
    img: "./img/item-9.jpeg",
    price: "16.99",
    text: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.
`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "lunch",
    img: "./img/item-10.jpeg",
    price: "39.99",
    text: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const dishSection = document.querySelector(".dish-section");
let filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu);
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;

    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "all") {
      displayMenuItem(menu);
    } else {
      displayMenuItem(menuCategory);
    }
  });
});

let displayMenuItem = (menuItem) => {
  let displayMenu = menuItem.map((item) => {
    return ` <div class="dish">
        <img src="${item.img}" alt="${item.title}" />
        <div class="dish-info">
          <div class="header">
            <h4 class="dish-title">${item.title}</h4>
            <span class="price">$${item.price}</span>
          </div>
          <p class="dish-text">
          ${item.text}
          </p>
        </div>
      </div>`;
  });

  displayMenu = displayMenu.join("");

  dishSection.innerHTML = displayMenu;
};
