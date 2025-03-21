const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, red leaf lettuce, mushroom and egg.`,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg",
    desc: `Mixed rice, serving with vegetables, beef topping and fried egg.`,
  },
  {
    id: 4,
    title: "Dan Dan Noodles",
    category: "China",
    price: 5.99,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg",
    desc: `Dan dan noodle, serving with green onion peanut sauce.`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg",
    desc: `Yangzhou fried rice, serving with bean and pickles.`,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice sandwich, serving with seaweed and pickled plum.`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg",
    desc: `Black bean sauce noodle, serving with green onion.`,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg",
    desc: `Hot pepper and sesame noodles, serving with soy bean.`,
  },
  {
    id: 9,
    title: "Dorayaki",
    category: "Japan",
    price: 3.99,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const menuItems = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

function displayMenuItems(menuItemsArray) {
  let displayMenu = menuItemsArray
    .map((item) => {
      return `
            <div class="menu-items col-sm-12 col-lg-6">
                <img src="${item.img}" alt="${item.title}" class="photo" />
                <div class="menu-info">
                    <div class="menu-title">
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </div>
                    <div class="menu-text">
                        ${item.desc}
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
  menuItems.innerHTML = displayMenu;
  addHoverEffect(); // Her menü öğesi oluşturulduğunda hover efektini ekle
}

function displayMenuButtons() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-item" data-id="${category}">${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".btn-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function addHoverEffect() {
  const menuItems = document.querySelectorAll(".menu-items");
  const hoverSound = new Audio("hover.mp3"); // "hover.mp3" dosyasını ekleyin

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.boxShadow = "0 0 15px 5px rgba(255, 165, 0, 0.7)";
      item.style.transition = "box-shadow 0.3s ease";
      hoverSound.currentTime = 0;
      hoverSound.play();
    });

    item.addEventListener("mouseleave", () => {
      item.style.boxShadow = "none";
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
  addHoverEffect();
});