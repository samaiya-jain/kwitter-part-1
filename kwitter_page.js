var firebaseConfig = {
    apiKey: "AIzaSyDiNgnIhcXKEQ4XyLWWvoQFSnIHEfKBDEk",
    authDomain: "kwitter-9df22.firebaseapp.com",
    projectId: "kwitter-9df22",
    storageBucket: "kwitter-9df22.appspot.com",
    messagingSenderId: "450682152273",
    appId: "1:450682152273:web:a6c2be33ff9f5334145f70"
};
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}