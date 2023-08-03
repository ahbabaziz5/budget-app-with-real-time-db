import { database ,auth} from "./firebase.mjs"
import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { set,ref,get,child} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
 
 
 
 document.getElementById('btn').addEventListener('click',()=>{

 
 let email = document.getElementById('email').value
 let password = document.getElementById('password').value
 let name= document.getElementById('name').value

 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in 
   const userId = userCredential.user.uid
   console.log(userId)
   set(ref(database, 'users/' + userId), {
    username: name,
    email: email,
    
  });
  location.href='./login.html';

   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });

})

