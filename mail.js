const firebaseConfig = {
    apiKey: "AIzaSyCLi4014ufagulzZvnKG3MeiAkMIwBF_uE",
    authDomain: "contact-form-yg.firebaseapp.com",
    databaseURL: "https://contact-form-yg-default-rtdb.firebaseio.com",
    projectId: "contact-form-yg",
    storageBucket: "contact-form-yg.appspot.com",
    messagingSenderId: "792460511704",
    appId: "1:792460511704:web:6d072b45c5e10111c58aad"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

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