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
var login = document.getElementById('logi')
var logot = document.getElementById('logout')
var text = document.getElementById('profile_text')
var img = document.getElementById('profile_nav')

if(logingetitem === null){
  img.style.display = 'flex'
  // text.innerHTML = logingetitem.email
  login.style.display = 'none'
  logot.style.display = 'flex'
}
else{
if (logingetitem.condition === true) {
  img.style.display = 'flex'
  text.innerHTML = logingetitem.email
  login.style.display = 'none'
  logot.style.display = 'flex'
}
else {
  img.style.display = 'none'
  login.style.display = 'flex'
  logot.style.display = 'none'
}
}
var logout = () => {
  var condition = { condition: false }
  window.localStorage.setItem('loginkey', JSON.stringify(condition));
  window.location.reload()
}
var logut = document.getElementById("logout")
logut.addEventListener("click", logout)

var weblogin = () => {
  window.location = './auth/index.html'
  // console.log('hello world')
}
var login = document.getElementById("logi")
login.addEventListener("click", weblogin)

// console.log(clothes)
var Counter_num = document.getElementById('counter-number')

let num = 0
export function countermainas(v) {

  var counter = v.parentElement.childNodes[1]
  var counter1 = v.parentElement.childNodes[5]
  var shown = v.parentElement.childNodes[3]
  // console.log(counter1)


  // num--;
  shown.innerHTML = parseInt(shown.innerHTML) - 1
  if (shown.innerHTML < 2) {
    counter.disabled = true
    counter1.disabled = false

  }
  else {
    counter.disabled = false
    counter1.disabled = true


  }

}
// counter.addEventListener('click', countermainas)
export function counterplus(v) {
  // let num = 1

  var counter = v.parentElement.childNodes[1]
  var shown = v.parentElement.childNodes[3]
  var counter1 = v.parentElement.childNodes[5]

  // console.log(shown)

  // num++;
  shown.innerHTML = parseInt(shown.innerHTML) + 1
  if (shown.innerHTML > 9) {
    counter1.disabled = true
    counter.disabled = false


  }
  else {
    counter1.disabled = false
    counter.disabled = false


  }
}
// counter1.addEventListener('click', counterplus)

