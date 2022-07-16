let button = document.getElementById('color-button');


function colorValue() {
    return Math.floor(Math.random() * 256);
  }

function colorChange(event){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor = randomColor;
  }

button.addEventListener('click', colorChange);

let view = document.getElementById('skills');
let close = document.getElementById('close-button');
let btn1 = document.getElementById('skillLogos');

let open = function() {
  skillLogos.style.display = '';
  close.style.display = '';
};

let hide = function() {
  skillLogos.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange(){
  view.innerHTML = 'My languages';
}
function textReturn(){
  view.innerHTML = 'Skills';
}
view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);