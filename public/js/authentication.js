  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA6FDqHq9Ea0PS53yt3pN8XLtNCN4wtuc8",
    authDomain: "inventory-management-farming.firebaseapp.com",
    projectId: "inventory-management-farming",
    storageBucket: "inventory-management-farming.appspot.com",
    messagingSenderId: "478125174152",
    appId: "1:478125174152:web:4f123dd7b4c3137934de3d",
    measurementId: "G-SRGKLM8XN9"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("logged in");
    
        const mkoolima_user = firebase.auth().currentUser;
        //what will displayed on the header
        var jina = mkoolima_user.displayName;
        
        var photo = mkoolima_user.photoURL;
    
        if (jina === null){
        //if no dispaly name, we use the email address
        jina = mkoolima_user.email;
        }
        $('#user_profile').html(jina);
        if (photo != null){
            //use the google photo
            $("#avatar").attr("hidden", true);
            $("#user_photo").attr("hidden", false);
            $("#user_photo").attr("src", photo);
        }
    } else {
        console.log("Not logged in");
        window.location.replace("login.html");
    }
    });
});