let empty = []
console.log('empty', empty)
// var setiem={condition:false}
// window.localStorage.setItem('loginkey', JSON.stringify(setiem));
window.onload = async function () {
  console.log('function running')
  const docRef = doc(db, "collect", logingetitem.uid);
  const docSnap = await getDoc(docRef);
  var getfirebase_data = await docSnap.data().data;
  getfirebase_data.map((v) => {
    // console.log(v)
    empty.push(v)
  })
  abc()
}
export async function smallsize(a) {
  var dlete = a.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0]
  console.log(dlete)

  empty.map((v) => {
    //  console.log(dlete.innerHTML)
    //  console.log( v.imgtext)
    if (v.imgtext === dlete.innerHTML) {
      v.size = "small"
    }
  })
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function mediumsize(a) {
  var dlete = a.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0]
  console.log(dlete)

  empty.map((v) => {
    //  console.log(dlete.innerHTML)
    //  console.log( v.imgtext)
    if (v.imgtext === dlete.innerHTML) {
      v.size = "medium"
    }
  })
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function largesize(a) {
  // console.log(a)
  var dlete = a.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0]
  console.log(dlete)

  empty.map((v) => {
    //  console.log(dlete.innerHTML)
    //  console.log( v.imgtext)
    if (v.imgtext === dlete.innerHTML) {
      v.size = "large"
    }
  })
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function redcolour(a) {
  // console.log(a)
  var dlete = a.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0]
  console.log(dlete)

  empty.map((v) => {
    //  console.log(dlete.innerHTML)
    //  console.log( v.imgtext)
    if (v.imgtext === dlete.innerHTML) {
      v.colour = "red"
    }
  })
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function yellowcolour(a) {
  // console.log(a)
  var dlete = a.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0]
  console.log(dlete)

  empty.map((v) => {
    //  console.log(dlete.innerHTML)
    //  console.log( v.imgtext)
    if (v.imgtext === dlete.innerHTML) {
      v.colour = "yellow"
    }
  })
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function blackcolour(a) {
  // console.log(a)
  var dlete = a.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0]
  console.log(dlete)

  empty.map((v) => {
    //  console.log(dlete.innerHTML)
    //  console.log( v.imgtext)
    if (v.imgtext === dlete.innerHTML) {
      v.colour = "black"
    }
  })
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function delet(a) {
  var dlete = a.parentElement.parentElement.childNodes[0].childNodes[0]

  empty.map((v) => {
    //  console.log(dlete.innerHTML)
    //  console.log( v.imgtext)
    if (v.imgtext === dlete.innerHTML) {
      v.deleted = true
      v.size=null
      v.colour=null
    }
  })
  var remo = a.parentElement.parentElement.parentElement
  remo.remove()
  console.log(remo)
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

export async function test(data) {
  if(logingetitem===null){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'login first',
      footer: '<a href="./auth/index.html">you want to signup your acount?</a>'
    })
  }
  else{
  if(logingetitem.condition===false){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'login first',
      footer: '<a href="./auth/index.html">you want to signup your acount?</a>'
    })
  }
  else{
  abc()
  console.log('infunction', empty)
  /////////////////////////////////////////
  var imgdata = data.parentElement.parentElement.childNodes[1].src;
  var imgtext = data.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML
  var imgprice = data.parentElement.parentElement.childNodes[3].childNodes[3].innerHTML
  var quantityes = data.parentElement.childNodes[1].childNodes[3].innerHTML
  var deleted = false
  var colour = null
  var size = null

  var objet = { imgdata, imgtext, quantityes, imgprice, deleted, colour, size }
  var flag = false
  var hello = false
  var added = false
  empty.map((v) => {

    if (objet.imgtext === v.imgtext) {
      flag = true
      v.deleted = false

      if (objet.quantityes === v.quantityes) {
        flag = true
      }
      else {
        v.quantityes = objet.quantityes
        hello = true
        if (v.deleted === true) {
          v.deleted = false
          added = true
        }
      }


    }
  })
  if (added === true) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'add to card',
      showConfirmButton: false,
      timer: 1500
    })
  }
  else {
    if (hello === true) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'value update',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      if (flag) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'add to card',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'add to card',
          showConfirmButton: false,
          timer: 1500
        })
        empty.push(objet)

      }
    }
  }
  try {
    const docRef = await setDoc(doc(db, "collect", logingetitem.uid), {
      data: empty
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
  abc()

  //////////////////////////////////


  ////////////////////////////////////


}
}
}


// for (var i=0; i<empty.length;i++){
//   console.log('empty[i]',empty[i])
// }
// let bbc = () => {
//   var edit=document.getElementById('maincard')
//   edit.innerHTML=''
//   empty.map((v) => {
//     // // console.log(v)
//     var div = document.createElement('div')
//     var div1 = document.createElement('div')
//     var div2 = document.createElement('div')
//     var div3 = document.createElement('div')
//     var div4 = document.createElement('div')
//     var div5 = document.createElement('div')
//     var div6 = document.createElement('div')
//     var div7 = document.createElement('div')
//     var div8 = document.createElement('div')
//     var div9 = document.createElement('div')
//     var div9 = document.createElement('div')
//     var div10 = document.createElement('div')
//     var div11 = document.createElement('div')
//     var div12 = document.createElement('div')
//     var div13 = document.createElement('div')
//     var div14 = document.createElement('div')
//     var div15 = document.createElement('div')
//     var div16 = document.createElement('div')


//     var img = document.createElement('img')

//     var input = document.createElement('input')
//     var input1 = document.createElement('input')
//     var input2 = document.createElement('input')
//     var input3 = document.createElement('input')
//     var input4 = document.createElement('input')
//     var input5 = document.createElement('input')


//     var label = document.createElement('label')
//     var label1 = document.createElement('label')
//     var label2 = document.createElement('label')
//     var label3 = document.createElement('label')
//     var label4 = document.createElement('label')
//     var label5 = document.createElement('label')


