import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutProcess.checkout(e.target);
});

// listening for click on the button
// document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
//   e.preventDefault();

//   checkoutProcess.checkout(document.forms['checkout']);
// });
