import { clickLoginButton } from "./wallets";

const button = document.getElementById("wallet");
if (button) {
  button.addEventListener("click", clickLoginButton);
}
