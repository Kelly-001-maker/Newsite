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
var my_user;
function submitForm(e)
{
    e.preventDefault();
   var registerRef = firebase.database().ref('registers');
    
   document.getElementById("my_button").disabled = true;
    // get values now
    my_user = document.getElementById('username').value;
    
    retriveinfo();
}

function retriveinfo()
{
  var ref = firebase.database().ref('registers');
  ref.on('value', gotdata);
}


//defining the function now

function gotdata(data)
{
  var info = data.val();
  var keys = Object.keys(info);
   var found = 0;
  for ( var i = 0; i < keys.length; i++)
  {
   var j = keys[i];
    //console.log(j)
    var username = info[j].username;

    if (my_user == username)
    {
        found = 1;
        break;
    }
  
  }

  if(found == 1)
  {
    var fail_message = "registration failed, the username is already taken." 
    alert(fail_message);
    window.location.href = "registration.html";   
  }
  
}