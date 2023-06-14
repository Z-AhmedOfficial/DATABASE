// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js"; //YE KHUD ADD KARNA

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTHTDctVeehLy_X-jsK7-9Z2_sj6PCaes",
  authDomain: "tdapp-13037.firebaseapp.com",
  projectId: "tdapp-13037",
  storageBucket: "tdapp-13037.appspot.com",
  messagingSenderId: "391486073330",
  appId: "1:391486073330:web:aa230815134fe93a34636b",
  measurementId: "G-YG7FEHQLFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getDatabase() //YE KHUD ADD KARNA


var inp = document.getElementById("inp");

window.Submit = function(){
    var value = inp.value;
    var obj = {
        todo : value
    }
    var userRef = push(ref(db,"todo"))

    obj.id = userRef.key;
    
    set(userRef,obj);
    console.log(obj)
    alert(value);
}
