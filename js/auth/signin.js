const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click" , checkCredentials);

function checkCredentials(){

    // Ici il faudra appeller l'API pour vérifier les crédentials en BDD

     if(inputMail.value == "test@gmail.com" && inputPassword.value == "12345"){

    //  Il faudra recuperer le vrai Token
     
    const token = "bbeberrsrssoeghdpslmqqteyeiiqterte";
    setToken(token);
    setCookie(roleCookieName , "client" , 7)

    // Placer ce token en Cookie


     window.location.replace("/");
    }
     else{
        inputMail.classList.add('is-invalid');
        inputPassword.classList.add("is-invalid");
    }
}