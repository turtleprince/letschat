
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCTOF6Z552BJtbCwYHPpO-ZDqz8ExvcYXo",
    authDomain: "kwitter-e7aa7.firebaseapp.com",
    databaseURL: "https://kwitter-e7aa7-default-rtdb.firebaseio.com",
    projectId: "kwitter-e7aa7",
    storageBucket: "kwitter-e7aa7.appspot.com",
    messagingSenderId: "613869064331",
    appId: "1:613869064331:web:fd3fcaab03a4994cf7448e",
    measurementId: "G-YZPGEJDHTM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("rome_name");
  
  function Send() {

    msg = document.getElementById("new_msg").value;
    firebase.database().ref(room_name).push({
       name:user_name,
       message: msg,
       like:0
    });
    document.getElementById("new_msg") = "";

  }