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
const btnTheme = document.querySelector("button.theme-toggle");

btnEncry.addEventListener("click", () => {
  const text = textArea.value.toLowerCase();
  if (textArea.value == "") {
    alert("Digite algo primeiro !");
    textArea.setAttribute(
      "placeholder",
      "É necessário digitar algo aqui primeiro"
    );
  } else {
    textEncryDecry.textContent = makeCryptography(text);
    textArea.setAttribute("placeholder", "Digite o seu texto");
    divShowtext.classList.add("visible");
  }
});

btnDecry.addEventListener("click", () => {
  const text = textArea.value.toLowerCase();
  if (textArea.value == "") {
    alert("Digite algo primeiro !");
    textArea.setAttribute(
      "placeholder",
      "É necessário digitar algo aqui primeiro"
    );
  } else {
    divShowtext.classList.add("visible");
    textEncryDecry.textContent = makeDecrypt(text);
  }
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

btnTheme.addEventListener("click", () => {
  const body = document.querySelector("body");
  const audiodark = new Audio("/assets/audios/darktheme.wav");
  const audiowhite = new Audio("/assets/audios/whitetheme.wav");
  body.classList.toggle("themed");
  if (body.classList == "themed") {
    btnTheme.classList.remove("theme-toggle--toggled");
    audiodark.play();
  } else {
    audiowhite.play();
    btnTheme.classList.add("theme-toggle--toggled");
  }
});
