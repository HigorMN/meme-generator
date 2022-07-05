function inputText() {
  const textInput = document.getElementById('text-input');
  const pText = document.getElementById('meme-text');

  textInput.addEventListener('keyup', function (){
    pText.innerText = textInput.value
  })
}

inputText();
