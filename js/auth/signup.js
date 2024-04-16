// Implémenter le JS de ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");


// Implémenter une action sur l'Input

inputNom.addEventListener('keyup',validateForm);
inputPrenom.addEventListener('keyup',validateForm);
inputMail.addEventListener('keyup',validateForm);
inputPassword.addEventListener('keyup',validateForm);
inputValidationPassword.addEventListener('keyup',validateForm);



// Vérification du champ réquis

function validateForm(){
    const nomOk= validateRequired(inputNom);
    const prenomOk= validateRequired(inputPrenom);
    const mailOk= validateMail(inputMail);
    const passwordOk = validatepassword(inputPassword);
    const passWordConfirmOk = validateConfirmationPassword(inputPassword,inputValidationPassword);

    if(nomOk && prenomOk && mailOk && passwordOk && passWordConfirmOk){
        btnValidation.disabled = false;
    }
      else{
        btnValidation.disabled = true;
      }
}

function validateMail(input){
    // Définir le Regex

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    const emailUser = input.value;

    if(emailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
      else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
      }

    }

    function validateConfirmationPassword(inputPwd , inputConfirmPwd){
        if(inputPwd.value == inputConfirmPwd.value){
            inputConfirmPwd.classList.add("is-valid");
            inputConfirmPwd.classList.remove("is-invalid");
            return true;
        }
         else{
            inputConfirmPwd.classList.add("is-invalid");
            inputConfirmPwd.classList.remove("is-valid");
            return false;
         }
    }

    function validatepassword(input){
        // Définir le Regex
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/ ;
        const passwordUser = input.value;
    
        if(passwordUser.match(passwordRegex)){
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
            return true;
        }
          else{
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            return false;
          }
    
        }

function validateRequired(input){
    if(input.value != ""){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
      else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
      }

}