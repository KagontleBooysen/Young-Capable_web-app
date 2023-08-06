
    const firebaseConfig = {
      apiKey: "AIzaSyARkD-MMWcyEkXdU1xfbyHh7LbrPO1oEXI",
      authDomain: "login-auth-1b7ee.firebaseapp.com",
      projectId: "login-auth-1b7ee",
      storageBucket: "login-auth-1b7ee.appspot.com",
      messagingSenderId: "8240420808",
      appId: "1:8240420808:web:d660e1b45567943ccb92fd"
    };
  

    // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("login").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }

  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };