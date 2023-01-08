const firebaseConfig = {
    apiKey: "AIzaSyDPwtyi-xpOXusgJWX-ufYF0U9gSxbP0O4",
    authDomain: "project-102-1ab0e.firebaseapp.com",
    projectId: "project-102-1ab0e",
    storageBucket: "project-102-1ab0e.appspot.com",
    messagingSenderId: "1024975107591",
    appId: "1:1024975107591:web:b06c6c487e96797321dca2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



