// navbar
function navbar() {
  setTimeout(() => {
    navbar.style.opacity = 1;
  }, 4000);

  var navbar = document.getElementById("navbar");

  swiper.on("slideChange", function () {
    console.log("swiper", swiper.activeIndex);
    navbar.style.opacity = 1;
    if (swiper.activeIndex > 0) {
      navbar.classList.add("sticky");
      navbar.classList.remove("reverseSticky");
      setTimeout(() => {
        navbar.style.opacity = 0;
      }, 3000);
      navbar.style.transition = "all 2s";
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.add("reverseSticky");
      navbar.style.opacity = 1;
      navbar.style.transition = "";
    }
  });

  navbar.addEventListener("mouseover", () => {
    navbar.style.opacity = 1;
  });
  navbar.addEventListener("mouseout", () => {
    if (swiper.activeIndex > 0) {
      setTimeout(() => {
        navbar.style.opacity = 0;
      }, 3000);
    }
  });
}

navbar();

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

// day-night
const toggleCheckbox = document.getElementById("toggle_checkbox");
const day = document.getElementById("day");
const night = document.getElementById("night");
const landingImg = document.getElementById("landingImg");
const star = document.getElementById("star");
const moon = document.getElementById("moon");

function toggleFunction() {
  console.log("night: style - ", night);
  if (toggleCheckbox.checked == true) {
    day.style.opacity = 0;
    star.style.opacity = 0.5;
    moon.style.opacity = 1;
    star.style.animation = "";
    moon.style.animation = "bounce 4s ease infinite";
  } else {
    day.style.opacity = 1;
    moon.style.opacity = 0.5;
    star.style.opacity = 1;
    moon.style.bottom = "8px";
    moon.style.animation = "";
    star.style.animation = "bounce1 4s ease infinite";
  }
}

setInterval(() => {
  console.log("setInterval", toggleCheckbox.value);
  toggleCheckbox.checked = !toggleCheckbox.checked;
  toggleFunction();
}, 7000);

// tech spec

const pillers = document.getElementById("pillers");
const doors = document.getElementById("doors");
const floors = document.getElementById("floors");
const tub = document.getElementById("tub");

function imageAnimations(type) {
  console.log(type);
  if (type === "pillers") {
    pillers.style.opacity = 1;
    doors.style.opacity = 0;
    floors.style.opacity = 0;
    tub.style.opacity = 0;

    // pillers.style.display = 'block';
    // doors.style.display = 'block';
    // floors.style.display = 'none';
    // tub.style.display = 'none';
    console.log(type, doors.style.opacity);
  } else if (type === "doors") {
    pillers.style.opacity = 0;
    doors.style.opacity = 1;
    floors.style.opacity = 0;
    tub.style.opacity = 0;

    // pillers.style.display = 'block';
    // doors.style.display = 'block';
    // floors.style.display = 'none';
    // tub.style.display = 'none';
    console.log(type, doors.style.opacity);
  }
}

// maps
