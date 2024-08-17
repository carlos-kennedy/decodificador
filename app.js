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

textArea.addEventListener("input", (event) => {
  const textAreaValue = event.target.value;
  const accentsRegex = /[áàâãäéèêëíìîïóòôõöúùûüçñÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ]/;
  const lastChar = textAreaValue.charAt(textAreaValue.length - 1);

  const warningAudio = new Audio("/assets/audios/warning.wav");

  if (
    accentsRegex.test(lastChar) ||
    lastChar === lastChar.toUpperCase() &&
    isNaN(lastChar)
  ) {
    swal({
      title: "Erro",
      text: "Apenas palavras minúsculas e sem acento !",
      icon: "warning",
    });
    textArea.value = "";
    warningAudio.play();
  }
});

btnEncry.addEventListener("click", () => {
  const successAudio = new Audio("/assets/audios/success.wav");
  const warningAudio = new Audio("/assets/audios/warning.wav");
  const text = textArea.value.toLowerCase();
  if (textArea.value == "") {
    swal({
      title: "Erro",
      text: "Digite algo primeiro !",
      icon: "warning",
    });
    warningAudio.play();
  } else {
    textEncryDecry.textContent = makeCryptography(text);
    swal({
      title: "Criptografado",
      text: "Seu texto foi criptografado com sucesso !",
      icon: "success",
    });
    divShowtext.classList.add("visible");
    successAudio.play();
  }
});

btnDecry.addEventListener("click", () => {
  const successAudio = new Audio("/assets/audios/success.wav");
  const warningAudio = new Audio("/assets/audios/warning.wav");
  const text = textArea.value.toLowerCase();
  if (textArea.value == "") {
    swal({
      title: "Erro",
      text: "Digite algo primeiro !",
      icon: "warning",
    });
    warningAudio.play();
  } else {
    swal({
      title: "Descriptografado",
      text: "Seu texto foi descriptografado com sucesso !",
      icon: "success",
    });
    divShowtext.classList.add("visible");
    textEncryDecry.textContent = makeDecrypt(text);
    successAudio.play();
  }
});

btnCopy.addEventListener("click", () => {
  const successAudio = new Audio("/assets/audios/success.wav");
  const tempData = document.createElement("textarea");
  tempData.value = textEncryDecry.textContent;
  document.body.appendChild(tempData);
  tempData.select();
  document.execCommand("copy");
  document.body.removeChild(tempData);
  swal({
    title: "Copiado",
    text: "Seu texto foi copiado com sucesso !",
    icon: "success",
  });
  divShowtext.classList.remove("visible");
  successAudio.play();
});

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
