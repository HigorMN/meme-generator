function inputText() {
  const textInput = document.getElementById('text-input');
  const pText = document.getElementById('meme-text');

  textInput.addEventListener('keyup', function () {
    pText.innerText = textInput.value;
  });
}

inputText();

function fileImage() {
  const imageFile = document.getElementById('meme-insert');
  const conteiner = document.getElementById('meme-image');

  imageFile.onchange = (evt) => {
    const [file] = imageFile.files;
    if (file) {
      conteiner.src = URL.createObjectURL(file);
    }
  };
}

fileImage();

function border() {
  const fireButton = document.getElementById('fire');
  const conteiner = document.getElementById('meme-image-container');
  fireButton.addEventListener('click', function () {
    conteiner.style.border = '3px dashed rgb(255, 0, 0)';
  });
  const waterButton = document.getElementById('water');
  waterButton.addEventListener('click', function () {
    conteiner.style.border = '5px double rgb(0, 0, 255)';
  });
  const earthButton = document.getElementById('earth');
  earthButton.addEventListener('click', function () {
    conteiner.style.border = '6px groove rgb(0, 128, 0)';
  });
}

border();
