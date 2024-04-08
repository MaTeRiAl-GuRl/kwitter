var firebaseConfig = {
      apiKey: "AIzaSyB-oz8Lrj94JXQA4nHI1Glrvx1j-C_mybU",
      authDomain: "kwitter-3-b4c28.firebaseapp.com",
      databaseURL: "https://kwitter-3-b4c28-default-rtdb.firebaseio.com",
      projectId: "kwitter-3-b4c28",
      storageBucket: "kwitter-3-b4c28.appspot.com",
      messagingSenderId: "10714206098",
      appId: "1:10714206098:web:03136980105f199aa87b4b"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</dive><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}