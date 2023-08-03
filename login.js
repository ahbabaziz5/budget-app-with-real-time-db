 import { auth } from "./firebase.mjs";
 import{signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"


 let login = document.getElementById('login')
 
    login.addEventListener('click',()=>{
      let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

        location.href="./budget.html"
     
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error code" + errorCode)
    console.log("errorMessage" + errorMessage)
    swal({
        title: "Error!",
        text: "First Create Account!",
        type: "error",
        confirmButtonText: "Go back !"
      });
      setInterval(()=>{
        location.href="./index.html"
      },2000)
     
      
  })
})