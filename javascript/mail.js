// enquiry

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // email for enquiry
  function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "shelters.shirdi@gmail.com",
      Password: "5F4521BC3C440E55C3BCD1A9CB81220E9879",
      To: "shelters.shirdi@gmail.com",
      From: "shelters.shirdi@gmail.com",
      Subject: "Shirdi Shelters - Enquiry",
      Body: `<h1>Enquiry</h1>
          <p>Name: ${document.getElementById("username").value}</p> 
          <p>Email: ${document.getElementById("mail").value}</p>
          <p>Mobile: ${document.getElementById("phone").value}</p>
          <p>OTP: ${document.getElementById("otp").value}</p>
          <p>Projects: ${document.getElementById("flat").value}</p>
          <p>Message: ${document.getElementById("message").value}</p>
        `,
    })
      .then(function (message) {
        console.log("mail sent: ", message);
        alert("Mail received successfully, Thanks!!!");
      })
      .catch((e) => console.log("mail error: ", e));
  }
  