//     var p = document.createElement('p')
//     var p1 = document.createElement('p')
//     var p2 = document.createElement('p')
//     var p3 = document.createElement('p')
//     var p4 = document.createElement('p')
//     var p5 = document.createElement('p')

//     var button=document.createElement('button')

//     var text = document.createTextNode('size')
//     var text1 = document.createTextNode('colour')
//     var text2 = document.createTextNode('S')
//     var text3 = document.createTextNode('M')
//     var text4 = document.createTextNode('L')
//     var text5 = document.createTextNode('Red')
//     var text6 = document.createTextNode('Yellow')
//     var text7 = document.createTextNode('black')
//     var text8 = document.createTextNode('delete')
//     var text9 = document.createTextNode(v.imgtext)
//     var text10 = document.createTextNode(v.imgprice)
//     var text11 = document.createTextNode('RS')
//     var text12 = document.createTextNode('quantity:')
//     var text13 = document.createTextNode(v.quantityes)



//     var span=document.createElement('span')
//     span.appendChild(text12)
//     button.setAttribute('class','delete_button1')
//     button.setAttribute('onclick','delet(this)')


//     p.setAttribute('class', 'card_text')
//     p1.setAttribute('class', 'card_text')
//     p2.setAttribute('class', 'card_sizing')
//     p3.setAttribute('class', 'card_sizing')
//     p5.setAttribute('class', 'quanty2')
//     p.appendChild(text9)
//     p1.appendChild(text10)
//     p2.appendChild(text)
//     p3.appendChild(text1)
//     p4.appendChild(text11)
//     p5.appendChild(text13)

//     input.setAttribute('class', 'form-check-input')
//     input.setAttribute('type', 'radio')
//     input.setAttribute('id', 'inlineRadio1')
//     input.setAttribute('value', 'small')
//     input.setAttribute('name', 'inlineRadioOptions')
//     input1.setAttribute('class', 'form-check-input')
//     input1.setAttribute('type', 'radio')
//     input1.setAttribute('id', 'inlineRadio2')
//     input1.setAttribute('value', 'medium')
//     input1.setAttribute('name', 'inlineRadioOptions')
//     input2.setAttribute('class', 'form-check-input')
//     input2.setAttribute('type', 'radio')
//     input2.setAttribute('id', 'inlineRadio3')
//     input2.setAttribute('value', 'large')
//     input2.setAttribute('name', 'inlineRadioOptions')
//     input3.setAttribute('class','form-check-input radio_button')
//     input3.setAttribute('type', 'radio')
//     input3.setAttribute('id', 'exampleRadios1')
//     input3.setAttribute('value', 'red')
//     input3.setAttribute('name', 'exampleRadios')
//     input4.setAttribute('class','form-check-input radio_button')
//     input4.setAttribute('type', 'radio')
//     input4.setAttribute('id', 'exampleRadios2')
//     input4.setAttribute('value', 'yellow')
//     input4.setAttribute('name', 'exampleRadios')
//     input5.setAttribute('class','form-check-input radio_button')
//     input5.setAttribute('type', 'radio')
//     input5.setAttribute('id', 'exampleRadios3')
//     input5.setAttribute('value', 'black')
//     input5.setAttribute('name', 'exampleRadios')


//     label.setAttribute('class','form-check-label radio_font')
//     label.setAttribute('for','inlineRadio1')
//     label.appendChild(text2)
//     label1.setAttribute('class','form-check-label radio_font')
//     label1.setAttribute('for','inlineRadio2')
//     label1.appendChild(text3)
//     label2.setAttribute('class','form-check-label radio_font')
//     label2.setAttribute('for','inlineRadio3')
//     label2.appendChild(text4)
//     label3.setAttribute('class','form-check-label')
//     label3.setAttribute('for','exampleRadios1')
//     label3.appendChild(text5)
//     label4.setAttribute('class','form-check-label')
//     label4.setAttribute('for','exampleRadios2')
//     label4.appendChild(text6)
//     label5.setAttribute('class','form-check-label')
//     label5.setAttribute('for','exampleRadios3')
//     label5.appendChild(text7)




