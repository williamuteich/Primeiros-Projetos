let passwordLenghtEl = 16
let upperCheck = document.getElementById("checLetra")
let numberCheck = document.getElementById("checkNumero")
let symbolChecked = document.getElementById("checkSimbolo")

upperCheck.addEventListener("click", generatePassword)
numberCheck.addEventListener("click", generatePassword)
symbolChecked.addEventListener("click", generatePassword)

function copyTextInput() {
    const textoCopiado = document.getElementById("geradorSenhaInput");
    
    try {
      textoCopiado.removeAttribute("disabled"); // Remover o atributo "disabled"
      textoCopiado.select();
      document.execCommand("copy");
      //passa os paramentros.
      showSuccessNotification(`Senha Copiada: ${textoCopiado.value}`, "success", "Sucesso");
    } catch (err) {
      showSuccessNotification("Não é possível copiar o texto para a área de transferência.", "error", "Erro");
    } finally {
      // Reativar o atributo "disabled"
      textoCopiado.setAttribute("disabled", "true");
      // Deseleciona o texto
      window.getSelection().removeAllRanges();
    }
  }
  
  function showSuccessNotification(message, icon, title) {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      timer: 1000,
      showConfirmButton: false,
    });
  }

 
function generatePassword(){
    let chars = "abcdefghijklmnopqrstuvwxyz"
    setarTamanhoSenha = document.getElementById("tamanhoSenhaSpan")
    let password = ""

    
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbolsChar = "!@#$%&*()_+{}[]"
    const numbersChar = "123456789"
    
    if(upperCheck.checked){
        chars += uppercaseChar
    }
    if(numberCheck.checked){
        chars += numbersChar
    }
    if(symbolChecked.checked){
        chars += symbolsChar
    }
    

    for(let i = 0; i < passwordLenghtEl; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    const pegaInput = document.getElementById("geradorSenhaInput");
    pegaInput.value = password
}
passwordLenght = document.getElementById("passwordLenght");
passwordLenght.addEventListener("input", function(){
    passwordLenghtEl = passwordLenght.value;

    const tamanhoSenhaSpan = document.getElementById("tamanhoSenhaSpan"); // Selecione o elemento pelo ID
    
    
    tamanhoSenhaSpan.textContent = passwordLenghtEl;

    const statusSenha = document.getElementById("statusSenha");
    const segurancaIndicator = document.getElementById("segurancaIndicator");
    segurancaIndicator.className = ""


    if (passwordLenghtEl >= 4 && passwordLenghtEl <= 8) {
        statusSenha.innerHTML = "<span class='senhaFraca'>Senha Fraca.</span>";
        segurancaIndicator.classList.add("completed");
    } else if (passwordLenghtEl > 8 && passwordLenghtEl <= 16) {
        statusSenha.innerHTML = "<span class='senhaMedia'>Senha Média.</span>";
        segurancaIndicator.classList.add("critical");
    } else if (passwordLenghtEl >= 16 && passwordLenghtEl <= 32) {
        statusSenha.innerHTML = "<span class='senhaForte'>Senha Forte.</span>";
        segurancaIndicator.classList.add("safe");
    } else if (passwordLenghtEl > 32){
        statusSenha.innerHTML = "<span class='senhaMuitoForte'>Senha Muito Forte.</span>";
        segurancaIndicator.classList.add("verySage");
    }         
    
    
    generatePassword();
    
});


generatePassword()
  
  