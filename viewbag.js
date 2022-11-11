import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { collection, addDoc, getDoc, setDoc, doc, getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

// CommonJS
const firebaseConfig = {
    apiKey: "AIzaSyBKd5wM2P2QIGslmVnNhfzz9W7O5j6KA4Y",
    authDomain: "login-page-test-eab99.firebaseapp.com",
    projectId: "login-page-test-eab99",
    storageBucket: "login-page-test-eab99.appspot.com",
    messagingSenderId: "194606853816",
    appId: "1:194606853816:web:921299e9837a72323e8e4d",
    measurementId: "G-MVSSWTYCE9"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore()

var logingetitem = localStorage.getItem('loginkey')
logingetitem = JSON.parse(logingetitem)
console.log(logingetitem)

var getdata = []
var totaal = [];


// export function helloi(){

//     priceses()

// }


window.onload = async function ()
{
    const docRef = doc(db, "collect", logingetitem.uid);
    const docSnap = await getDoc(docRef);
    var getfirebase_data = await docSnap.data().data;
    getfirebase_data.map((v) => {
        // console.log(v)
        getdata.push(v)
    })
    getdata.map((v) => {
        console.log(v.imgprice)
        if(v.deleted===true){
            console.log('ok')
        }
        else{
        var card_div = document.getElementById('card-div');
        var card = document.createElement('div')
        var card_items = document.createElement('div')
        var card_detail = document.createElement('div')
        var img = document.createElement('img')


        var card_text = document.createElement('p')
        var card_info = document.createElement('p')
        var card_value = document.createElement('p')

        var card_info1 = document.createElement('p')
        var card_value1 = document.createElement('p')

        var card_info2 = document.createElement('p')
        var card_value2 = document.createElement('p')

        var card_info3 = document.createElement('p')
        var card_value3 = document.createElement('p')

        var text = document.createTextNode(v.imgtext)
        var text1 = document.createTextNode('Size:')
        var text2 = document.createTextNode(v.size)
        var text3 = document.createTextNode('Colour:')
        var text4 = document.createTextNode(v.colour)
        var text5 = document.createTextNode('Quantity:')
        var text6 = document.createTextNode(v.quantityes)
        var text7 = document.createTextNode('Amount')
        var text8 = document.createTextNode(v.imgprice)



        card_div.appendChild(card)
        card.appendChild(card_items)
        card_items.appendChild(img)
        card_items.appendChild(card_detail)
        card_detail.appendChild(card_text)
        card_detail.appendChild(card_info)
        card_detail.appendChild(card_value)
        card_text.appendChild(text)
        card_info.appendChild(text1)
        card_value.appendChild(text2)

        card_detail.appendChild(card_info1)
        card_detail.appendChild(card_value1)
        card_info1.appendChild(text3)
        card_value1.appendChild(text4)

        card_detail.appendChild(card_info2)
        card_detail.appendChild(card_value2)
        card_info2.appendChild(text5)
        card_value2.appendChild(text6)

        card_detail.appendChild(card_info3)
        card_detail.appendChild(card_value3)
        card_info3.appendChild(text7)
        card_value3.appendChild(text8)





        card.setAttribute('class', 'card')
        card_items.setAttribute('class', 'card-items')
        card_detail.setAttribute('class', 'card-detail')
        card_text.setAttribute('class', 'card-text')

        card_value.setAttribute('class', 'card-value')
        card_info.setAttribute('class', 'card-info')

        card_value1.setAttribute('class', 'card-value')
        card_info1.setAttribute('class', 'card-info colour')

        card_value2.setAttribute('class', 'card-value')
        card_info2.setAttribute('class', 'card-info quantity')

        card_value3.setAttribute('class', 'card-value')
        card_info3.setAttribute('class', 'card-info quantity')

        img.setAttribute('class', 'card-img')
        img.setAttribute('src', v.imgdata)
        var sum=parseInt(v.imgprice)
        var sum1=parseInt(v.quantityes)
        var allitem =sum*sum1
        console.log('allitem',allitem)
        totaal.push(allitem)
        }    
        // console.log(totaal)
        
    })
    priceses()


}

var totalnum=0;
var totalnum1=0;

function priceses(){
    console.log(totaal)
    totaal.map((v)=>{
        if(v.deleted===true){
            console.log('ok bro')
        }
        else{
        totalnum+=v
        }
    })
    console.log(totalnum)
    var totalamount=document.getElementById('totalamount')
    totalamount.innerHTML=totalnum

}


// var hello = document.getElementById('hello')
// hello.addEventListener('click', added)
