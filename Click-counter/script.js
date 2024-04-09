let boton = document.getElementById('counter');
let texto = document.getElementById('text');
let contador = 0;

boton.addEventListener('click', ()=>{
    contador += 1;
    texto.innerText = 'Click counter: '+ contador
});

