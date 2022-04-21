import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// We're running this file in development in isolation
// We're using our local index.html file
// which has an element id 'dev-products'
// We want to immediately render our app into this element

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");

  // Assuming our container doesnt have an element
  // with id 'dev-products'
  if (el) {
    // We're probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We're running this file in development or production
// through the CONTAINER app
// NO GARANTEE that an element id 'dev-products' exists in container app
// We don't want to immediately render render our app

export { mount };