//     div16.setAttribute('id','quanty')
//     div15.setAttribute('id','cash')
//     div14.setAttribute('class','delete_button')
//     div13.setAttribute('class','form-check radio_div')
//     div12.setAttribute('class','form-check radio_div')
//     div11.setAttribute('class','form-check radio_div')
//     div10.setAttribute('id','card7')
//     div9.setAttribute('id','card6')
//     div6.setAttribute('class', 'form-check form-check-inline')
//     div7.setAttribute('class', 'form-check form-check-inline')
//     div8.setAttribute('class', 'form-check form-check-inline')
//     div5.setAttribute('id', 'card7')
//     div4.setAttribute('id', 'card6')
//     div3.setAttribute('id', 'card5')
//     div2.setAttribute('id', 'card4')
//     div.setAttribute('id', 'card1')
//     div1.setAttribute('id', 'card2')
//     img.setAttribute('src', v.imgdata)
//     img.setAttribute('id', 'card3')
//     span.setAttribute('class', 'quanty1')
//     p5.setAttribute('class', 'quanty2')




//     button.appendChild(text8)

//     maincard.appendChild(div)
//     div.appendChild(div1)
//     div.appendChild(div2)
//     div1.appendChild(img)
//     div2.appendChild(div3)
//     div2.appendChild(div4)
//     div2.appendChild(div9)
//     div2.appendChild(div14)
//     div3.appendChild(p)
//     div3.appendChild(div15)
//     div15.appendChild(p1)
//     div15.appendChild(p4)
//     div15.appendChild(div16)
//     div16.appendChild(span)
//     div16.appendChild(p5)
//     div4.appendChild(p2)
//     div4.appendChild(div5)
//     div5.appendChild(div6)
//     div5.appendChild(div7)
//     div5.appendChild(div8)
//     div6.appendChild(input)
//     div6.appendChild(label)
//     div7.appendChild(input1)
//     div7.appendChild(label1)
//     div8.appendChild(input2)
//     div8.appendChild(label2)
//     div9.appendChild(p3)
//     div9.appendChild(div10)
//     div10.appendChild(div11)
//     div10.appendChild(div12)
//     div10.appendChild(div13)
//     div11.appendChild(input3)
//     div11.appendChild(label3)
//     div12.appendChild(input4)
//     div12.appendChild(label4)
//     div13.appendChild(input5)
//     div13.appendChild(label5)
//     div14.appendChild(button)
//   })
// }
let abc = () => {
  var edit = document.getElementById('maincard')
  edit.innerHTML = ''
  empty.map((v) => {
    if (v.deleted === false) {
      // // console.log(v)
      // v.size === 'small' ? input.setAttribute('checked', true):input1.setAttribute('checked', true)
      // if (v.size === 'small') {
      //   input.setAttribute('checked', true)
      // }
      // if (v.size === 'medium') {
      //   input1.setAttribute('checked', true)
      // }
      // if (v.size === 'large') {
      //   input2.setAttribute('checked', true)
      // }
      var div = document.createElement('div')
      var div1 = document.createElement('div')
      var div2 = document.createElement('div')
      var div3 = document.createElement('div')
      var div4 = document.createElement('div')
      var div5 = document.createElement('div')
      var div6 = document.createElement('div')
      var div7 = document.createElement('div')
      var div8 = document.createElement('div')
      var div9 = document.createElement('div')
      var div9 = document.createElement('div')
      var div10 = document.createElement('div')
      var div11 = document.createElement('div')
      var div12 = document.createElement('div')
      var div13 = document.createElement('div')
      var div14 = document.createElement('div')
      var div15 = document.createElement('div')
      var div16 = document.createElement('div')


      var img = document.createElement('img')

      var input = document.createElement('input')
      var input1 = document.createElement('input')
      var input2 = document.createElement('input')
      var input3 = document.createElement('input')
      var input4 = document.createElement('input')
      var input5 = document.createElement('input')


      var label = document.createElement('label')
      var label1 = document.createElement('label')
      var label2 = document.createElement('label')
      var label3 = document.createElement('label')
      var label4 = document.createElement('label')
      var label5 = document.createElement('label')


      var p = document.createElement('p')
      var p1 = document.createElement('p')
      var p2 = document.createElement('p')
      var p3 = document.createElement('p')
      var p4 = document.createElement('p')
      var p5 = document.createElement('p')

      var button = document.createElement('button')

      var text = document.createTextNode('size')
      var text1 = document.createTextNode('colour')
      var text2 = document.createTextNode('S')
      var text3 = document.createTextNode('M')
      var text4 = document.createTextNode('L')
      var text5 = document.createTextNode('Red')
      var text6 = document.createTextNode('Yellow')
      var text7 = document.createTextNode('black')
      var text8 = document.createTextNode('delete')
      var text9 = document.createTextNode(v.imgtext)
      var text10 = document.createTextNode(v.imgprice)
      var text11 = document.createTextNode('RS')
      var text12 = document.createTextNode('quantity:')
      var text13 = document.createTextNode(v.quantityes)



      var span = document.createElement('span')
      span.appendChild(text12)
      button.setAttribute('class', 'delete_button1')
      button.setAttribute('onclick', 'delet(this)')


      p.setAttribute('class', 'card_text')
      p1.setAttribute('class', 'card_text')
      p2.setAttribute('class', 'card_sizing')
      p3.setAttribute('class', 'card_sizing')
      p5.setAttribute('class', 'quanty2')
      p.appendChild(text9)
      p1.appendChild(text10)
      p2.appendChild(text)
      p3.appendChild(text1)
      p4.appendChild(text11)
      p5.appendChild(text13)

      input.setAttribute('class', 'form-check-input')
      input.setAttribute('type', 'radio')
      input.setAttribute('id', 'inlineRadio1')
      input.setAttribute('value', 'small')
      v.size === 'small' ? input.setAttribute('checked', true):''
      input.setAttribute('onclick', 'smallsize(this)')
      input.setAttribute('name', v.imgtext)

      input1.setAttribute('class', 'form-check-input')
      input1.setAttribute('type', 'radio')
      // input1.setAttribute('checked', true)
      // console.log('input',input1)
      input1.setAttribute('id', 'inlineRadio2')
      input1.setAttribute('value', 'medium')
      v.size === 'medium' ? input1.setAttribute('checked', true):''
      input1.setAttribute('onclick', 'mediumsize(this)')
      input1.setAttribute('name', v.imgtext)

      input2.setAttribute('class', 'form-check-input')
      input2.setAttribute('type', 'radio')
      input2.setAttribute('id', 'inlineRadio3')
      input2.setAttribute('value', 'large')
      v.size === 'large' ? input2.setAttribute('checked', true):''
      input2.setAttribute('onclick', 'largesize(this)')
      input2.setAttribute('name', v.imgtext)

      input3.setAttribute('class', 'form-check-input radio_button')
      input3.setAttribute('type', 'radio')
      input3.setAttribute('id', 'exampleRadios1')
      input3.setAttribute('value', 'red')
      v.colour === 'red' ? input3.setAttribute('checked', true):''
      input3.setAttribute('onclick', 'redcolour(this)')
      // input3.setAttribute('name', 'exampleRadios')
      input3.setAttribute('name', `${v.imgtext}a`)

      input4.setAttribute('class', 'form-check-input radio_button')
      input4.setAttribute('type', 'radio')
      input4.setAttribute('id', 'exampleRadios2')
      input4.setAttribute('value', 'yellow')
      v.colour === 'yellow' ? input4.setAttribute('checked', true):''
      input4.setAttribute('onclick', 'yellowcolour(this)')
      // input4.setAttribute('name', 'exampleRadios')
      input4.setAttribute('name', `${v.imgtext}a`)

      input5.setAttribute('class', 'form-check-input radio_button')
      input5.setAttribute('type', 'radio')
      input5.setAttribute('id', 'exampleRadios3')
      input5.setAttribute('value', 'black')
      v.colour === 'black' ? input5.setAttribute('checked', true):''
      input5.setAttribute('onclick', 'blackcolour(this)')
      // input5.setAttribute('name', 'exampleRadios')
      input5.setAttribute('name', `${v.imgtext}a`)



      label.setAttribute('class', 'form-check-label radio_font')
      label.setAttribute('for', 'inlineRadio1')
      label.appendChild(text2)
      label1.setAttribute('class', 'form-check-label radio_font')
      label1.setAttribute('for', 'inlineRadio2')
      label1.appendChild(text3)
      label2.setAttribute('class', 'form-check-label radio_font')
      label2.setAttribute('for', 'inlineRadio3')
      label2.appendChild(text4)
      label3.setAttribute('class', 'form-check-label')
      label3.setAttribute('for', 'exampleRadios1')
      label3.appendChild(text5)
      label4.setAttribute('class', 'form-check-label')
      label4.setAttribute('for', 'exampleRadios2')
      label4.appendChild(text6)
      label5.setAttribute('class', 'form-check-label')
      label5.setAttribute('for', 'exampleRadios3')
      label5.appendChild(text7)




      div16.setAttribute('id', 'quanty')
      div15.setAttribute('id', 'cash')
      div14.setAttribute('class', 'delete_button')
      div13.setAttribute('class', 'form-check radio_div')
      div12.setAttribute('class', 'form-check radio_div')
      div11.setAttribute('class', 'form-check radio_div')
      div10.setAttribute('id', 'card7')
      div9.setAttribute('id', 'card6')
      div6.setAttribute('class', 'form-check form-check-inline')
      div7.setAttribute('class', 'form-check form-check-inline')
      div8.setAttribute('class', 'form-check form-check-inline')
      div5.setAttribute('id', 'card7')
      div4.setAttribute('id', 'card6')
      div3.setAttribute('id', 'card5')
      div2.setAttribute('id', 'card4')
      div.setAttribute('id', 'card1')
      div1.setAttribute('id', 'card2')
      img.setAttribute('src', v.imgdata)
      img.setAttribute('id', 'card3')
      span.setAttribute('class', 'quanty1')
      p5.setAttribute('class', 'quanty2')




      button.appendChild(text8)

      maincard.appendChild(div)
      div.appendChild(div1)
      div.appendChild(div2)
      div1.appendChild(img)
      div2.appendChild(div3)
      div2.appendChild(div4)
      div2.appendChild(div9)
      div2.appendChild(div14)
      div3.appendChild(p)
      div3.appendChild(div15)
      div15.appendChild(p1)
      div15.appendChild(p4)
      div15.appendChild(div16)
      div16.appendChild(span)
      div16.appendChild(p5)
      div4.appendChild(p2)
      div4.appendChild(div5)
      div5.appendChild(div6)
      div5.appendChild(div7)
      div5.appendChild(div8)
      div6.appendChild(input)
      div6.appendChild(label)
      div7.appendChild(input1)
      div7.appendChild(label1)
      div8.appendChild(input2)
      div8.appendChild(label2)
      div9.appendChild(p3)
      div9.appendChild(div10)
      div10.appendChild(div11)
      div10.appendChild(div12)
      div10.appendChild(div13)
      div11.appendChild(input3)
      div11.appendChild(label3)
      div12.appendChild(input4)
      div12.appendChild(label4)
      div13.appendChild(input5)
      div13.appendChild(label5)
      div14.appendChild(button)
    }
  })
}
export function hell(){
  var h=false
  empty.map((v)=>{


    if(v.deleted===false){
    if(v.colour===null&&v.size===null){
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'fill all card data properly',
        // footer: '<a href="./auth/index.html">you want to signup your acount?</a>'
      })
      return h=false
    }
    else{
      console.log('h',h)
      return h=true
    }
  }
  })
  
  if(h===true){
  window.location = './viewbag.html';
  }
}

// console.log('hello')