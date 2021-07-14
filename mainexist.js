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
    var middlename = document.getElementById('middlename').value;
    var lastname = document.getElementById('lastname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var dob = document.getElementById('dob').value;
    var psw = document.getElementById('psw').value;
    var psw_repeat = document.getElementById('psw_repeat').value;
    if (psw!=psw_repeat) 
    {
      alert("registration failed, password does not match");
      window.location.href = "registration.html"; 
    }
    // call for a function to check whether a username exists
    retriveinfo();
    //Function to generate a unique link
    function generate_ref_link()
    { 
      var unique_ref_link = "http://Omagcryptoinevst-";
      var i;
      for (i = 0; i < 10; i++) 
      {
        var r_num =Math.floor(Math.random() * 25);
        var convert = r_num + 65;
        var res = String.fromCharCode(convert);
        unique_ref_link +=res;
      }
      unique_ref_link +="/";
      unique_ref_link += username;

      return unique_ref_link;
    }
    var refferal_link = generate_ref_link();
    // save the details now by calling savedetails function
    savedetails(firstname, middlename,lastname, username, email, country, dob, psw, refferal_link);
    //Show alert
    document.querySelector('.alert').style.display = 'block';
    //alert("registration succeccesfull, proceed to login");
    
    
    //hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
   }, 6000);
   document.getElementById("contactform").reset();
  // window.location.href = "login.html"; 
}


// save messages to firebase
function savedetails(firstname, middlename, lastname, username, email, country, dob, psw, refferal_link)
{
   var newregistersRef = registerRef.push();
   newregistersRef.set({
       firstname: firstname,
       middlename: middlename,
       lastname: lastname,
       username: username,
       email: email,
       country: country,
       dob: dob,
       psw: psw,
       refferal_link: refferal_link
   });
}
