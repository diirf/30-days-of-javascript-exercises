// 1. Generando el código del teclado usando even listener
const body = document.querySelector('body');
body.style.height = '97vh';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column';
body.style.rowGap = '20px';

const pressedButton = document.querySelector('.text-pressed');
pressedButton.style.margin = '0 auto';
pressedButton.style.width = '600px';
pressedButton.style.height = '62px';
pressedButton.style.borderStyle = 'solid';
pressedButton.style.borderColor = '#E5E5E5';
pressedButton.style.borderWidth = '1px';
pressedButton.style.boxShadow = '10px 5px 5px #E5E5E5';
pressedButton.style.display = 'flex';
pressedButton.style.justifyContent = 'center';
pressedButton.style.alignItems = 'center';

const p = document.createElement('p');
p.textContent = 'Press any keyword key';
p.style.fontSize = '35px';
p.style.color = '#424242';
p.style.fontWeight = 'bold';
p.style.margin = '0';
p.style.display = 'flex';
p.style.columnGap = '16px';
pressedButton.appendChild(p);

const key = document.createElement('span');
key.style.fontSize = '35px';
key.style.color = '#5BBC7A';
key.style.fontWeight = 'bold';

const code = document.createElement('div');
code.style.height = '146px';
code.style.width = '121px';
code.style.fontSize = '62px';
code.style.color = '#5BBC7A';
code.style.fontWeight = 'bold';
code.style.display = 'flex';
code.style.justifyContent = 'center';
code.style.alignItems = 'center';
pressedButton.insertAdjacentElement('afterend', code);

document.addEventListener('keydown', (e) =>{
  p.textContent = 'You pressed';
  key.textContent = e.key;
  p.appendChild(key);

  console.log(e);

  code.style.borderStyle = 'solid';
  code.style.borderColor = '#E5E5E5';
  code.style.borderWidth = '1px';
  code.style.boxShadow = '10px 5px 5px #E5E5E5';
  code.textContent = e.which || e.keyCode;
})