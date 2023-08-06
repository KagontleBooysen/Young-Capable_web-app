// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARkD-MMWcyEkXdU1xfbyHh7LbrPO1oEXI",
    authDomain: "login-auth-1b7ee.firebaseapp.com",
    projectId: "login-auth-1b7ee",
    storageBucket: "login-auth-1b7ee.appspot.com",
    messagingSenderId: "8240420808",
    appId: "1:8240420808:web:d660e1b45567943ccb92fd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the database
  const database = firebase.database();
  
  // Function to save registration data to the database
  function saveRegistrationData(fullName, email, password) {
    // Push data to "users" node
    database.ref("users").push({
      fullName: fullName,
      email: email,
      password: password,
    });
  }
  
  // Function to handle the registration form submission
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    saveRegistrationData(fullName, email, password);
  
    // Show the success message (you can add this div in your HTML)
    document.getElementById("successMessage").style.display = "block";
  
    // Reset the registration form
    document.getElementById("registerForm").reset();
  
    // Redirect to the login page after 3 seconds (adjust the delay as needed)
    setTimeout(() => {
      window.location.href = "login.html"; // Replace "login.html" with the actual login page URL
    }, 3000);
  });
  