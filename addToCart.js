let addToCart = document.querySelectorAll(".add-cart");
let products = [
  //img accesorii
  {
    name: "Funda roz cu brosa",
    tag: "imgAccesorii1",
    price: 40,
    inCart: 0,
  },
  {
    name: "Funda neagra",
    tag: "imgAccesorii2",
    price: 50,
    inCart: 0,
  },
  {
    name: "Funda alb cu negru",
    tag: "imgAccesorii3",
    price: 45,
    inCart: 0,
  },
  {
    name: "Accesoriu gat",
    tag: "imgAccesorii4",
    price: 65,
    inCart: 0,
  },
  {
    name: "Funda rosie",
    tag: "imgAccesorii5",
    price: 60,
    inCart: 0,
  },
  {
    name: "Set cercei si colier",
    tag: "imgAccesorii6",
    price: 150,
    inCart: 0,
  },
  {
    name: "Colier cristal roz",
    tag: "imgAccesorii7",
    price: 90,
    inCart: 0,
  },
  {
    name: "Colier cu pandativ rosu",
    tag: "imgAccesorii8",
    price: 100,
    inCart: 0,
  },
  {
    name: "Inel piatra rosie",
    tag: "imgAccesorii9",
    price: 90,
    inCart: 0,
  },
  {
    name: "Cercei aurii cu perla",
    tag: "imgAccesorii10",
    price: 70,
    inCart: 0,
  },
  {
    name: "Cercei aurii queen",
    tag: "imgAccesorii11",
    price: 70,
    inCart: 0,
  },
  {
    name: "Inel aurit",
    tag: "imgAccesorii12",
    price: 90,
    inCart: 0,
  },
  {
    name: "Brosa queen",
    tag: "imgAccesorii13",
    price: 100,
    inCart: 0,
  },
  {
    name: "Colier dark",
    tag: "imgAccesorii14",
    price: 67,
    inCart: 0,
  },
  {
    name: "Funda rosie",
    tag: "imgAccesorii15",
    price: 40,
    inCart: 0,
  },
  {
    name: "Brosa queen",
    tag: "imgAccesorii16",
    price: 56,
    inCart: 0,
  },
  //img clothing
  {
    name: "Rochie alba lunga",
    tag: "imgClothing1",
    price: 150,
    inCart: 0,
  },
  {
    name: "Corset",
    tag: "imgClothing2",
    price: 150,
    inCart: 0,
  },
  {
    name: "Rochie si fundita",
    tag: "imgClothing3",
    price: 180,
    inCart: 0,
  },
  {
    name: "Salopeta lejera din bumbac",
    tag: "imgClothing4",
    price: 200,
    inCart: 0,
  },
  {
    name: "Set complet vintage",
    tag: "imgClothing5",
    price: 250,
    inCart: 0,
  },
  {
    name: "Rochie gri cu palton si fundita",
    tag: "imgClothing6",
    price: 450,
    inCart: 0,
  },
  {
    name: "Rochie neagra catifea si palton negru",
    tag: "imgClothing7",
    price: 380,
    inCart: 0,
  },
  {
    name: "Manusi vintage",
    tag: "imgClothing8",
    price: 100,
    inCart: 0,
  },
  {
    name: "Manusi negre",
    tag: "imgClothing9",
    price: 180,
    inCart: 0,
  },
  {
    name: "Palarie vintage cu margele",
    tag: "imgClothing10",
    price: 150,
    inCart: 0,
  },
  {
    name: "Bluza cu camasa",
    tag: "imgClothing11",
    price: 170,
    inCart: 0,
  },
  {
    name: "Camasa neagra vintage",
    tag: "imgClothing12",
    price: 150,
    inCart: 0,
  },
  {
    name: "Funda vintage cu piatra",
    tag: "imgClothing13",
    price: 100,
    inCart: 0,
  },
  {
    name: "Manusa alba vintage",
    tag: "imgClothing14",
    price: 120,
    inCart: 0,
  },
  {
    name: "Camasa alba",
    tag: "imgClothing15",
    price: 140,
    inCart: 0,
  },
  {
    name: "Guler vintage",
    tag: "imgClothing15",
    price: 90,
    inCart: 0,
  },
  //img dress
  {
    name: "Rochie lunga bleo",
    tag: "imgDress1",
    price: 250,
    inCart: 0,
  },
  {
    name: "Rochie lunga crem",
    tag: "imgDress2",
    price: 270,
    inCart: 0,
  },
  {
    name: "Rochie lunga roz",
    tag: "imgDress3",
    price: 280,
    inCart: 0,
  },
  {
    name: "Rochie lunga alba",
    tag: "imgDress4",
    price: 350,
    inCart: 0,
  },
  {
    name: "Rochie bleo si auriu",
    tag: "imgDress5",
    price: 400,
    inCart: 0,
  },
  {
    name: "Rochie crem cu flori cusute manual",
    tag: "imgDress6",
    price: 390,
    inCart: 0,
  },
  {
    name: "Rochie lunga cu volane",
    tag: "imgDress7",
    price: 380,
    inCart: 0,
  },
  {
    name: "Rochie lunga verde",
    tag: "imgDress8",
    price: 280,
    inCart: 0,
  },
  {
    name: "Rochie lunga roz cu matase alba",
    tag: "imgDress9",
    price: 370,
    inCart: 0,
  },
  {
    name: "Rochie lunga roz",
    tag: "imgDress10",
    price: 300,
    inCart: 0,
  },
  {
    name: "Rochie lunga roz pudra",
    tag: "imgDress11",
    price: 390,
    inCart: 0,
  },
  {
    name: "Set rochie cu palarie, evantai si umbrela",
    tag: "imgDress12",
    price: 500,
    inCart: 0,
  },
  {
    name: "Set rochie cu palarie si umbrela",
    tag: "imgDress13",
    price: 470,
    inCart: 0,
  },
  {
    name: "Rochie lunga alba cu design handmade",
    tag: "imgDress14",
    price: 390,
    inCart: 0,
  },
  {
    name: "Rochie lunga catifea rosie",
    tag: "imgDress15",
    price: 600,
    inCart: 0,
  },
  {
    name: "Rochie lunga rosu royal",
    tag: "imgDress16",
    price: 650,
    inCart: 0,
  },
  //img shoes
  {
    name: "Pantofi maro",
    tag: "imgShoes1",
    price: 100,
    inCart: 0,
  },
  {
    name: "Pantofi negri",
    tag: "imgShoes2",
    price: 100,
    inCart: 0,
  },
  {
    name: "Pantofi cu fundita",
    tag: "imgShoes3",
    price: 110,
    inCart: 0,
  },
  {
    name: "Sandale negre",
    tag: " imgShoes4",
    price: 80,
    inCart: 0,
  },
  {
    name: "Sandale verzi",
    tag: "imgShoes5",
    price: 90,
    inCart: 0,
  },
  {
    name: "Pantofi decupati",
    tag: "imgShoes6",
    price: 120,
    inCart: 0,
  },
  {
    name: "Pantofi",
    tag: "imgShoes7",
    price: 90,
    inCart: 0,
  },
  {
    name: "Pantofi bleo",
    tag: "imgShoes8",
    price: 80,
    inCart: 0,
  },
  {
    name: "Pantofi diamond",
    tag: "imgShoes9",
    price: 190,
    inCart: 0,
  },
  {
    name: "Pantofi diamond albi",
    tag: "imgShoes10",
    price: 140,
    inCart: 0,
  },
  {
    name: "Pantofi queen",
    tag: "imgShoes11",
    price: 150,
    inCart: 0,
  },
  {
    name: "Pantofi perlati",
    tag: "imgShoes12",
    price: 130,
    inCart: 0,
  },
  {
    name: "Sandale cu funda",
    tag: "imgShoes13",
    price: 100,
    inCart: 0,
  },
  {
    name: "Pantofi pearls",
    tag: "imgShoes14",
    price: 99,
    inCart: 0,
  },
  {
    name: "Pantofi cu margele",
    tag: "imgShoes15",
    price: 130,
    inCart: 0,
  },
  {
    name: "Pantofi golden",
    tag: "imgShoes16",
    price: 120,
    inCart: 0,
  },
];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers); // from string to number
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".cart span").textContent = productNumbers - 1;
    console.log("action running");
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.tag;
    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product,
      };
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - product.price);
  } else if (cart != null) {
    cart = parseInt(cart);
    localStorage.setItem("totalCost", cart + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);
  let productContainer = document.querySelector(".products");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `
      <div class="product"  id=${item.tag}>
        <ion-icon name="close-circle"></ion-icon> 
       <img src="./images/${item.tag}.jpeg"/>
      <span class="sm-hide">${item.name}</span>
    </div>
    <div class="price sm-hide">${item.price}</div>
    <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
    <div class="total">
      ${item.inCart * item.price}
  </div> `;
    });
    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Cost Total</h4>
                <h4 class="basketTotal">${cart}</h4>
            </div>`;

    deleteButtons();
    manageQuantity();
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = " ";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct =
        decreaseButtons[
          i
        ].parentElement.previousElementSibling.previousElementSibling.querySelector(
          "span"
        ).parentElement.id;

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct =
        increaseButtons[
          i
        ].parentElement.previousElementSibling.previousElementSibling.querySelector(
          "span"
        ).parentElement.id;

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".product ion-icon");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName;
  console.log(cartItems);

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.id;
      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

onLoadCartNumbers();
displayCart();