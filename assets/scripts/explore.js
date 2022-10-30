// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let ImageArray = document.getElementsByTagName('img');
  const smileyImage = ImageArray[0];
  let selectArray = document.getElementsByTagName('select');
  const voiceSelect = selectArray[0];
  let buttonArray = document.getElementsByTagName('button');
  const button = buttonArray[0];
  const textInput = document.getElementById("text-to-speak");

  const synth = window.speechSynthesis;
  let voices = [];

  voices = synth.getVoices();
  synth.addEventListener('voiceschanged', () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  button.addEventListener('click', () =>{
    smileyImage.src = "assets/images/smiling-open.png";
    let utterThis = new SpeechSynthesisUtterance(textInput.value);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    setInterval( function(){
      if(!synth.speaking){
        smileyImage.src = "assets/images/smiling.png";
        clearInterval();
      }
    }, 1000)
  });
}