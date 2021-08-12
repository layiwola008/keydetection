const pressed = [];
  const secretCode = 'coding';
  window.addEventListener('keyup', (e) =>{
    console.log(e.key)
    pressed.push(e.key);
 
  //further study of .splice and .join
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode)){
      console.log('DING DONG!')
      cornify_add();
    }
    console.log(pressed)
  })
  
  
//Lines of code I added
  const toDo = document.querySelector('p');
  toDo.setAttribute("style", "font-size: 4rem; text-align: center; color: red");

  const heading = document.querySelector('h1');
  heading.innerHTML = "KEYBOARD DETECTION PROJECT";


 const body = document.querySelector('body');
 body.classList.add("mystyle");



  