
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

    //fetch user name from local storage

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function add_room(){
   // getting room name entered by the user
      room_name = document.getElementById("new_Room").value;
      localStorage.setItem("room_name", room_name);
  //store it in firebase
       //to access our firebase - firebase.database()
       //referring to the folder  -  for main folder ref("/") for subfolder ref("/subfolder")
       //creating the folder child("name of new folder").update({ key name : key value});
       //
      firebase.database().ref("/").child(room_name).update({
         purpose : "new_room"
      });
  // store it in a local Storage    
   
      window.location = "kwitter_message.html";
  }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("public_rooms").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
        row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id) ' >  #" + Room_names + "</div> <hr>";
        document.getElementById("public_rooms").innerHTML += row;

      });
    });
  }



getData();


function redirectToRoomName(name_selected){

  localStorage.setItem("room_name",name_selected);
  window.location = "kwitter_message.html";

}

function logout(){
  window.location = "index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}