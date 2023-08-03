import{auth,database} from "./firebase.mjs"
import{onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import{get,child,ref} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"






onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const userId = user.uid;
      
const dbRef = ref(database);
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    myBox.innerHTML = snapshot.val().username
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
})
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  function remove(){
    remove(ref(database, 'users/' + userId))
    .then(()=>{
        alert("data deleted")
    })
    .catch((error)=>{
        alert(error)

    })
  }
  window.remove = remove

  
  function upd(){
    upd(ref(database, 'users/' + userId), {
        username: name,
        email: email,
        
      });}
  window.upd = upd