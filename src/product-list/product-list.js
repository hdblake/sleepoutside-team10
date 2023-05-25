import productList from '../js/productList.mjs'
import { getParam, loadHeaderFooter } from '../js/utils.mjs';

loadHeaderFooter();

const productId = getParam("category");
productList(".product-list", productId);