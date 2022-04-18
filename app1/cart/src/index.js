import faker from "faker";

let cartText = `You have ${faker.random.number()} items in your cart`;

document.getElementById("dev-cart").innerHTML = cartText;
