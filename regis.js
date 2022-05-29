// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFUeXqzT-Ri4MRN5Wo2r6HmD58A1Hc9k4",
  authDomain: "lnt-final-project-ddd98.firebaseapp.com",
  projectId: "lnt-final-project-ddd98",
  storageBucket: "lnt-final-project-ddd98.appspot.com",
  messagingSenderId: "936408828982",
  appId: "1:936408828982:web:ed7725a8b7e99b99c81c97"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// submit.addEventListener("click",function(){
//     alert("Submited Succesfully!")
// })

var form = document.getElementById('form');
var nameForm = document.getElementById('name');
var email = document.getElementById('email');
var event = document.getElementById('event');
var phone = document.getElementById('phone');

// function (e) {}
form.addEventListener('submit', e => {
 
    if (!validateData()) {
        e.preventDefault();
    }
    else {
        alert("You are successfully registered");
    }
});

// firebase tidak jalan,saya sudah pusing

// // function (e) {}
// submit.addEventListener("click", function () {
 
//     //     if (!validateData()) {
//     //         e.preventDefault();
//     //     }
//     //     else {
//             addDoc(collection(db,"users"),{
//                 nameValue : nameForm.value,
//                 emailValue : email.value,
//                 eventValue : event.value,
//                 phoneValue : phone.value
//             }).then(()=>{
//                 nameValue.value = "";
//                 emailValue.value = "";
//                 eventValue.value = "";
//                 phoneValue.value="";
//             })
    
//             alert("You are successfully registered");
//         }
    
//     );

function validateData() {
	var nameValue = nameForm.value;
	var emailValue = email.value;
    var eventValue = event.value;
    var phoneValue = phone.value;
    var flag = 1;
	
	if (nameValue === '') {
		invalidMsg(nameForm, 'Name cannot be blank');
        flag = 0;
	}
    else {
		validMsg(nameForm);
	}
	
	if (emailValue === '') {
		invalidMsg(email, 'Email cannot be blank');
        flag = 0;
	} 
    else if (!isEmail(emailValue)) {
		invalidMsg(email, 'Not a valid email');
        flag = 0;
	}

    else {
		validMsg(email);
	}

    if (phoneValue === '') {
		invalidMsg(phone, 'Phone cannot be blank');
        flag = 0;
	} 

    else if (!isPhone(phoneValue)) {
		invalidMsg(phone, 'Not a valid phone');
        flag = 0;
	}

    else {
		validMsg(phone);
	}


    if (eventValue === '') {
		invalidMsg(event, 'Event cannot be blank');
        flag = 0;
	}
    else {
		validMsg(event);
	}

    return flag;
}

function isPhone(phone){

    var len = phone.length;
    if(!telpon.value.startsWith("08") || telpon.value.length>14) {
		return false;
	}

    return true;
}

//validasi email
function isEmail(email) {

    var len = email.length;
    if (len < 6) {
        return false;
    }

   
    if (email[0] == '.') {
        return false;
    }

    var isDotHere = email.indexOf('.');
    var at = email.indexOf('@');
    if (at == -1 || at == 0 || email[at-1] == '.' || isDotHere == -1) {
        return false;
    }

    var atLast = -1;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            atLast = i;
        }
    }

    
    if (atLast + 1 == len) {
        return false;
    }

    var dotLast = -1;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '.') {
            dotLast = i;
        }
    }

    if (dotLast + 1 == len) {
        return false;
    }

    return true;
}

function invalidMsg(input, message) {
	var container = input.parentElement;
	var msg = container.querySelector('h5');
    msg.style.display = 'block';
	container.className = 'regis-data invalid';
	msg.innerText = message;
}

function validMsg(input) {
	var container = input.parentElement;
	container.className = 'regis-data valid';
    var msg = container.querySelector('h5');
    msg.style.display = 'none';
}

function displayChange() {
    var x = document.getElementById("city").value;
    document.getElementById("city-warning").innerHTML = "You selected: " + x;
}

function changeFontColor() {
    var x = document.getElementById("name");
    x.style.color = "blue";
}

function changeBorderColor() {
    var x = document.getElementById("email");
    x.style.borderColor = "blue";
}

function goBack() {
    var x = document.getElementById("email");
    x.style.borderColor = "black";
}

function inputNamePrompt() {
    let name = prompt("Please enter your name");
    if (name != null) {
      document.getElementById("name").value = name;
    }
}