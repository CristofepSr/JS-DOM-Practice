const generar = document.getElementById('generar')

generar.addEventListener('click', () => {
    const longitud = document.getElementById('longitud').value;
    let contraseña = generarpassword(longitud)
    document.getElementById('pantalla').value = contraseña;
});

function generarpassword(longitud){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;"<>,.?/';

    if ((longitud < 8) || (longitud > 20)){
        return "Su contrseña debe contenr 8 0 20 caracteres"
    }

    var password = ''
    for (let i = 0; i < longitud; i++){
        const numR = Math.floor(Math.random() * caracteres.length);
        password += caracteres[numR];
    }
    return password ;
}