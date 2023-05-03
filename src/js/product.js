import { getParam } from "./utils.mjs";
import productDetails from "./productData.mjs";

const productId = getParam('product');
productDetails(productId)