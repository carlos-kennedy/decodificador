function makeCryptography(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function makeDecrypt(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

const btnEncry = document.querySelector("button.cryptor");
const btnDecry = document.querySelector("button.decrypt");
const textArea = document.querySelector("textarea");
const textEncryDecry = document.querySelector("textarea#encry-decry-text");
const btnCopy = document.querySelector("button.copy");
const divShowtext = document.querySelector("div.show-text");

btnEncry.addEventListener("click", () => {
  const text = textArea.value.toLowerCase();
  textEncryDecry.textContent = makeCryptography(text);
  divShowtext.classList.add("visible");
});

btnDecry.addEventListener("click", () => {
  const text = textArea.value.toLowerCase();
  textEncryDecry.textContent = makeDecrypt(text);
  divShowtext.classList.add("visible");
});

function copy() {
  const tempData = document.createElement("textarea");
  tempData.value = textEncryDecry.textContent;
  document.body.appendChild(tempData);
  tempData.select();
  document.execCommand("copy");
  document.body.removeChild(tempData);
  alert("Copiado com sucesso!!");
  divShowtext.classList.remove("visible");
}

btnCopy.addEventListener("click", copy);
