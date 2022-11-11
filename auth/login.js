import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { doc, getDoc,setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
// import { doc, ,getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"; 


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


var loginemail = document.getElementById('name2')
var loginpassword = document.getElementById('password2')
var Login = () => {
    signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('all id',user)
            swal("Good job!", "you have login!", "success");
            // swal('succesfuly login', user)
            
            const docRef = doc(db, "user", user.uid);
            const docSnap = await getDoc(docRef);
            
            var getitem = {
                uid:user.uid,
                // name:docSnap.data().name,
                email:docSnap.data().email,
                // password:docSnap.data().password,
                condition: true }
                console.log(getitem)
                window.localStorage.setItem('loginkey', JSON.stringify(getitem));
                window.location = '../index.html';
                // if (docSnap.exists()) {
                //     console.log("Document data:", docSnap.data());
                // let Name = docSnap.data().email
                // // console.log(user.uid,docSnap.data().email)
                //     await setDoc(doc(db, "user", user.uid),{
                //             name:docSnap.data().name,
                //             email:docSnap.data().email,
                //             password:docSnap.data().password,
                //             // cartitems:['ladies_njnsuit','hello','name','add']
                //         })
                //     } else {
                //         // doc.data() will be undefined in this case
                //         console.log("No such document!");
                //     }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal('error', errorMessage)
        });
}

var login_btn = document.getElementById("login_btn")
login_btn.addEventListener("click", Login)





















// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyA_E0jvDVHJcGJ6O62eN5r8qBNUgACm7_8",
//     authDomain: "login-project-90ac9.firebaseapp.com",
//     projectId: "login-project-90ac9",
//     storageBucket: "login-project-90ac9.appspot.com",
//     messagingSenderId: "664258979",
//     appId: "1:664258979:web:98783087c5e6d5b942f216",
//     measurementId: "G-2YG5M8LFER"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();

// var loginemail = document.getElementById('name2')
// var loginpassword = document.getElementById('password2')

// const Login = () => {
//     signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
//         .then(async(userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             const docRef = doc(db, "users", user.uid);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 console.log("Document data:", docSnap.data());
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//             }
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log("Error", error)
//         });

// }
// var login_btn = document.getElementById("login_btn")
// login_btn.addEventListener("click", Login)