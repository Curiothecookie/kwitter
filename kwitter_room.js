var firebaseConfig = {
    apiKey: "AIzaSyDqToItQwX8VxNfTolueuVzv12w1iJeYs0",
    authDomain: "kwitter-550f1.firebaseapp.com",
    databaseURL: "https://kwitter-550f1.firebaseio.com",
    projectId: "kwitter-550f1",
    storageBucket: "kwitter-550f1.appspot.com",
    messagingSenderId: "942568180946",
    appId: "1:942568180946:web:6b71c3628069a22864b10b",
    measurementId: "G-1FQ6RQEGY9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}