let calcular = document.querySelector('#calcular');

function teste(){
    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let resultado = document.querySelector('#resultado');
    let condicao;
    let imc = (peso/(altura*altura)).toFixed(2);


    if(nome !== "" && peso !== "" && altura !== ""){
        if(imc < 18.5){
            condicao = ("Abaixo do peso");
        }else if(imc >= 18.5 && imc < 25){
            condicao = ("Normal");
        }else if(imc >= 25 && imc < 30){
            condicao = ("Sobrepeso");
        }else if(imc >= 30 && imc < 40){
            condicao = ("Obesidade");
        }else{
            condicao = ("Obesidade grave");
        }
            resultado.textContent = nome + " seu IMC é de " + imc + " e sua condição é " + condicao;
    }else{
        resultado.textContent = "Preencha todos os campos!";
    }
}

calcular.addEventListener('click', teste);
