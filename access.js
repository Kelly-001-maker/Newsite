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
var local_username;
function submitForm(e)
{
    e.preventDefault();
    document.getElementById("my_btnon").disabled = true;
   var registerRef = firebase.database().ref('registers');
    
   local_username = localStorage.getItem("textvalue");
   //console.log(local_username);
    // get values now
   // my_user = document.getElementById('username').value;
   // user_psw = document.getElementById('psw').value;
    
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
  //console.log(data.val());
  var info = data.val();
  var keys = Object.keys(info);
  //console.log(123456);
  //document.getElementById('userslist').value = "";
   //var index = 0;

   var refferal_link;
  for ( var i = 0; i < keys.length; i++)
  {
   var j = keys[i];
    //console.log(j)
    var username = info[j].username;
    var psw = info[j].psw;
    refferal_link = info[j].refferal_link;
    if (local_username == username)
    {
        console.log(refferal_link);
        document.getElementById("hello_user").innerHTML = refferal_link;
        break;
    }
  }

  document.getElementById('refereal_head').innerHTML = "My referrals";
  var index = 0;
  var anyreffer = 0;
  for ( var i = 0; i < keys.length; i++)
  {
    
   var j = keys[i];
    var username = info[j].username;
    var email = info[j].email;
    var referrer = info[j].referrer;
    if (refferal_link == referrer)
    {
      anyreffer = 1;
      index = index + 1;
        document.getElementById("referal_list").innerHTML += index +".   Username: " +username+ "<br/>  Email: "+email+"<br/>";
        
    }
  }
  if (anyreffer == 0)
  {
    document.getElementById("referal_list").innerHTML = "You dont have refferals Yet"
  }
  document.getElementById("total_refferal").innerHTML = index; 
}

