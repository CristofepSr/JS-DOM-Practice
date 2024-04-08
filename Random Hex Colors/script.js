const boton = document.getElementById('buttonColor');
const color = document.getElementById('color');

function generarcolor() {
    let digitos = '0123456789abcdef';
    let colorHex= '#' ;

    for (let i = 0; i < 6; i++){
        let colorRamdom = Math.floor(Math.random() * 16);
        colorHex += digitos[colorRamdom];
    }
    return colorHex
}  

boton.addEventListener('click', () => {
    let colotAletorio = generarcolor();
    color.innerHTML = colotAletorio;
    document.body.style.backgroundColor= colotAletorio;
});