  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
  import { doc, setDoc,getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"; 

  const firebaseConfig = {
    apiKey: "AIzaSyBKd5wM2P2QIGslmVnNhfzz9W7O5j6KA4Y",
    authDomain: "login-page-test-eab99.firebaseapp.com",
    projectId: "login-page-test-eab99",
    storageBucket: "login-page-test-eab99.appspot.com",
    messagingSenderId: "194606853816",
    appId: "1:194606853816:web:921299e9837a72323e8e4d",
    measurementId: "G-MVSSWTYCE9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore()


var getname = document.getElementById('name');
var getemail = document.getElementById('email');
var getpassword = document.getElementById('password');
var btn = document.getElementById("btn")

var signup=()=>{

createUserWithEmailAndPassword(auth, getemail.value, getpassword.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user,"user")
    swal("Good job!", "you have login!", "success");
    await setDoc(doc(db, "user", user.uid), {
        name: getname.value,
        email: getemail.value,
        password: getpassword.value,
        product:true,
      });
      window.location = './indexlogin.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,"error")

    // ..
  });
}
btn.addEventListener('click',signup)

































//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
//   import { doc, setDoc,getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"; 

//   const firebaseConfig = {
//     apiKey: "AIzaSyA_E0jvDVHJcGJ6O62eN5r8qBNUgACm7_8",
//     authDomain: "login-project-90ac9.firebaseapp.com",
//     projectId: "login-project-90ac9",
//     storageBucket: "login-project-90ac9.appspot.com",
//     messagingSenderId: "664258979",
//     appId: "1:664258979:web:98783087c5e6d5b942f216",
//     measurementId: "G-2YG5M8LFER"
//   };

//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth();
//   const db = getFirestore();


// var getname = document.getElementById('name');
// var getemail = document.getElementById('email');
// var getpassword = document.getElementById('password');
// var btn = document.getElementById("btn")
///////////////////////////////////////////
// var getiten = localStorage.getItem('sginup');

// var logingetitem=localStorage.getItem('loginkey')
// var logouts=document.getElementById('logout')
// var logn=document.getElementById('logi')
// console.log('testing',loginemail)
// getiten = JSON.parse(getiten)
// logingetitem=JSON.parse(logingetitem)
//////////////////////////////
// var datasave;
// var empty = false;
// var flag = false;
// var loginid=false;


// const SignUP = () => {
//     createUserWithEmailAndPassword(auth, getemail.value, getpassword.value)
//   .then(async(userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     await setDoc(doc(db, "users", user.uid), {
//         name: getname.value,
//         state: getemail.value,
//         country: getpassword.value
//       });
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("error",error)
//     // ..
//   });
// }
// btn.addEventListener("click",SignUP)
////////////////////////////

// var sginup = [

// ]
// function signup() {
//     var addsignup = {
//         name: getname.value,
//         email: getemail.value,
//         password: getpassword.value,
//     }
//     for (var i = 0; i < sginup.length; i++) {
//         if (addsignup['email'] === sginup[i].email) {
//             flag = true
//             break;
//         }
//         else {
//             flag = false
//         }
//     }
//     if (!flag) {
//         sginup.push(addsignup)
//         flag = false
//         swal("Good job!", "congratulation your accout has been created!", "success");
//         // window.localStorage.setItem('sginup', JSON.stringify(sginup));
//         // alert('congratulation your accout has been created')
//     }
//     else {
//         // alert('already have an account')
//         swal("Email Already Taken Try Another Email")
//             .then(() => {
//                 swal(`Try Another Email`);
//             });
//     }


//     getname.value = ''
//     getemail.value = ''
//     getpassword.value = ''
// }

// console.log(getiten)
// if (getiten !== null) {

//     for (var i = 0; i < getiten.length; i++) {
//         sginup.push(getiten[i])
//     }
// }


// function login() {
//     document.getElementById("Button").onclick = function () {
//         // location.href = "./index.html"
//         // window.location('../quiz app/index.html')
//     }
    
// }


/*<------login code------>*/

// console.log(getiten.length)
;

// var mainlogin=()=> {
    
//     console.log('loginid',)
//     var addlogin = {
//         email: loginemail.value,
//         password: loginpassword.value,
//     }
//     console.log(addlogin)
//     if (getiten === null) {
//         empty = true
//     }
//     else {
//         for (var i = 0; i < getiten.length; i++) {
//             if (addlogin['email'] === getiten[i].email) {
//                 flag = true
//                 if (addlogin['password'] === getiten[i].password) {

//                     swal("Good job!", "you have login!", "success");
//                     var getitem = { name: getiten[i].name, email: getiten[i].email, password: getiten[i].password, condition: true }
//                     console.log(getitem)
//                     // console.log(loginid)
//                     // window.localStorage.setItem('loginkey', JSON.stringify(getitem));
//                     // window.location = '../e-commerce/index.html';
                    
//                 }
//                 else {
//                     // alert('wrong password')
//                     swal("worng password")
//                     .then((value) => {
//                         swal(`please insert rght password:`);
//                     });
//                 }
//                 break;
//             }
//             else {
//                 flag = false
//             }
//         }
//     }
//     if (!flag) {
//         swal("create account frist")
//         .then((value) => {
//             swal(`Then login`);
//         });
//     }
// }