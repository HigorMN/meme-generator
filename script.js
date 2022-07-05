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

  
imageFile.onchange = evt => {
    const [file] = imageFile.files
    if (file) {
      conteiner.src = URL.createObjectURL(file)
    }
  }
}

fileImage();
