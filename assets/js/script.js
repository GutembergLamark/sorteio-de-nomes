const btnSortear = document.querySelector(".botaoSortear");
const textarea = document.querySelector("textarea");
const resultado = document.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");
const btnFechar = document.querySelector(".fechar");




function pegarDadosFormulario(){
    
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",");
    const tamanhoArray = listaNomes.length; 
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray);
    const nome = listaNomes[posicaoNome];
    if(textarea.value !== ""){  
        mostrarResultado(nome);
    }else if(textarea.value == ""){
        popUpResultado.classList.item(0);
        alert("Ops, não foi possivel efetuar o sorteio, insira os nomes!")
    }
    textarea.value = "";
}

btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNumeroAleatorio(tamanhoArray){
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0);
}

function mostrarResultado(nome){
    console.log(nome)

    resultado.innerText = `Resultado: \n ${nome}`;
    popUpResultado.classList.add("mostrarResultado");
    

}

function fecharPopUp(){
    popUpResultado.classList.remove("mostrarResultado");
}

btnFechar.addEventListener("click", fecharPopUp);