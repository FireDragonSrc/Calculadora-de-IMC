function escopo(){
    const enviar = document.querySelector('.enviar');
    enviar.addEventListener('click', (e) => {
        e.preventDefault();
        const peso = document.querySelector('.peso').value;
        const altura = document.querySelector('.altura').value;
        let resultado = peso / (altura * altura);
        resultado = resultado.toFixed(2);
        const msg = document.querySelector('.calculo');
        if(resultado < 18.5){
            msg.innerHTML = `IMC: ${resultado} Peso Normal`;
        }else if(resultado >= 18.5 && resultado <= 24.9){
            msg.innerHTML = `IMC: ${resultado} Peso Normal`;
        }else if(resultado >= 25 && resultado <= 29.9){
            msg.innerHTML = `IMC: ${resultado} Peso Normal`;
        }else if(resultado >= 30 && resultado <= 34.9){
            msg.innerHTML = `IMC: ${resultado} Peso Normal`;
        }else if (resultado >= 35 && resultado <= 39.9){
            msg.innerHTML = `IMC: ${resultado} Peso Normal`;
        }else if (resultado > 40){
            msg.innerHTML = `IMC: ${resultado} Peso Normal`;
        }else {msg.innerHTML = 'Erro';}
    })
}
escopo();