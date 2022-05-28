
//RECUPERAR O BOTÃO E COLOCAR ELE EM UMA CONSTANTE
const botaoSubmit = document.getElementById('btnEnviar')

//ATRELAR UM EVENTO AO BOTÃO PARA QUE AO SER DISPARADO, ESTE EVENTO POSSA
//OS CAMPOS-INPUTS SEJAM VALIDADOS(VERIFICADOS E SE ESTÃO VAZIO)
botaoSubmit.addEventListener("click", ()=>{
    //RECUPERAR OS INPUTS E REALIZAR A VALIDAÇÃO
    const campos = document.querySelectorAll("input[type='text],input[type='email']")

    //CRIAR UMA ESTRUTURA PARAR REALIZAR A LEITURA DO ARRAY DE INPUTS
    for(let x = 0 ; x < campos.length ; x++)
    //CRIAR UMA ESTRUTURA CONDICIONAL PARA
    //VALIDADE CADA UM DOS CAMPOS
    if(campos[x].value == ""){
        alert("O CAMPOS "+ campos[x].pleaceholder + " não foi preenchido!")
        return
    }
})

    //REALIZANDO O SUBMIT DO FORM
    document.querySelector(".cadastro").submit