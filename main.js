 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCcCth4J1GC0R-EuA7mTo7qVjdMD5SITKQ",
    authDomain: "firetest-27bde.firebaseapp.com",
    projectId: "firetest-27bde",
    storageBucket: "firetest-27bde.appspot.com",
    messagingSenderId: "890343700258",
    appId: "1:890343700258:web:ee1e3678245bbf1c8fd77b",
    measurementId: "G-BCLE68N1DG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

document.getElementById('contactform').addEventListener('submit', submitForm);
var registerRef;
function submitForm(e)
{
    e.preventDefault();

   //var registerRef = firebase.database().ref('registers');
   registerRef = firebase.database().ref('registers');

    // get values now
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
  
    // save the details now by calling savedetails function
    savedetails(firstname, lastname, username, email);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    }, 3000);
}

// function to get input values

function getInputVal()
{
    return document.getElementById(id).value;
}

// save messages to firebase
function savedetails(firstname, lastname, username, email)
{
   var newregistersRef = registerRef.push();
   newregistersRef.set({
       firstname: firstname,
       lastname: lastname,
       username: username,
       email: email
   });
}