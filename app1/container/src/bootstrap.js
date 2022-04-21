import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

console.log("Container");
productsMount(document.getElementById("my-products"));
cartMount(document.getElementById("my-cart"));
