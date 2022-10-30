// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  let ImageArray = document.getElementsByTagName('img');
  const hornImage = ImageArray[0] //document.querySelector("[src='assets/images/no-image.png']");
  const audioImage = ImageArray[1] // document.querySelector("[src='assets/icons/volume-level-2.svg']");
  let audioArray = document.getElementsByTagName('audio');
  const audio = audioArray[0];
  let buttonArray = document.getElementsByTagName('button');
  const button = buttonArray[0];
  let hornType = '';

  let selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', (event) => {
    let imageStr = 'assets/images/' + event.target.value + '.svg';
    let audioStr = 'assets/audio/' + event.target.value + '.mp3';
    hornType = event.target.value;
    hornImage.src = imageStr;
    audio.src = audioStr;
  });

  let rangeElement = document.getElementById('volume');
  rangeElement.addEventListener('input', (event) => {
    let val = event.target.value;
    if(val == 0){
      audioImage.src = "assets/icons/volume-level-0.svg";
    } else if(val < 33){
      audioImage.src = "assets/icons/volume-level-1.svg";
    } else if(val < 67){
      audioImage.src = "assets/icons/volume-level-2.svg";
    } else {
      audioImage.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = val/100;
  });

  button.addEventListener('click', (event) => {
    audio.play();
    if(hornType == 'party-horn'){ 
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
