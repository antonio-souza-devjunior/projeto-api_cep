'use strict';

const preencherDados = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const limparDados = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const cepValido = cep => cep.length == 8;

const pesqEndereco = async() => {
    limparDados();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    //fetch(url).then(resposta => resposta.json()).then(console.log)
    if(cepValido(cep)){
        const dados = await fetch(url)
        const endereco = await dados.json()
        if(endereco.hasOwnProperty('erro')){
            
            document.getElementById('cep').value = "CEP não encontrado!";
            
        }else{
            
            preencherDados(endereco);
        }
    }else{
        
        document.getElementById('cep').value = "CEP invalido!"
    }
}

document.getElementById('cep').addEventListener('focusout', pesqEndereco);


