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
var user_psw;
var my_user;
function submitForm(e)
{
    e.preventDefault();
   var registerRef = firebase.database().ref('registers');
    

    // get values now
    my_user = document.getElementById('username').value;
    user_psw = document.getElementById('psw').value;
    
    retriveinfo();
}

function retriveinfo()
{
  var ref = firebase.database().ref('registers');
  ref.on('value', gotdata);
}


//defining the function now

function confirmpassword(userpsw,databasepsw)
{
    var cond = 0;
    if(userpsw==databasepsw)
    {
        cond=1;
    }
   return cond;
}


function gotdata(data)
{
  //console.log(data.val());
  var info = data.val();
  var keys = Object.keys(info);
  //console.log(123456);
  //document.getElementById('userslist').value = "";
   //var index = 0;
   var found = 0;
   var passcorrect = 0;
   var mykey;
  for ( var i = 0; i < keys.length; i++)
  {
   var j = keys[i];
    //console.log(j)
    var username = info[j].username;
    var psw = info[j].psw;
    if (my_user == username)
    {
        found = 1;
        if(psw == user_psw )
        {
            passcorrect = 1; 
        }
        break;
    }
  
  }

  if(found == 1)
  {
    var success_message = "login successfull."
    var fail_message = "login failed, incorrect password"
      if (passcorrect == 1)
      {
          alert(success_message);
          window.location.href = "mydata.html";
          //document.getElementById("contactform").action = "index1.html";
      }
      else
      {
          alert(fail_message);
          window.location.href = "login.html";
      }    
  }
  else
  {
    var message = " login failed, the username does  not exist."
    alert(message);
    window.location.href = "login.html";
  }
}