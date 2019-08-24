//initfirebase

var firebaseConfig = {
  apiKey: "AIzaSyCVK--i2QJo_aZawkexPtkK6SD_IFLVRyI",
  authDomain: "la-corte-de-lo-buhos.firebaseapp.com",
  databaseURL: "https://la-corte-de-lo-buhos.firebaseio.com",
  projectId: "la-corte-de-lo-buhos",
  storageBucket: "",
  messagingSenderId: "112259106430",
  appId: "1:112259106430:web:79e9fec8a2deecf8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// CONTACT FORM MANAGEMENT - start

//Reference contact collection

var db =  firebase.firestore();

//Get Contact info

document.getElementById('contactSend').addEventListener('click', submitForm);

function submitForm(e){

e.preventDefault();

//input values

var client = getInputValue('client');
var email = getInputValue('email');
var phone = getInputValue('phone');
var product = getInputValue('product');

sendContact(client, email, phone, product);

}

function getInputValue(id){

return document.getElementById(id).value;

}

function sendContact(client, email, phone, product){

    db.collection("Contact").add({
        client: client,
        email: email,
        phone: phone,
        product: product
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });

}

// CONTACT FORM MANAGEMENT - end
