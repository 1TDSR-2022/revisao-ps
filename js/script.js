
// RECUPERAR O BOTÃO E COLOCAR ELE EM UMA CONSTANTE 
const botaoSubmit = document.getElementById('btnEnviar')

// ATRELAR UM EVENTO AO BOTÃO PARA QUE AO SER DISPARADO O EVENTO CLICK
// OS CAMPOS INPUTS SEJAM VALIDADOS(VERIFICADOS SE ESTÃO VAZIOS)
botaoSubmit.addEventListener("click", ()=>{
    // RECUPERAR OS INPUTS E REALIZAR A VALIDAÇÃO 
    const campos = document.querySelectorAll("input[type='text'],input[type='email']") 

    // CRIAR UMA ESTRUTURA PARA REALIZAR A LEITURA DO ARRAY DE INPUTS
    for(let x = 0 ; x < campos.length; x++){
        // CRIAR UMA ESTRUTURA CONDICIONAL PARA VALIDAR CADA UM DOS CAMPOS
        if (campos[x].value == ""){
            alert("O CAMPO "+ campos[x].placeholder + " NÃO FOI PREENCHIDO!")
            return
        }
    }

    // REALIZANDO O SUBMIT DO FORM
    document.querySelector(".cadastro").submit()
})

