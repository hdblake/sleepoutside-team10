import productList from '../js/productList.mjs'
import { getParam, loadHeaderFooter } from '../js/utils.mjs';

loadHeaderFooter();

const category = getParam("category");
productList(".product-list", category);

// Set the title to the selected product category
document.querySelector(".title").innerText = category.charAt(0).toUpperCase() + category.slice(1).replaceAll('-', ' ');