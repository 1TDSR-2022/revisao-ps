//Recuperar o btn do HTML
const btnSubmit = document.getElementById('btnEnviar')

//Atrelar um evento ao botão para que ao ser disparado, possa validar os dados.
btnSubmit.addEventListener("click", () => {
    //Recuperando os inputs do form, de form automatica
    const campos = document.querySelectorAll("input[type='text'], input[type='email']")

    //Criar um estrutura para realizar a leitura do Array de campos
    for(let x = 0; x < campos.length; x++) {
        // Criar uma estrutura condicional para validar cada campo
        if (campos[x].value == "") {
            alert("O campo " + campos[x].placeholder + " não foi preenchido")
            return
        }
    }

    //Submit do form
    document.querySelector(".cadastro").submit()
})