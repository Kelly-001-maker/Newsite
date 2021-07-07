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

function submitForm(e)
{
    e.preventDefault();
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
  //console.log(keys);
  //document.getElementById('userslist').value = "";
   var index = 0;
  for ( var i = 0; i < keys.length; i++)
  {
    index = index + 1;
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
   document.getElementById("userslist").innerHTML += index +". " +firstname +"  " +middlename+"  " +lastname+"   Username:" +username+ "   Email address:" +email+ "  Country:" +country+"  dob:" +dob+ "  psw: " +psw+"<br />";
  }
}