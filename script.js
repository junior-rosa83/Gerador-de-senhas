const button = document.querySelector('button')
const sizePassword = document.querySelector('#sizePassword')
const checkUppercase = document.querySelector('#checkUppercaseCharacters')
const checkNumbers = document.querySelector('#checkNumbers')
const checkSpecial = document.querySelector('#checkSpecialCharacters')
const viewPassord = document.querySelector('#Password')

button.onclick = (event) => {
  event.preventDefault()
  
  if(sizePassword.value > 20){
    return alert('A senha deve conter no máximo 20 caracteres.')
  } else if (sizePassword.value < 1) {
    return alert('Digite um número de 1 a 20.')
  }
  
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let passoword = ''
  
  if (checkUppercase.checked) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (checkNumbers.checked) characters += '0123456789';
  if (checkSpecial.checked) characters += '!@#$%^&*()_+-={}[]|:;\"\'<>,.?/';
  
  
  for(let i = 0; i < sizePassword.value; i++){
    const index = Math.floor(Math.random() * characters.length);
    passoword += characters.charAt(index)
  }
  
  viewPassord.textContent = passoword
}


        