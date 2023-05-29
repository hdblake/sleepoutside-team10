import productList from "../js/productList.mjs";
import { getParam, loadHeaderFooter } from "../js/utils.mjs";

loadHeaderFooter();

const category = getParam("category");
productList(".product-list", category);
