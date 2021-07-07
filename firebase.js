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
  
    // save the details now by calling savedetails function
    if (psw==psw_repeat) 
    {
       //save the details to database
       savedetails(firstname, middlename,lastname, username, email, country, dob, psw);
       //clear form
       document.getElementById("contactform").reset();
       // show alert
       alert("you have succesfully created an account proceed to login");
       window.location.href = "login.html";
       
     }
     else
     {
      alert("registration failed, password does not much");
      window.location.href = "index1.html";
      // document.getElementById("myformreg").action = "registration.html";
     }
    //Show alert
    //document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds
    //setTimeout(function(){
      //document.querySelector('.alert').style.display = 'none';
   // }, 5000);
}


// save messages to firebase
function savedetails(firstname, middlename, lastname, username, email, country, dob, psw)
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
       psw: psw
   });
   //retriveinfo();
}

// retrieving data from the database

function retriveinfo()
{
  var ref = firebase.database().ref('registers');
  ref.on('value', gotdata);
}


//defining the function now

function gotdata(data)
{
  //console.log(data.val());
  var info = data.val();
  var keys = Object.keys(info);
  //console.log(keys);

  for ( var i = 0; i < keys.length; i++)
  {
    var j = keys[i];
    //console.log(j)
    var firstname = info[j].firstname;
    var middlename = info[j].middlename;
    var lastname = info[j].lastname;
    var username = info[j].username;
    var email = info[j].email; 
    var country = info[j].country;
    var dob = info[j].dob;
    var psw = info[j].psw;
    //console.log(firstname, lastname, username, email);
    //var li = document.createElement('li', firstname +'  '+lastname+'  '+username);
   // li.parent('userslist');
   //document.getElementById("userslist").innerHTML += firstname +"  " +middlename+"  " +lastname+"  " +username+ "  " +email+ "  " +country+"  " +dob+ "  " +psw+"<br />";
   
  }
}