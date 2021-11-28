let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let password = document.querySelector('#password')
let labelSenha = document.querySelector('#labelSenha')
let validPassword = false

let inputData = document.querySelector('#inputData')
let labelDtNasc = document.querySelector('#labelDtNasc')
let validInputData = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
      nome.setAttribute('style', 'border-color: red')
      validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
  })
  
sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length <= 4){
      labelSobrenome.setAttribute('style', 'color: red')
      labelSobrenome.innerHTML = 'Sobrenome *Insira no minimo 5 caracteres'
      sobrenome.setAttribute('style', 'border-color: red')
      validUsuario = false
    } else {
        labelSobrenome.setAttribute('style', 'color: green')
        labelSobrenome.innerHTML = 'Sobrenome'
        sobrenome.setAttribute('style', 'border-color: green')
        validSobrenome = true
    }
  })
  
email.addEventListener('keyup', () => {
    if(email.value.length <= 5){
      labelEmail.setAttribute('style', 'color: red')
      labelEmail.innerHTML = 'Email *Insira no minimo 6 caracteres'
      email.setAttribute('style', 'border-color: red')
      validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
  })
  
password.addEventListener('keyup', () => {
    if(password.value.length <= 5){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
      password.setAttribute('style', 'border-color: red')
      validPassword = false
    } else {
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'Senha'
      password.setAttribute('style', 'border-color: green')
      validPassword = true
    }
  })

inputData.addEventListener('keyup', () => {
    if(inputData.value.length <= 5){
      labelDtNasc.setAttribute('style', 'color: red')
      labelDtNasc.innerHTML = 'Data Nascimento *Insira dd/mm/aaaa'
      inputData.setAttribute('style', 'border-color: red')
      validInputData = false
    } else {
        labelDtNasc.setAttribute('style', 'color: green')
        labelDtNasc.innerHTML = 'Data Nascimento'
        inputData.setAttribute('style', 'border-color: green')
        validInputData = true
    }
  })

  
function cadastrar(){
    if(validNome && validSobrenome && validEmail && validPassword && validInputData){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
      
      listaUser.push(
      {
        nomeCad: nome.value,
        sobrenomeCad: sobrenome.value,
        emailCad: email.value,
        senhaCad: password.value,
        DataNascCad: inputData.value
      }
      )

      /*localStorage.setItem('listaUser', JSON.stringify(listaUser))*/
      
      
      const localStoragelistaUser = JSON.parse(localStorage.getItem('listaUser'))
      let listaUser = localStorage.getItem('listaUser') !== null ? localStoragelistaUser : []

      const updateLocalStorage = () => {
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
      }

      updateLocalStorage()
      
     
      msgSuccess.setAttribute('style', 'display: block')
      msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
      msgError.setAttribute('style', 'display: none')
      msgError.innerHTML = ''
      
      setTimeout(()=>{
          window.location.href = 'http://127.0.0.1:5501/login.html'                       /*conferir endereço*/
      }, 3000)
    
      
    } else {
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
      msgSuccess.innerHTML = ''
      msgSuccess.setAttribute('style', 'display: none')
    }
  }
  
  
  /*btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })
  
  btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
      inputConfirmSenha.setAttribute('type', 'text')
    } else {
      inputConfirmSenha.setAttribute('type', 'password')
    }
  })*/



